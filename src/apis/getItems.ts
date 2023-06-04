import { GET_ITEMS_URL } from '@/config'
import type IItemsResponse from '@/interfaces/itemsResponse'
import axios from 'axios'

const getItems = async (promotionId: number, itemIds: number[]) => {
  const payload = {
    categoryid: 0,
    limit: itemIds.length,
    itemids: itemIds,
    need_personalize: false,
    promotionid: promotionId,
    sort_soldout: true,
    with_dp_items: true,
  }
  const { data } = await axios.post<IItemsResponse>(GET_ITEMS_URL, payload)
  return data.data.items
}

export default getItems
