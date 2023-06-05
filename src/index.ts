import getAllSessions from './apis/getAllSessions'
import getItems from './apis/getItems'
import getSingleItem from './apis/getSingleItem'
import parseSession from './utils/parseSession'

/**
 *
 *
 * @returns
 */
export const getCurrentFlashSaleItems = async () => {
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
 * @param {number} shopId
 * @param {number} itemId
 */
export const getItemDetail = async (shopId: number, itemId: number) => {
  const itemDetail = await getSingleItem(shopId, itemId)
  return itemDetail
}
