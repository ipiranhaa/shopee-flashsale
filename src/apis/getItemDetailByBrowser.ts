import {
  ISingleItemByBrowser,
  ISingleItemByBrowserResponse,
} from '../interfaces/singleItemByBrowserResponse'
import puppeteer from 'puppeteer-extra'
import AdblockerPlugin from 'puppeteer-extra-plugin-adblocker'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

puppeteer.use(AdblockerPlugin()).use(StealthPlugin())

const getItemDetailByBrowser = (url: string): Promise<ISingleItemByBrowser> => {
  return new Promise((resolve) => {
    puppeteer
      .launch({
        headless: true,
        defaultViewport: null,
      })
      .then(async (browser) => {
        const page = await browser.newPage()
        await page.setRequestInterception(true)
        await page.goto(url)

        page.on('response', async (response) => {
          const url = response.url()
          if (url.includes('pdp/get_pc')) {
            const json: ISingleItemByBrowserResponse = await response.json()
            resolve(json.data.item)
            await browser.close()
          }
        })
      })
  })
}

export default getItemDetailByBrowser
