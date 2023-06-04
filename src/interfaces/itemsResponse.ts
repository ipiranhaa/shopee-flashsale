interface IItemsResponse {
  bff_meta?: null
  error: number
  error_msg?: null
  data: IData
}

export interface IItems {
  itemid: number
  shopid: number
  modelids?: null
  promotionid: number
  brand_sale_brand_custom_logo: string
  image: string
  raw_discount: number
  price_before_discount: number
  flash_sale_type: number
  promo_overlay_image: string
  promo_images: string[]
  price: number
  start_time: number
  end_time: number
  discount: string
  flash_catid: number
  reference_item_id: string
  is_shop_official: boolean
  flash_sale_stock: number
  name: string
  item_type: number
  is_shop_preferred: boolean
  promo_name: string
  stock: number
  hidden_price_display?: null
  voucher: IVoucher
  cat_label: number
  extra_discount_info?: null
  reminder_count?: null
  is_mart: boolean
  cats: number[]
  is_shopee_food?: null
  shopee_food_log_id?: null
  shopee_food_trace?: null
  shopee_food_discount_id?: null
  item_rating: IItemRating | null
  shopee_food_discount_id_str?: null
}

interface IVoucher {
  min_spend: number
  discount_percentage: number
  coin_percentage?: null
  discount_value: number
  voucher_code: string
  reward_type: number
  promotionid: number
}

interface IItemRating {
  rating_star: number
  rating_counts: number[]
}

interface IData {
  items: IItems[]
}

export default IItemsResponse
