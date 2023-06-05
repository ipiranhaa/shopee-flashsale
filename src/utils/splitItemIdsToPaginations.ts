import { PAGINATION_ITEM_AMOUNT } from '../config'

const splitItemIdsToPaginations = (allItemIds: number[]) => {
  const page = Math.ceil(allItemIds.length / PAGINATION_ITEM_AMOUNT)
  const itemIdsByPagination: number[][] = []
  for (let index = 0; index < page; index++) {
    const from = index * PAGINATION_ITEM_AMOUNT
    const to = Math.min((index + 1) * PAGINATION_ITEM_AMOUNT, allItemIds.length)
    const itemIds = allItemIds.slice(from, to)
    itemIdsByPagination.push(itemIds)
  }

  return itemIdsByPagination
}

export default splitItemIdsToPaginations
