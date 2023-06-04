import splitItemIdsToPaginations from './splitItemIdsToPaginations'
import getAllItemIds from '@/apis/getAllItemIds'
import { ISessions } from '@/interfaces/allSessionsResponse'

const parseSession = async (session: ISessions) => {
  const promotionId = session.promotionid
  const itemIds = await getAllItemIds(promotionId)
  const paginations = splitItemIdsToPaginations(itemIds)
  return paginations
}

export default parseSession
