import {
  type IData,
  type ISingleItemByBrowserResponse,
} from '../interfaces/singleItemByBrowserResponse'
import { getBrowser, initOptions } from '../services/puppeteerClient'
import { PuppeteerLaunchOptions } from 'puppeteer'

const getItemDetailByBrowser = async (
  url: string,
  options: PuppeteerLaunchOptions = {},
): Promise<IData> => {
  const hasOptions = Object.keys(options).length > 0
  if (hasOptions) {
    initOptions(options)
  }

  const browser = getBrowser()

  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(0)
  await page.setRequestInterception(true)
  await page.goto(url)

  const response = await page.waitForResponse(
    (response) =>
      response.url().includes('pdp/get_pc') && response.status() === 200,
  )
  const json: ISingleItemByBrowserResponse = await response.json()
  await browser.close()
  return json.data
}

export default getItemDetailByBrowser
