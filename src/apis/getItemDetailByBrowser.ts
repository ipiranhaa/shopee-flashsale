import {
  type IData,
  type ISingleItemByBrowserResponse,
} from '../interfaces/singleItemByBrowserResponse'
import { PuppeteerLaunchOptions } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import AdblockerPlugin from 'puppeteer-extra-plugin-adblocker'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

puppeteer.use(AdblockerPlugin()).use(StealthPlugin())

const getItemDetailByBrowser = (
  url: string,
  options: PuppeteerLaunchOptions = {},
): Promise<IData> => {
  const defaultOptions: PuppeteerLaunchOptions = {
    defaultViewport: null,
    headless: true,
    timeout: 30_000,
    ...options,
  }

  return new Promise((resolve, reject) => {
    puppeteer.launch(defaultOptions).then(async (browser) => {
      const page = await browser.newPage()
      page.setDefaultNavigationTimeout(0)
      await page.setRequestInterception(true)
      await page.goto(url)

      const rejectTimeout = setTimeout(() => {
        reject('Item detail not found.')
      }, defaultOptions.timeout)

      page.on('response', async (response) => {
        const url = response.url()
        if (url.includes('pdp/get_pc')) {
          const json: ISingleItemByBrowserResponse = await response.json()
          clearTimeout(rejectTimeout)
          resolve(json.data)
          await browser.close()
        }
      })
    })
  })
}

export default getItemDetailByBrowser
