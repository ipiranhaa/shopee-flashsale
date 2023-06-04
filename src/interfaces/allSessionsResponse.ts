interface IAllSessionsResponse {
  bff_meta?: null
  error: number
  error_msg?: null
  data: IData
}

export interface ISessions {
  banner: string
  banner_url: string
  carousel_banner: ICarouselBanner
  categories: ICategories[]
  description: string
  end_time: number
  is_ongoing: boolean
  name: string
  pc_banner: string
  promotionid: number
  start_time: number
  status: number
  with_mega_sale_session: boolean
  signature: string
}

interface IFlashBanner {
  banner: string
  banner_url: string
  pc_banner: string
  shopee_food_info?: null
}

interface ICarouselBanner {
  flash_banner: IFlashBanner[]
  mega_banner: []
  shopee_food_banner: []
}

interface ICategories {
  catid: number
  catname: string
  image: string
  cat_label: number
  recommendation_info?: null
}

interface IData {
  sessions: ISessions[]
  bs_info?: null
  current_session_end_time: number
  animation_msg: IAnimationMessage
}

interface IAnimationMessage {
  content?: null
  id?: null
}

export default IAllSessionsResponse
