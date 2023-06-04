interface IAllItemIdsResponse {
  bff_meta?: null
  error: number
  error_msg?: null
  data: IData
}

interface IData {
  promotionid: number
  item_brief_list: IItemBriefList[]
  items: []
  selling_out_item_brief_list: []
  mega_sale_items: []
}

export interface IItemBriefList {
  catid: number
  cat_label: number
  is_soldout: boolean
  from?: null
  itemid: number
  recommendation_info?: null
  is_flex_boosting?: null
}

export default IAllItemIdsResponse
