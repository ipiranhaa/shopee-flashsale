import { IItems } from '@/interfaces/itemsResponse'

const filterItemsByCriteria = (items: IItems[]) => {
  // NOTE: Rating >= 4 and discount >= 10%
  return items.filter((item) => {
    const ratingStar = item.item_rating?.rating_star || 0
    return ratingStar >= 4 && item.raw_discount >= 10
  })
}

export default filterItemsByCriteria
