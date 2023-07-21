/* eslint-disable unicorn/prevent-abbreviations */
export interface ISingleItemByBrowserResponse {
  bff_meta?: null
  error?: null
  error_msg?: null
  data: IData
}

export interface IItemDetail {
  item_id: number
  shop_id: number
  item_status: string
  status: number
  item_type: number
  reference_item_id: string
  title: string
  image: string
  label_ids: number[]
  is_adult: boolean
  is_preview: boolean
  flag: number
  is_service_by_shopee: boolean
  condition: number
  cat_id: number
  has_low_fulfillment_rate: boolean
  is_live_streaming_price?: null
  currency: string
  brand?: null
  brand_id: number
  show_discount: number
  ctime: number
  item_rating: IItemRating
  cb_option: number
  has_model_with_available_shopee_stock: boolean
  shop_location: string
  attributes: IAttributes[]
  rich_text_description?: null
  invoice_option?: null
  is_category_failed?: null
  is_prescription_item: boolean
  preview_info?: null
  show_prescription_feed: boolean
  is_alcohol_product: boolean
  is_infant_milk_formula_product: boolean
  is_unavailable: boolean
  is_partial_fulfilled: boolean
  is_presale: boolean
  is_presale_deposit_item?: null
  is_presale_deposit_made?: null
  description: string
  categories: ICategories[]
  fe_categories: IFeCategories[]
  item_has_video: boolean
  presale_dday_start_time?: null
  models: IModels[]
  tier_variations: ITierVariations[]
  size_chart: string
  size_chart_info?: null
  welcome_package_type: number
  is_free_gift: boolean
  deep_discount?: null
  is_low_price_eligible: boolean
  bundle_deal_info?: null
  add_on_deal_info?: null
  shipping_icon_type: number
  badge_icon_type: number
  spl_info: ISplInfo
  estimated_days: number
  is_pre_order: boolean
  is_free_shipping: boolean
  overall_purchase_limit?: null
  min_purchase_limit: number
  is_hide_stock: boolean
  stock: number
  normal_stock: number
  current_promotion_reserved_stock: number
  can_use_wholesale: boolean
  wholesale_tier_list: []
  price: number
  raw_discount: number
  hidden_price_display?: null
  price_min: number
  price_max: number
  price_before_discount: number
  price_min_before_discount: number
  price_max_before_discount: number
  other_stock: number
  discount_stock: number
  current_promotion_has_reserve_stock: boolean
  complaint_policy?: null
  show_recycling_info: boolean
}

export interface IItemRating {
  rating_star: number
}

export interface IAttributes {
  name: string
  value: string
  id: number
  is_timestamp: boolean
  brand_option?: null
  val_id: number
  url?: null
}

export interface ICategories {
  catid: number
  display_name: string
  no_sub: boolean
  is_default_subcat: boolean
}

export interface IFeCategories {
  catid: number
  display_name: string
  no_sub: boolean
  is_default_subcat: boolean
}

export interface IModels {
  item_id: number
  status: number
  current_promotion_reserved_stock: number
  name: string
  promotion_id: number
  price: number
  price_stocks: IPriceStocks[]
  current_promotion_has_reserve_stock: boolean
  normal_stock: number
  extinfo: IExtinfo
  price_before_discount: number
  model_id: number
  stock: number
  has_gimmick_tag: boolean
  key_measurement?: null
  sold: number
}

export interface IPriceStocks {
  allocated_stock: number
  stock_breakdown_by_location: IStockBreakdownByLocation[]
  promotion_type: number
}

export interface IStockBreakdownByLocation {
  location_id: string
  available_stock: number
  fulfilment_type: number
  address_id: number
  allocated_stock?: null
}

export interface IExtinfo {
  tier_index: number[]
  is_pre_order: boolean
  estimated_days: number
}

export interface ITierVariations {
  name: string
  options: string[]
  images?: null
  properties?: null
  type: number
  summed_stocks?: null
}

export interface ISplInfo {
  installment_info?: null
  user_credit_info?: null
  channel_id?: null
  show_spl: boolean
  show_spl_lite: boolean
}

export interface IData {
  item: IItemDetail
  account: IAccount
  product_images: IProductImages
  product_price: IProductPrice
  flash_sale?: null
  flash_sale_preview?: null
  deep_discount?: null
  exclusive_price?: null
  exclusive_price_cta?: null
  product_meta: IProductMeta
  product_review: IProductReview
  promotion_info: IPromotionInfo
  age_gate: IAgeGate
  shipping_meta: IShippingMeta
  product_shipping: IProductShipping
  shop_vouchers: IShopVouchers[]
  free_return?: null
  coin_info: ICoinInfo
  product_attributes: IProductAttributes
  shop_detailed: IShopDetailed
}

export interface IAccount {
  user_id?: null
  is_new_user?: null
  default_address: IDefaultAddress
  adult_consent?: null
  birth_timestamp?: null
  portrait: string
  username: string
  status: number
}

export interface IDefaultAddress {
  state: string
  city: string
  district: string
  town: string
  zip_code: string
  address?: null
  region?: null
}

export interface IProductImages {
  video?: null
  images: string[]
  first_tier_variations: IFirstTierVariations[]
  sorted_variation_image_index_list: []
  overlay: IOverlay
  makeup_preview?: null
  abnormal_status: string
  promotion_images: []
  long_images?: null
  shopee_video_info_list: []
  shopee_video_rcmd_info?: null
  shopee_video_req_id?: null
  skincam?: null
}

export interface IFirstTierVariations {
  name: string
  image: string
  summed_stock: number
}

