import getAllItemIds from '../apis/getAllItemIds'
import { ISessions } from '../interfaces/allSessionsResponse'
import splitItemIdsToPaginations from './splitItemIdsToPaginations'

const parseSession = async (session: ISessions) => {
  const promotionId = session.promotionid
  const itemIds = await getAllItemIds(promotionId)
  const paginations = splitItemIdsToPaginations(itemIds)
  return paginations
}

export default parseSession
