import getAllSessions from './apis/getAllSessions'
import getItemDetailByBrowser from './apis/getItemDetailByBrowser'
import getItems from './apis/getItems'
import { IItems } from './interfaces/itemsResponse'
import { ISingleItemByBrowser } from './interfaces/singleItemByBrowserResponse'
import parseSession from './utils/parseSession'

/**
 *
 *
 * @returns
 */
export const getCurrentFlashSaleItems = async (): Promise<IItems[]> => {
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
 * @returns {Promise<ISingleItemByBrowser>}
 */
export const getItemDetail = async (
  url: string,
): Promise<ISingleItemByBrowser> => {
  const itemDetail = await getItemDetailByBrowser(url)
  return itemDetail
}
