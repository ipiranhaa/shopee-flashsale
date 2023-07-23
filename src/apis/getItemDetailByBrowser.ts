import {
  type IData,
  type ISingleItemByBrowserResponse,
} from '../interfaces/singleItemByBrowserResponse'
import { PuppeteerLaunchOptions } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import AdblockerPlugin from 'puppeteer-extra-plugin-adblocker'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

puppeteer.use(AdblockerPlugin()).use(StealthPlugin())

interface IOptions {
  isHeadless?: boolean
  executablePath?: string
}

const getItemDetailByBrowser = (
  url: string,
  options: IOptions = {},
): Promise<IData> => {
  const launchOption: PuppeteerLaunchOptions = {
    defaultViewport: null,
    headless: true,
  }
  if (options.isHeadless !== undefined) {
    launchOption.headless = options.isHeadless
  }
  if (options.executablePath) {
    launchOption.executablePath = options.executablePath
  }

  return new Promise((resolve, reject) => {
    puppeteer.launch(launchOption).then(async (browser) => {
      const page = await browser.newPage()
      await page.setRequestInterception(true)
      await page.goto(url)

      page.on('response', async (response) => {
        const url = response.url()
        if (url.includes('pdp/get_pc')) {
          const json: ISingleItemByBrowserResponse = await response.json()
          resolve(json.data)
          await browser.close()
        } else {
          reject('Item detail not found.')
        }
      })
    })
  })
}

export default getItemDetailByBrowser
