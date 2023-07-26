import { PuppeteerLaunchOptions } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import AdblockerPlugin from 'puppeteer-extra-plugin-adblocker'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

puppeteer.use(AdblockerPlugin()).use(StealthPlugin())

const defaultOptions: PuppeteerLaunchOptions = {
  defaultViewport: null,
  headless: true,
  timeout: 30_000,
}

let options = { ...defaultOptions }

export const setOptions = (extraOptions: PuppeteerLaunchOptions) => {
  options = { ...defaultOptions, ...extraOptions }
}

export const getBrowser = async () => await puppeteer.launch(options)
