import getAllSessions from './apis/getAllSessions'
import getItemDetailByBrowser from './apis/getItemDetailByBrowser'
import getItems from './apis/getItems'
import { type IFlashSaleItems } from './interfaces/IFlashSaleItemsResponse'
import { type IData } from './interfaces/singleItemByBrowserResponse'
import parseSession from './utils/parseSession'

export * from './interfaces/IFlashSaleItemsResponse'
export * from './interfaces/singleItemByBrowserResponse'

/**
 *
 *
 * @returns
 */
export const getCurrentFlashSaleItems = async (): Promise<
  IFlashSaleItems[]
> => {
  const allSessions = await getAllSessions()
  const currentSession = allSessions[0]
  const promotionId = currentSession.promotionid

  const paginations = await parseSession(currentSession)
  const itemPromises = paginations.map((pagination) =>
    getItems(promotionId, pagination),
  )
  const itemsDetailByPaginations = await Promise.all(itemPromises)
  return itemsDetailByPaginations.flat()
}
/**
 *
 *
 * @param {string} url
 * @returns {Promise<IData>}
 */
export const getItemDetail = async (url: string): Promise<IData> => {
  const itemDetail = await getItemDetailByBrowser(url)
  return itemDetail
}