export interface IOverlay {
  type: number
  image: string
  preview_end_time?: null
  is_pre_order?: null
}

export interface IProductPrice {
  discount: number
  spl_installment_info?: null
  pack_size: string
  hide_price: boolean
  price: IPrice
  price_before_discount: IPriceBeforeDiscount
  presale_price?: null
  lowest_past_price?: null
  labels?: null
}

export interface IPrice {
  single_value: number
  range_min: number
  range_max: number
  price_mask?: null
}

export interface IPriceBeforeDiscount {
  single_value: number
  range_min: number
  range_max: number
  price_mask?: null
}

export interface IProductMeta {
  show_lowest_price_guarantee: boolean
  show_original_guarantee: boolean
  show_best_price_guarantee: boolean
  show_official_shop_label_in_title: boolean
  show_shopee_verified_label: boolean
}

export interface IProductReview {
  rating_star: number
  rating_count: number[]
  total_rating_count: number
  historical_sold: number
  global_sold: number
  liked: boolean
  liked_count: number
  cmt_count: number
  should_move_ratings_above?: null
  review_rcmd_exp_group?: null
}

export interface IPromotionInfo {
  spl?: null
  spl_lite?: null
  installment?: null
  wholesale?: null
  insurance?: null
  item_installment_eligibility?: null
}

export interface IAgeGate {
  kyc?: null
}

export interface IShippingMeta {
  show_fufilled_by_shopee: boolean
  show_cod: boolean
  show_mart: boolean
  show_next_day_delivery: boolean
}

export interface IProductShipping {
  free_shipping?: null
  shipping_fee_info: IShippingFeeInfo
  show_shipping_to: boolean
  ungrouped_channel_infos: IUngroupedChannelInfos[]
  grouped_channel_infos_by_service_type: []
  also_available_channel_name?: null
  pre_selected_shipping_channel?: null
  show_grouped_channel_first?: null
}

export interface IShippingFeeInfo {
  ship_from_location: string
  price: IPrice
  shipping_icon_type: number
  warning?: null
}

export interface IUngroupedChannelInfos {
  channel_id: number
  name: string
  price: IPrice
  price_before_discount?: null
  channel_delivery_info: IChannelDeliveryInfo
  channel_promotion_infos?: null
  warning?: null
}

export interface IChannelDeliveryInfo {
  has_edt: boolean
  display_mode: string
  estimated_delivery_date_from: number
  estimated_delivery_date_to: number
  estimated_delivery_time_min: number
  estimated_delivery_time_max: number
  delay_message?: null
}

export interface IShopVouchers {
  promotionid: number
  voucher_code: string
  signature: string
  use_type?: null
  platform_type?: null
  voucher_market_type?: null
  min_spend: number
  used_price?: null
  current_spend?: null
  product_limit: boolean
  quota_type: number
  percentage_claimed: number
  percentage_used: number
  start_time: number
  end_time: number
  collect_time?: null
  claim_start_time?: null
  valid_days?: null
  reward_type: number
  reward_percentage?: null
  reward_value?: null
  reward_cap?: null
  coin_earned?: null
  title?: null
  use_link?: null
  icon_hash: string
  icon_text: string
  icon_url?: null
  customised_labels: []
  customised_product_scope_tags?: null
  shop_id: number
  shop_name?: null
  is_shop_preferred: boolean
  is_shop_official: boolean
  shop_count?: null
  ui_display_type?: null
  customised_mall_name?: null
  small_icon_list?: null
  dp_category_name?: null
  invalid_message_code?: null
  invalid_message?: null
  display_labels?: null
  wallet_redeemable?: null
  customer_reference_id?: null
  fully_redeemed?: null
  has_expired?: null
  disabled?: null
  voucher_external_market_type?: null
  now_food_extra_info?: null
  airpay_opv_extra_info?: null
  partner_extra_info?: null
  discount_value: number
  discount_percentage: number
  discount_cap: number
  coin_percentage?: null
  coin_cap?: null
  usage_limit?: null
  used_count?: null
  left_count?: null
  shopee_wallet_only?: null
  new_user_only?: null
  description?: null
  shop_logo?: null
  error_code: number
  is_claimed_before: boolean
  customised_product_scope_tag_image_hash?: null
  usage_limit_per_user: number
  remaining_usage_limit: number
  action?: null
  sub_icon_text?: null
  is_customised_icon?: null
  fixed_flag?: null
  customised_flag?: null
  fsv_voucher_card_ui_info?: null
}

export interface ICoinInfo {
  spend_cash_unit: number
  coin_earn_items: []
  coin_earn_label?: null
}

export interface IAttrs {
  name: string
  value: string
  id?: null
  is_timestamp?: null
  brand_option?: null
  val_id?: null
  url?: null
}

export interface IProductAttributes {
  attrs: IAttrs[]
  categories: ICategories[]
}

export interface IShopDetailed {
  shopid: number
  userid: number
  last_active_time: number
  vacation: boolean
  place: string
  account: IAccount
  is_shopee_verified: boolean
  is_preferred_plus_seller: boolean
  is_official_shop: boolean
  shop_location: string
  item_count: number
  rating_star: number
  response_rate: number
  session_info?: null
  name: string
  ctime: number
  response_time: number
  follower_count: number
  show_official_shop_label: boolean
  rating_bad: number
  rating_good: number
  rating_normal: number
  session_infos?: null
  status: number
  is_individual_seller?: null
  is_mart: boolean
  favorite_shop_info?: null
  is_3pf: boolean
}
