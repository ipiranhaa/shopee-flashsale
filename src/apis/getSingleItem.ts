import { GET_GENERAL_DATA_URL } from '../config'
import type ISingleItemResponse from '../interfaces/singleItemResponse'
import client from '../services/client'

const getSingleItem = async (shopId: number, itemId: number) => {
  const { data } = await client.get<ISingleItemResponse>(GET_GENERAL_DATA_URL, {
    params: { shopid: shopId, itemid: itemId },
  })
  return data.data
}

export default getSingleItem
