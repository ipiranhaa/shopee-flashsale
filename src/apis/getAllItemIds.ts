import { GET_ALL_ITEM_IDS_URL } from '../config'
import type IAllItemIdsResponse from '../interfaces/allItemIdsResponse'
import client from '../services/client'

const getAllItemIds = async (promotionId: number) => {
  const { data } = await client.get<IAllItemIdsResponse>(GET_ALL_ITEM_IDS_URL, {
    params: { promotionid: promotionId, sort_soldout: true },
  })
  const itemBriefList = data.data.item_brief_list
  const itemIds: number[] = itemBriefList.map((x) => x.itemid)
  return itemIds
}

export default getAllItemIds
