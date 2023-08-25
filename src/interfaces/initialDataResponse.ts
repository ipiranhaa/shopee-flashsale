interface IDict {}

export interface IData {
  shopId: number
  itemId: number
  OTHER_QUANTITIES_ITEMS: []
  PDP_BFF_DATA: IPDPBFFDATA
  shouldShowDownloadAppBanner: boolean
  isWelcomeDownloadActive: boolean
  isShowFlashSaleEndedPopup: boolean
  showDownloadPopup: boolean
  showAddressPicker: boolean
  showShippingOptionPanel: boolean
  adsTrackingData?: null
  toastMessage?: null
  viewingFirstVariationImage?: null
  isFetchCompleted: boolean
  unblockForAdult: boolean
  maskAge: number
  queue: []
  dict: IDict
}

export interface IDOMAINCONTEXT {
  data: IData
  status: IStatus
}

interface IItemCardManifest {
  [key: string]: {
    imageFlag: IImageFlag[]
    iconInPrice: []
    overlayImage: IOverlayImage[]
    promotionLabel: []
    bottomRight: IBottomRight[]
    topRight: ITopRight[]
    featureElement: []
    maxBadges: IMaxBadges
    status: string
  }
}

interface IProductShop {}

interface IHotSales {}

export interface IInitialState {
  DOMAIN_CONTEXT: IDOMAINCONTEXT
  DOMAIN_PDP: IDOMAINPDP
  item: IItem
  featureToggles: IFeatureToggles
  router: IRouter
  itemCardManifest: IItemCardManifest
  itemClient: IItemClient
  theme: string
  accountV2: IAccountV2
  adult: IAdult
  seo: ISeo
  UISwitchesSlice: IUISwitchesSlice
  trackingDataSlice: ITrackingDataSlice
  toastSlice: IToastSlice
  carouselImagesSlice: ICarouselImagesSlice
  pageContextSlice: IPageContextSlice
  pdpKsp: IPdpKsp
  voucher: IVoucher
  productShop: IProductShop
  hotSales: IHotSales
  popupManager: IPopupManager
}

interface ICreditInsuranceData {}

export interface IItemRating {
  rating_star: number
  rating_count: number[]
  total_rating_count: number
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
  itemid: number
  modelid: number
  promotionid: number
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

export interface IPrice {
  single_value: number
  range_min: number
  range_max: number
  price_mask?: null
}

export interface IDeepDiscount {
  price: IPrice
  price_before_discount: IPriceBeforeDiscount
  lowest_past_price?: null
  skin: ISkin
  is_dday: boolean
  sold_count?: null
  reminder_event: IReminderEvent
  promotion_id: number
  model_id: number
  is_lpp: boolean
}

export interface IPriceBeforeDiscount {
  single_value: number
  range_min: number
  range_max: number
  price_mask?: null
}

export interface ISkin {
  font_color: string
  background_image: string
  pre_hype_text: string
  text_left_offset: number
  pre_hype_text_upper: string
  pre_hype_text_font_size_upper: number
  pre_hype_text_lower: string
  pre_hype_text_font_size_lower: number
}

export interface IReminderEvent {
  item_id: number
  shop_id: number
  item_name: string
  start_time: number
  end_time: number
}

export interface ISplInfo {
  installment_info?: null
  user_credit_info?: null
  channel_id?: null
  show_spl: boolean
  show_spl_lite?: null
}

export interface ICoinInfo {
  spend_cash_unit: number
  coin_earn_items: []
  coin_earn_label?: null
}

export interface IAgeGate {
  kyc?: null
}

export interface IItems {
  [key: string]: IItem
}

interface IPartial {}
interface IItemError {}
interface IShippingFee {}
interface IItemsApiProgress {}

export interface IItem {
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
  deep_discount: IDeepDiscount
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
  should_show_amp_tag: boolean
  name: string
  itemid: number
  shopid: number
  is_mart: boolean
  is_official_shop: boolean
  is_preferred_plus_seller: boolean
  show_shopee_verified_label: boolean
  show_official_shop_label_in_title: boolean
  has_lowest_price_guarantee: boolean
  show_original_guarantee: boolean
  should_move_ratings_above: boolean
  global_sold: number
  historical_sold: number
  cmt_count: number
  liked: boolean
  liked_count: number
  images: string[]
  long_images?: null
  video_info_list: []
  pack_size: string
  shop_vouchers: []
  cod_flag: boolean
  credit_insurance_data: ICreditInsuranceData
  coin_info: ICoinInfo
  coin_earn_label?: null
  age_gate: IAgeGate
  items: IItems
  partial: IPartial
  itemError: IItemError
  shipping_fee: IShippingFee
  itemsApiProgress: IItemsApiProgress
  shipping_info: IShippingInfo
  itemCensorIndex: IItemCensorIndex
}

interface IShippingInfo {}

interface IItemCensorIndex {}

export interface IItemRating {
  rating_star: number
  rating_count: number[]
  total_rating_count: number
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
  itemid: number
  modelid: number
  promotionid: number
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

export interface IPrice {
  single_value: number
  range_min: number
  range_max: number
  price_mask?: null
}

export interface IDeepDiscount {
  price: IPrice
  price_before_discount: IPriceBeforeDiscount
  lowest_past_price?: null
  skin: ISkin
  is_dday: boolean
  sold_count?: null
  reminder_event: IReminderEvent
  promotion_id: number
  model_id: number
  is_lpp: boolean
}

export interface IPriceBeforeDiscount {
  single_value: number
  range_min: number
  range_max: number
  price_mask?: null
}

export interface ISkin {
  font_color: string
  background_image: string
  pre_hype_text: string
  text_left_offset: number
  pre_hype_text_upper: string
  pre_hype_text_font_size_upper: number
  pre_hype_text_lower: string
  pre_hype_text_font_size_lower: number
}

export interface IReminderEvent {
  item_id: number
  shop_id: number
  item_name: string
  start_time: number
  end_time: number
}

export interface ISplInfo {
  installment_info?: null
  user_credit_info?: null
  channel_id?: null
  show_spl: boolean
  show_spl_lite?: null
}

export interface ICoinInfo {
  spend_cash_unit: number
  coin_earn_items: []
  coin_earn_label?: null
}

export interface IAgeGate {
  kyc?: null
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
  pdp_top_info_list?: null
  has_long_image?: null
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
  should_move_ratings_above: boolean
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
  is_item_with_price_range: boolean
}

export interface IShippingFeeInfo {
  ship_from_location: string
  price: IPrice
  shipping_icon_type: number
  warning?: null
  min_price: number
  max_price: number
}

export interface IUngroupedChannelInfos {
  channel_id: number
  name: string
  price: IPrice
  price_before_discount?: null
  channel_delivery_info: IChannelDeliveryInfo
  channel_promotion_infos?: null
  warning?: null
  shipping_icon_type?: null
  lowest_bpsf_promotion_rule?: null
  min_price: number
  max_price: number
  is_mask_channel: boolean
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

export interface IAttributes_ {
  name: string
  value: string
  id?: null
  is_timestamp?: null
  brand_option?: null
  val_id?: null
  url?: null
}

export interface IProductAttributes {
  attrs: IAttributes_[]
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
  session_info: ISessionInfo
  name: string
  ctime: number
  response_time: number
  follower_count: number
  show_official_shop_label: boolean
  rating_bad: number
  rating_good: number
  rating_normal: number
  session_infos: ISessionInfos[]
  status: number
  is_individual_seller?: null
  is_mart: boolean
  favorite_shop_info?: null
  is_3pf: boolean
  sold_total: number
}

export interface ISessionInfo {
  is_show: boolean
  session_id: number
  view_count: number
  session_url: string
  preview_image: string
}

export interface ISessionInfos {
  is_show: boolean
  session_id: number
  view_count: number
  session_url: string
  preview_image: string
}

interface ICachedMap {}

export interface IPDPBFFDATA {
  cachedMap: ICachedMap
  cachedKeys: string[]
  currentKey: string
  currentShopIdItemId: ICurrentShopIdItemId
}

export interface ICurrentShopIdItemId {
  shopId: number
  itemId: number
}

export interface IDOMAINPDP {
  data: IData
  status: IStatus
}

export interface ISetPdpBffData {
  isFetching: boolean
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  isLoaded: boolean
  deps: number | string[]
}

export interface IStatus {
  setPdpBffData: ISetPdpBffData
}

export interface IAPISTATUS {
  status: string
  error?: null
}

export interface IProductInfo {
  free_shipping?: null
  shipping_fee_info: IShippingFeeInfo
  show_shipping_to: boolean
}

export interface IToggles {
  [key: string]: boolean
}

export interface IFeatureToggles {
  toggles: IToggles
  fetchStatus: number
  updateTime: number
  userid?: null
}

interface IQuery {}

export interface ILocation {
  pathname: string
  search: string
  hash: string
  key: string
  query: IQuery
}

export interface IRouter {
  location: ILocation
  action: string
}

export interface IImageFlag {
  id: number
  is_predefined: boolean
  name: string
  product_label_ids?: null
  displayed_image: string
  displayed_image_width: number
  displayed_image_height: number
  trackName: string
}

export interface IOverlayImage {
  id: number
  is_predefined: boolean
  name: string
  product_label_ids: number[]
  displayed_image: string
  displayed_image_width: number
  displayed_image_height: number
  campaign_image: string
  campaign_image_width: number
  campaign_image_height: number
  description: string
  trackName: string
}

export interface IBottomRight {
  is_predefined: boolean
  name: string
  trackName: string
  id: number
  product_label_ids?: null
}

export interface ITopRight {
  is_predefined: boolean
  name: string
  trackName: string
  id: number
  product_label_ids?: null
}

export interface IMaxBadges {
  imageFlag: number
  overlayImage: number
  iconInPrice: number
  promotionLabel: number
  topRight: number
  bottomRight: number
}

interface ILikedInfo {}

export interface IItemClient {
  likedInfo: ILikedInfo
}

interface IAccess {}

export interface IInfo {
  username: string
  holiday_mode_on: boolean
  holiday_mode_mtime?: null
  userid: number
  shopid: number
  access: IAccess
  phone: string
  has_password: boolean
  phone_verified: boolean
  portrait: string
  is_seller: boolean
  is_mall_seller: boolean
  email: string
  email_verified: boolean
  not_new_user: boolean
  ctime: number
  cb_option: number
  cover: string
  cookies_accepted_time: number
  disallow_data_processing?: null
  tax_id: string
}

export interface IAccountV2 {
  info: IInfo
  progress: number
  error?: null
  isClient: boolean
}

export interface IAdult {
  isAdult: boolean
  highestAgeConsent: number
}

interface IMartCategory {}

interface IShopSharing {}

interface IItemSharing {}

interface IFooter {}

export interface ISeo {
  category: ICategory
  martCategory: IMartCategory
  shopSharing: IShopSharing
  itemSharing: IItemSharing
  sharingV3Data: ISharingV3Data
  footer: IFooter
}

export interface ISharingV3Data {
  progress: number
  th: ITh[]
}

export interface IAffiliates {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface ITh {
  affiliates: IAffiliates
  catalogue: ICatalogue
  catalogue_product: ICatalogueProduct
  category: ICategory
  feed: IFeed
  feed_story: IFeedStory
  free_money: IFreeMoney
  group_buy: IGroupBuy
  homepage: IHomepage
  id: string
  microsite: IMicrosite
  product: IProduct
  product_discount: IProductDiscount
  product_discount_other: IProductDiscountOther
  product_other: IProductOther
  referral: IReferral
  shop: IShop
  shop_other: IShopOther
  shopee_buddy: IShopeeBuddy
  slash_price: ISlashPrice
  video: IVideo
}

export interface ICatalogue {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface ICatalogueProduct {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface ICategory {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IFeed {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IFeedStory {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IFreeMoney {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IGroupBuy {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IHomepage {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IMicrosite {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IProduct {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IProductDiscount {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IProductDiscountOther {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IProductOther {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IReferral {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IShop {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IShopOther {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IShopeeBuddy {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface ISlashPrice {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IVideo {
  description: string
  hashtag: string
  quote: string
  share_text: string
  share_title: string
  rectangle_image: string
  square_image: string
  share_url: string
}

export interface IUISwitchesSlice {
  data: IData
  status: IStatus
}

export interface ITrackingDataSlice {
  data: IData
  status: IStatus
}

export interface IToastSlice {
  data: IData
  status: IStatus
}

export interface ICarouselImagesSlice {
  data: IData
  status: IStatus
}

export interface IPageContextSlice {
  data: IData
  status: IStatus
}

export interface IPdpKsp {
  progress: number
  updateTime: number
  keySellingPoints: []
}

interface IClaimProgress {}
interface IVoucherDetail {}
interface IRecommendedShopVouchers {}

export interface IVoucher {
  shop: IShop
  claimProgress: IClaimProgress
  voucherDetail: IVoucherDetail
  recommendedShopVouchers: IRecommendedShopVouchers
}

export interface IPopupManager {
  data: IData
  status: IStatus
}

export interface IInitalDataResponse {
  initialState: IInitialState
  initialCollections: number[]
  initialTranslations: IInitialTranslations
}

export interface IInitialTranslations {
  bpg_ribbon_subtitle: string
  bpg_ribbon_title: string
  deep_discount_end_message: string
  description_product_page_new: string
  description_product_page_new__IN: string
  description_product_page_new__MY: string
  description_product_page_new__PH: string
  description_product_page_new__SG: string
  flash_deal_starts_label: string
  free_shipping_info_message: string
  free_shipping_info_message__MX: string
  group_buy: string
  include_all_taxes: string
  join_pdp: string
  label_acknowledge: string
  label_active_date_ago_pdp: string
  label_add_to_cart_pdp: string
  label_age_control_msgs_customize: string
  label_age_control_no_customize: string
  label_age_control_ok_customize: string
  label_alcohol_product_popup_no: string
  label_alcohol_product_popup_yes: string
  label_back_to_homepage_pdp: string
  label_back_to_previous: string
  label_buy_pdp: string
  label_cancel_pdp: string
  label_cart_panel_fully_fulfill_by_another_warehouse: string
  label_cart_panel_fully_fulfill_by_multi_warehouse: string
  label_cb_shipping_from: string
  label_cc_installment_plan: string
  label_cc_installment_plan_zero_rate: string
  label_change_of_mind_accepted: string
  label_change_of_mind_accepted__PH: string
  label_chat_response: string
  label_chat_to_offer: string
  label_cod_filter_pdp: string
  label_comments: string
  label_condition_pdp: string
  label_condition_used: string
  label_confirm_age: string
  label_confirm_age_religion: string
  label_cost: string
  label_flash_sale_booked_pdp: string
  label_free_shipping_cap_pdp: string
  label_fully_fulfill_by_seller: string
  label_fully_fulfill_by_seller_shopee24: string
  label_get_welcome_pkg: string
  label_global_sold_count_drawer_content: string
  label_global_sold_count_drawer_title: string
  label_go_back_pdp: string
  label_installment_overview_text: string
  label_installment_overview_text_without_interest: string
  label_item_all_model_unavailable: string
  label_item_applicable_for_voucher_cashback: string
  label_item_applicable_for_voucher_discount: string
  label_item_applicable_for_voucher_discount_percentage: string
  label_item_applicable_for_voucher_free_shipping: string
  label_item_not_individual_sale: string
  label_item_status_sold_out_pdp: string
  label_kredivo_installment_plan_amount: string
  label_kredivo_installment_plan_amount_per_month: string
  label_learn_more_pdp: string
  label_live_streaming_stock_rw: string
  label_location_BR: string
  label_location_CL: string
  label_location_CO: string
  label_location_ID: string
  label_location_MX: string
  label_location_MY: string
  label_location_PH: string
  label_location_SG: string
  label_location_TH: string
  label_location_TW: string
  label_location_VN: string
  label_location_brazil: string
  label_location_chile: string
  label_location_colombia: string
  label_location_indonesia: string
  label_location_malaysia: string
  label_location_mexico: string
  label_location_philippine: string
  label_location_singapore: string
  label_location_taiwan: string
  label_location_thailand: string
  label_location_vietnam: string
  label_lowest_price_guaranteed__VN: string
  label_lowest_price_text: string
  'label_lowest_price_text--BR': string
  'label_lowest_price_text--ID': string
  'label_lowest_price_text--MY': string
  'label_lowest_price_text--PH': string
  'label_lowest_price_text--SG': string
  'label_lowest_price_text--TH': string
  'label_lowest_price_text--TW': string
  'label_lowest_price_text--VN': string
  label_lowest_price_text__ID: string
  label_lowest_price_text__MY: string
  label_lowest_price_text__PH: string
  label_lowest_price_text__PL: string
  label_lowest_price_text__SG: string
  label_lowest_price_text__TH: string
  label_lowest_price_text__TW: string
  label_lowest_price_text__VN: string
  label_lowest_price_title: string
  label_lowest_price_title__ID: string
  label_lowest_price_title__VN: string
  label_milk_acknowledgment_content: string
  label_milk_acknowledgment_title: string
  label_million_dollar_discount: string
  label_million_dollar_discount_btn_text: string
  label_million_dollar_discount_title: string
  label_million_dollar_discount_tnc: string
  label_min_purchase_limit: string
  label_my_orders_pdp: string
  label_n_a: string
  label_need_help_pdp: string
  label_ok_pdp: string
  label_online_pdp: string
  label_opc_cc_installment_plan_amount_pdp: string
  label_opc_cc_installment_plan_name_pdp: string
  label_opc_installment_plan_pdp: string
  label_original_guarantee: string
  label_original_guarantee__ID: string
  label_original_guarantee__MY: string
  label_original_guarantee_subtext: string
  label_original_guarantee_subtext__ID: string
  label_original_guarantee_subtext__MY: string
  label_original_guarantee_subtext_mall__MY: string
  label_other_stock: string
  label_overseas: string
  label_pack_size: string
  label_partial_pre_order_ships_in_n_days: string
  label_partial_pre_order_ships_in_n_days__plural: string
  label_partially_fulfill_by_seller: string
  label_partially_fulfill_by_seller_shopee24: string
  label_pdp_shipping_fee_no_shipping_channel_available: string
  label_pdp_voucher_see_more_pdp: string
  label_pre_order_ships_in_n_days: string
  label_pre_order_ships_in_n_days__few: string
  label_pre_order_ships_in_n_days__many: string
  label_pre_order_ships_in_n_days__other: string
  label_pre_order_ships_in_n_days__plural: string
  label_preferred__ES: string
  label_preferred__PL: string
  label_product_available_on: string
  label_product_coming_soon_pdp: string
  label_product_fbs_popup_desc: string
  label_product_fbs_popup_desc__ID: string
  label_product_fbs_popup_desc__MY: string
  label_product_fbs_popup_desc__PH: string
  label_product_fbs_popup_desc__SG: string
  label_product_fbs_popup_desc__TH: string
  label_product_fbs_popup_desc__TW: string
  label_product_fbs_popup_desc__VN: string
  label_product_fbs_section: string
  label_product_fbs_section__MY: string
  label_product_fbs_section__PH: string
  label_product_fbs_section__SG: string
  label_product_fbs_section__TH: string
  label_product_fbs_section__TW: string
  label_product_fbs_section__VN: string
  label_product_flash_sale_extra_discount_limit_stock: string
  label_product_flash_sale_extra_discount_limit_stock_limit_time: string
  label_product_info: string
  label_product_installment_credit_card: string
  label_product_installment_non_credit_card: string
  label_product_pre_order_on: string
  label_product_preview_sale_starting_soon: string
  label_product_ratings: string
  label_product_recycling_info_content: string
  label_product_recycling_info_header: string
  label_product_s_mart_popup_desc: string
  label_product_s_mart_popup_desc__MY: string
  label_product_s_mart_popup_desc__SG: string
  label_product_s_mart_popup_understand_button: string
  label_product_s_mart_section: string
  label_product_s_mart_section__MY: string
  'label_product_sbs_popup_desc--ID': string
  label_product_sbs_popup_desc_id_shopee_24: string
  label_product_sbs_popup_desc_ph_shopee_24: string
  label_product_sbs_popup_desc_shopee_managed__ID: string
  label_product_sbs_popup_desc_th_shopee_24: string
  label_product_sbs_popup_desc_vn_ghtk_24: string
  label_product_sbs_section: string
  label_product_sbs_section_24h: string
  label_product_sbs_section_48h: string
  label_product_sbs_section_8h: string
  label_product_sbs_section_id_shopee_24: string
  label_product_sbs_section_ph_shopee_24: string
  label_product_sbs_section_shopee_managed__ID: string
  label_product_sbs_section_th_shopee_24: string
  label_product_sbs_section_vn_ghtk_24: string
  label_product_sbs_section_vn_rapidsla_4: string
  label_products_pdp: string
  label_promotion_stock: string
  label_quantity_pdp: string
  label_rating_pdp: string
  label_review: string
  label_reviews: string
  label_s_mart_popup_understand_button: string
  label_same_day_delivery: string
  label_same_day_delivery_popup_desc: string
  label_same_day_delivery_popup_understand_button: string
  label_sbs_popup_understand_button: string
  label_see_all_pdp: string
  label_see_all_reviews: string
  label_see_less_pdp: string
  label_see_more_pdp: string
  label_select_variation_pdp: string
  label_selected_pdp: string
  label_share: string
  label_ship_from: string
  label_shipping_fee: string
  label_shipping_to: string
  label_shop_hot_sales: string
  label_shopee_guarantee_lower_case: string
  label_shopee_guarantee_text: string
  label_shopee_pdp: string
  label_similar_products_pdp: string
  label_size_chart_capital: string
  label_size_chart_desc: string
  label_size_chart_header: string
  label_sold: string
  label_sold_location: string
  label_sold_location__BR: string
  label_sold_location__CL: string
  label_sold_location__CO: string
  label_sold_location__ES: string
  label_sold_location__ID: string
  label_sold_location__MX: string
  label_sold_location__MY: string
  label_sold_location__PH: string
  label_sold_location__PL: string
  label_sold_location__SG: string
  label_sold_location__TH: string
  label_sold_location__TW: string
  label_sold_location__VN: string
  label_sold_n_pdp: string
  label_this_product_delete: string
  label_tweet: string
  label_unexpected_error: string
  label_unit_price: string
  label_unlisted: string
  label_user_on_vacation: string
  label_view_all: string
  label_view_shop: string
  label_whole_sale_price_pdp: string
  label_wholesale_stock: string
  label_wholesale_summary: string
  label_you_may_also_like_pdp: string
  maximum_retail_price: string
  maximum_retail_price_header: string
  msg_added_to_your_favorite: string
  msg_deleted_from_your_favorite: string
  msg_flash_deal_has_ended_pdp: string
  msg_flash_sale_has_ended_pdp: string
  msg_inactive_sellers_popup: string
  msg_inactive_sellers_popup_buy_anyway: string
  msg_item_booked_for_flash_sale: string
  msg_item_currently_delisted: string
  msg_multi_variation_example: string
  msg_must_be_adult_to_view_content: string
  msg_no_ratings_yet_pdp: string
  msg_product_sbs_24h_my_description: string
  msg_product_sbs_24h_my_title: string
  msg_product_sbs_24h_sg_description: string
  msg_product_sbs_24h_sg_title: string
  msg_real_inactive_sellers_popup: string
  msg_response_rate_explaination: string
  msg_shipping_fee_information: string
  msg_shop_hot_sales_hint_pdp: string
  msg_shopee_preferred_plus_txt: string
  msg_shopee_verified_txt: string
  msg_the_product_you_are_looking_for_does_not_exist: string
  msg_video_not_supported: string
  pdp_click_for_more: string
  pdp_free_returns_title__PH: string
  pdp_free_shipping_terms_condition__TH: string
  pdp_individual_declaration: string
  pdp_individual_seller_details: string
  pdp_label_alcohol_product_popup_go_back: string
  pdp_label_cod_popup_desc: string
  pdp_label_cod_popup_desc__ID: string
  pdp_label_cod_popup_desc__MY: string
  pdp_label_cod_popup_desc__TH: string
  pdp_label_ends_in: string
  pdp_label_live_streaming_price_psp_rw: string
  pdp_label_live_streaming_price_ssp_rw: string
  pdp_label_n_day: string
  pdp_label_n_day__other: string
  pdp_label_new: string
  pdp_label_starts_in: string
  pdp_lpg30_for_all_models_in_the_last_30_days: string
  pdp_lpg30_in_the_last_30_days: string
  pdp_lpg30_lowest_price: string
  pdp_lpg30_lowest_price_range: string
  pdp_lpg30_price_details: string
  pdp_lpg30_price_details_content: string
  pdp_msg_must_be_alcohol_adult_to_view_content: string
  pdp_n_variations_available: string
  pdp_n_variations_available__other: string
  pdp_prescription_content: string
  pdp_prescription_title: string
  pdp_product_free_shipping_description: string
  pdp_product_free_shipping_description__BR: string
  pdp_product_free_shipping_description__PH: string
  pdp_product_free_shipping_title: string
  pdp_product_free_shipping_title__BR: string
  pdp_product_free_shipping_title__CO: string
  pdp_product_free_shipping_title__PH: string
  pdp_product_measurements: string
  pdp_seller_company: string
  pdp_seller_individual: string
  pdp_shopee_guarantee: string
  pdp_star_reviews_drawer_content: string
  pdp_text_product_attributes_drawer_title: string
  pdp_text_product_description_title: string
  pdp_text_product_specification_title: string
  'product-exclusive-price-sign-up-label': string
  product_page_exclude_warranty_complaint_for_entrrepreneurs: string
  product_page_installment_legal_regulation: string
  product_page_label_brand: string
  product_page_label_complaint_additional_info: string
  product_page_label_complaint_address: string
  product_page_label_complaint_title: string
  product_page_label_free_returns: string
  product_page_label_free_returns__PH: string
  product_page_label_installment_plan_title: string
  product_page_label_invoice: string
  product_page_label_invoice_option: string
  product_page_label_learn_more: string
  product_page_label_low_fulfillment_buy_anyway: string
  product_page_label_low_fulfillment_chat_to_offer: string
  product_page_label_margin_scheme_invoice: string
  product_page_label_no_invoice: string
  product_page_label_non_invoice: string
  product_page_label_non_vat_invoice: string
  product_page_label_stock: string
  product_page_label_time_for_warranty: string
  product_page_label_vat_inclusive: string
  product_page_label_warranty_one_year: string
  product_page_label_warranty_over_two_years: string
  product_page_label_warranty_two_years: string
  product_page_msg_low_fulfillment_rate_popup: string
  product_page_prescription_feed_popup_btn: string
  product_page_prescription_feed_popup_msg: string
  seo_desc_product_page_group_buy: string
  seo_desc_product_page_group_buy__MY: string
  seo_desc_product_page_group_buy__PH: string
  seo_desc_product_page_group_buy__SG: string
  seo_title_product_page_group_buy: string
  seo_title_product_page_group_buy__MX: string
  seo_title_product_page_group_buy__MY: string
  seo_title_product_page_group_buy__PH: string
  seo_title_product_page_group_buy__SG: string
  shipping_promotion_message_fixed: string
  shipping_promotion_message_fixed__MX: string
  shipping_promotion_message_flat: string
  shipping_promotion_message_percentage: string
  shipping_promotion_message_percentage_with_cap: string
  special_price: string
  text_adult_alcohol_confirm_msg: string
  text_seller_on_vacation: string
  title_product_page_new: string
  title_product_page_new__MY: string
  title_product_page_new__PH: string
  title_product_page_new__SG: string
  toast_minimum_purchase_quantity: string
  toast_pdp_shipping_fee_no_shipping_channel_available: string
  warning_minimum_purchase_quantity: string
  warning_overall_purchase_limit_case_1: string
  warning_overall_purchase_limit_case_2: string
  warning_purchase_limit_exceeded: string
  warning_purchase_limit_hit: string
  warning_purchase_limit_max_qty: string
  your_friend_group: string
  dl_sf_msg_promotion__delta__capped__up_to: string
  dl_sf_msg_promotion__delta__capped__up_to__BR: string
  dl_sf_msg_promotion__delta__discounted_amount: string
  dl_sf_msg_promotion__delta__flat_rate: string
  dl_sf_msg_promotion__delta__flat_rate_off: string
  dl_sf_msg_promotion__delta__free_shipping: string
  dl_sf_msg_promotion__delta__off: string
  dl_sf_msg_promotion__delta__percentage: string
  dl_sf_msg_promotion__delta__percentage_off: string
  dl_sf_msg_promotion__delta__percentage_with_cap: string
  dl_sf_msg_promotion__delta__qualified_for_shipping_subsidy: string
  dl_sf_msg_promotion__rule__from_min_order_total__simple: string
  dl_sf_msg_promotion__rule__from_min_order_total__simple_id: string
  dl_sf_msg_promotion__rule__from_min_order_total__simple_my: string
  dl_sf_msg_promotion__rule__from_min_order_total__simple_ph: string
  dl_sf_msg_promotion__rule__from_min_order_total__simple_th: string
  dl_sf_msg_promotion__rule__from_min_order_total__simple_tw: string
  dl_sf_msg_promotion__rule__order_total__simple: string
  dl_sf_msg_promotion__rule__order_total__simple__VN: string
  dl_sf_msg_promotion__rule__simple: string
  dl_sf_msg_promotion__ruleset__capped__simple: string
  dl_sf_msg_promotion__ruleset__min_order_lowest_mbs: string
  dl_sf_msg_promotion__ruleset__min_order_lowest_mbs_id: string
  dl_sf_msg_promotion__ruleset__min_order_lowest_mbs_my: string
  dl_sf_msg_promotion__ruleset__min_order_lowest_mbs_ph: string
  dl_sf_msg_promotion__ruleset__min_order_lowest_mbs_th: string
  dl_sf_msg_promotion__ruleset__min_order_lowest_mbs_tw: string
  dl_sf_msg_promotion__ruleset__min_order_lowest_mbs_vn: string
  dl_sf_msg_promotion__ruleset__simple: string
  dl_sf_msg_promotion__ruleset__simple__VN: string
  dl_sf_msg_promotion__ruleset__up_to__simple: string
  label_shipping_option_unsupported: string
  label_size_limit_exceeded: string
  label_unsupported_address: string
  label_official_shop_selling_points: string
  'label_official_shop_selling_points--BR': string
  'label_official_shop_selling_points--ID': string
  'label_official_shop_selling_points--MY': string
  'label_official_shop_selling_points--PH': string
  'label_official_shop_selling_points--SG': string
  'label_official_shop_selling_points--TW': string
  'label_official_shop_selling_points--VN': string
  ' label_official_shop_selling_points_1--BR': string
  ' label_official_shop_selling_points_1--ID': string
  ' label_official_shop_selling_points_1--MY': string
  ' label_official_shop_selling_points_1--PH': string
  ' label_official_shop_selling_points_1--PL': string
  ' label_official_shop_selling_points_1--SG': string
  ' label_official_shop_selling_points_1--TH': string
  ' label_official_shop_selling_points_1--TW': string
  ' label_official_shop_selling_points_1--VN': string
  'label_official_shop_selling_points_1_detail--BR': string
  'label_official_shop_selling_points_1_detail--ID': string
  'label_official_shop_selling_points_1_detail--MY': string
  'label_official_shop_selling_points_1_detail--PH': string
  'label_official_shop_selling_points_1_detail--PL': string
  'label_official_shop_selling_points_1_detail--SG': string
  'label_official_shop_selling_points_1_detail--TH': string
  'label_official_shop_selling_points_1_detail--TW': string
  'label_official_shop_selling_points_1_detail--VN': string
  'label_official_shop_selling_points_2--BR': string
  'label_official_shop_selling_points_2--ID': string
  'label_official_shop_selling_points_2--MY': string
  'label_official_shop_selling_points_2--PH': string
  'label_official_shop_selling_points_2--PL': string
  'label_official_shop_selling_points_2--SG': string
  'label_official_shop_selling_points_2--TH': string
  'label_official_shop_selling_points_2--TW': string
  'label_official_shop_selling_points_2--VN': string
  'label_official_shop_selling_points_2_detail--BR': string
  'label_official_shop_selling_points_2_detail--ID': string
  'label_official_shop_selling_points_2_detail--MY': string
  'label_official_shop_selling_points_2_detail--PH': string
  'label_official_shop_selling_points_2_detail--PL': string
  'label_official_shop_selling_points_2_detail--SG': string
  'label_official_shop_selling_points_2_detail--TH': string
  'label_official_shop_selling_points_2_detail--TW': string
  'label_official_shop_selling_points_2_detail--VN': string
  'label_official_shop_selling_points_3--BR': string
  'label_official_shop_selling_points_3--ID': string
  'label_official_shop_selling_points_3--MY': string
  'label_official_shop_selling_points_3--PH': string
  'label_official_shop_selling_points_3--SG': string
  'label_official_shop_selling_points_3--TH': string
  'label_official_shop_selling_points_3--TW': string
  'label_official_shop_selling_points_3--VN': string
  'label_official_shop_selling_points_3_detail--BR': string
  'label_official_shop_selling_points_3_detail--ID': string
  'label_official_shop_selling_points_3_detail--MY': string
  'label_official_shop_selling_points_3_detail--PH': string
  'label_official_shop_selling_points_3_detail--SG': string
  'label_official_shop_selling_points_3_detail--TH': string
  'label_official_shop_selling_points_3_detail--TW': string
  'label_official_shop_selling_points_3_detail--VN': string
  label_official_shop_selling_points_understand_button: string
  label_add_to_cart: string
  label_buy: string
  label_confirm_small: string
  label_quantity: string
  label_select_variation_add_to_cart: string
  label_size_chart: string
  label_stock: string
  label_tag_out_of_stock: string
  label_whole_sale_price: string
  label_wholesale_price_available: string
  msg_addon_deal_expired: string
  msg_addon_deal_main_item_invalid: string
  msg_addon_deal_sub_item_invalid: string
  msg_cart_limit_per_shop_hit: string
  msg_error_select_variation: string
  msg_error_select_variation_with_name: string
  msg_item_has_been_added_to_cart: string
  msg_item_not_available: string
  msg_pdp_item_status_sold_out: string
  msg_quantity_invalid: string
  msg_pdp_cart_reached_promo_stock: string
  msg_pdp_cart_reacthed_normal_stock: string
  alert_voucher_no_common_payment_method_desc: string
  alert_voucher_no_common_payment_method_title: string
  alert_voucher_unapplied: string
  flag_voucher_new: string
  flash_voucher_digital_products: string
  flash_voucher_flashsale_selling_out: string
  flash_voucher_free_shipping: string
  flash_voucher_limited_redemption: string
  flash_voucher_shop: string
  flash_voucher_shopee: string
  flash_voucher_tnc: string
  flash_voucher_voucher_claim: string
  fsv_title_free_shipping: string
  label_1_minute: string
  label_1_minute_left: string
  label_airpay_only: string
  label_and: string
  label_btn_view: string
  label_capped_x: string
  label_coin_cashback_value_summary: string
  label_discount_value_summary: string
  label_drawer_discount_voucher: string
  label_drawer_free_shipping_voucher: string
  label_faq: string
  label_free_shipping: string
  label_free_shipping_header: string
  label_free_shipping_icon_label: string
  label_fsv_flat_rate_discount: string
  label_fsv_plain_text_discount: string
  label_fsv_up_to_fixed_discount: string
  label_fsv_up_to_fixed_discount__PH: string
  label_fsv_up_to_percentage_discount: string
  label_fsv_up_to_percentage_discount__PH: string
  label_how_to_use: string
  label_i_got_it: string
  label_inapplicable_vouchers_header: string
  label_limited: string
  label_md_voucher_no_cap: string
  label_microsite_voucher_credit_pop_up: string
  label_microsite_voucher_credit_pop_up_content: string
  label_microsite_voucher_credit_pop_up_title: string
  label_microsite_voucher_used: string
  label_microsite_voucher_used_up: string
  label_min_spend: string
  label_min_spend_amount: string
  label_n_left: string
  label_select_platform_voucher: string
  label_selected_voucher_number: string
  label_seller_voucher_drawer_claimable_vouchers: string
  label_seller_voucher_drawer_my_vouchers: string
  label_shop_voucher: string
  label_shop_voucher_code_apply: string
  label_shopee_wallet_only: string
  label_show_all: string
  label_show_less: string
  label_start_at: string
  label_time_left: string
  label_unapply_vouchers: string
  label_use: string
  label_valid_till: string
  label_valid_until: string
  label_voucher_apply: string
  label_voucher_badge_expired: string
  label_voucher_badge_invalid: string
  label_voucher_badge_loyalty: string
  label_voucher_badge_membership: string
  label_voucher_badge_new_user: string
  label_voucher_badge_used: string
  label_voucher_badge_used_up: string
  label_voucher_best_choice: string
  label_voucher_claim: string
  label_voucher_claim_successfully: string
  label_voucher_claimed: string
  label_voucher_close: string
  label_voucher_coins_cashback_value: string
  label_voucher_discount_percentage_off: string
  label_voucher_discount_value_off: string
  label_voucher_expiring_soon: string
  label_voucher_fully_redeemed: string
  label_voucher_inapplicable: string
  label_voucher_invalid: string
  label_voucher_leave_page: string
  label_voucher_limited_stock: string
  label_voucher_live_only: string
  label_voucher_mall: string
  label_voucher_mall_preferred: string
  label_voucher_max_value: string
  label_voucher_new_user: string
  label_voucher_ok: string
  label_voucher_preferred: string
  label_voucher_quota_date: string
  label_voucher_quota_date_expiring: string
  label_voucher_seller_voucher_use: string
  label_voucher_shop: string
  label_voucher_shopeepay_later: string
  label_voucher_usage_expiring_in: string
  label_voucher_usage_percentage_used: string
  label_voucher_usage_valid_till_date: string
  label_voucher_valid_duration: string
  label_voucher_valid_duration_after_claim_days: string
  label_voucher_valid_duration_after_claim_hours: string
  label_voucher_valid_duration_after_claim_minutes: string
  label_voucher_valid_duration_after_purchase_days: string
  label_voucher_valid_duration_after_purchase_hours: string
  label_voucher_valid_duration_after_purchase_minutes: string
  label_voucher_valid_duration_days: string
  label_voucher_valid_duration_hours: string
  label_voucher_valid_duration_minutes: string
  label_voucher_valid_for_after_days: string
  label_voucher_valid_for_after_hours: string
  label_voucher_valid_for_after_minutes: string
  label_voucher_video_only: string
  label_voucher_wallet_jko_pay: string
  label_voucher_wallet_minimum_purchase: string
  label_voucher_wallet_new_user: string
  label_voucher_wallet_shopee_pay_later: string
  label_where_to_find_vouchers: string
  max_distribution_per_buyer_collapse: string
  max_distribution_per_buyer_show: string
  msg_claim_error_already_claimed: string
  msg_claim_error_expired: string
  msg_claim_error_invalid: string
  msg_claim_error_no_quota: string
  msg_claim_error_not_found: string
  msg_claim_error_not_start: string
  msg_claim_error_ok: string
  msg_claim_error_self_shop: string
  msg_claim_error_unknown: string
  msg_claim_error_user_scope: string
  msg_drawer_one_voucher_selected: string
  msg_drawer_vouchers_selected: string
  msg_enter_platform_voucher_code: string
  msg_enter_shop_voucher_code: string
  msg_error_platform_drawer_no_items_selected: string
  msg_error_shop_drawer_no_items_selected: string
  msg_free_shipping_applied: string
  msg_how_to_use: string
  msg_input_claim_error_already_claimed: string
  msg_input_claim_error_expired: string
  msg_input_claim_error_invalid: string
  msg_input_claim_error_no_quota: string
  msg_input_claim_error_not_found: string
  msg_input_claim_error_not_start: string
  msg_input_claim_error_ok: string
  msg_input_claim_error_self_shop: string
  msg_input_claim_error_unknown: string
  msg_input_claim_error_user_scope: string
  msg_input_voucher_already_used: string
  msg_input_voucher_claim_not_start: string
  msg_input_voucher_code_expired: string
  msg_input_voucher_from_seller_own_shop: string
  msg_input_voucher_invalid: string
  msg_input_voucher_logistics_not_match: string
  msg_input_voucher_min_bucket_not_met: string
  msg_input_voucher_no_applicable: string
  msg_input_voucher_no_quota: string
  msg_input_voucher_not_complete_task: string
  msg_input_voucher_not_started: string
  msg_input_voucher_payment_not_match: string
  msg_input_voucher_ua_no_match: string
  msg_input_voucher_wrong_code: string
  msg_invalid_voucher_unapplied: string
  msg_n_drawer_voucher_selected: string
  msg_n_drawer_voucher_selected__few: string
  msg_n_drawer_voucher_selected__many: string
  msg_n_drawer_voucher_selected__other: string
  msg_n_drawer_voucher_selected__plural: string
  msg_no_applicable_vouchers: string
  msg_no_shop_voucher: string
  msg_no_shop_voucher_title: string
  msg_no_voucher: string
  msg_no_voucher_prompt: string
  msg_oops_error: string
  msg_platform_voucher_error: string
  msg_platform_voucher_explanation: string
  msg_select_items_to_use_voucher: string
  msg_select_one: string
  msg_shop_hot_sales_hint: string
  msg_shop_page_seller_vouchers_hint: string
  msg_shop_voucher_drawer_no_item_selected: string
  msg_shop_voucher_error: string
  msg_unapply_inapplicable_vouchers: string
  msg_voucher_already_used: string
  msg_voucher_cannot_be_applied: string
  msg_voucher_claim_not_start: string
  msg_voucher_code_applied_successfully: string
  msg_voucher_code_expired: string
  msg_voucher_from_seller_own_shop: string
  msg_voucher_invalid: string
  msg_voucher_logistics_not_match: string
  msg_voucher_min_bucket_not_met: string
  msg_voucher_no_applicable: string
  msg_voucher_no_quota: string
  msg_voucher_not_complete_task: string
  msg_voucher_not_started: string
  msg_voucher_payment_not_match: string
  msg_voucher_save_failure_cta: string
  msg_voucher_save_failure_title: string
  msg_voucher_select_items_in_cart: string
  msg_voucher_selected: string
  msg_voucher_server_error: string
  msg_voucher_ua_no_match: string
  msg_voucher_wrong_code: string
  msg_where_to_find_vouchers: string
  voucher_card_platform_no_items_selected: string
  voucher_card_promotion_error_live_only: string
  voucher_card_promotion_error_video_only: string
  voucher_card_shop_no_items_selected: string
  voucher_claim: string
  voucher_claimed: string
  voucher_drawer_auto_deselect_inapplicable: string
  voucher_drawer_auto_deselect_inapplicable_plural: string
  voucher_drawer_auto_deselect_without_applicable: string
  voucher_drawer_label_applied_vouchers: string
  voucher_drawer_label_other_vouchers: string
  voucher_drawer_shop_vouchers: string
  voucher_label_cancel: string
  voucher_label_close: string
  voucher_label_error: string
  voucher_label_ok: string
  voucher_label_specific_products: string
  voucher_msg_voucher_save_failure_content: string
  voucher_selection_popup_coins_cashback_content: string
  voucher_selection_x_vouchers_auto_selected: string
  voucher_selection_x_vouchers_auto_selected_plural: string
  voucher_selection_x_vouchers_selected: string
  voucher_selection_x_vouchers_selected_plural: string
  voucher_shop_description: string
  voucher_tnc_label_disclaimer_blocked_categories: string
  voucher_tnc_label_disclaimer_blocked_categories_learn_more: string
  voucher_wallet_label_airpay_only_fsv: string
  voucher_wallet_label_shopee_wallet_only_fsv: string
  label_mart_ksp_desc_1: string
  label_mart_ksp_desc_1__ID: string
  label_mart_ksp_desc_1__MY: string
  label_mart_ksp_desc_1__PH: string
  label_mart_ksp_desc_1__SG: string
  label_mart_ksp_desc_1__TH: string
  label_mart_ksp_desc_1__TW: string
  label_mart_ksp_desc_1__VN: string
  label_mart_ksp_desc_2: string
  label_mart_ksp_desc_2__ID: string
  label_mart_ksp_desc_2__MY: string
  label_mart_ksp_desc_2__PH: string
  label_mart_ksp_desc_2__SG: string
  label_mart_ksp_desc_2__TH: string
  label_mart_ksp_desc_2__TW: string
  label_mart_ksp_desc_2__VN: string
  label_mart_ksp_desc_3: string
  label_mart_ksp_desc_3__ID: string
  label_mart_ksp_desc_3__MY: string
  label_mart_ksp_desc_3__PH: string
  label_mart_ksp_desc_3__SG: string
  label_mart_ksp_desc_3__TH: string
  label_mart_ksp_desc_3__TW: string
  label_mart_ksp_desc_3__VN: string
  label_mart_ksp_pull_up_close_button: string
  label_mart_ksp_pull_up_title: string
  label_mart_ksp_title_1: string
  label_mart_ksp_title_1__ID: string
  label_mart_ksp_title_1__MY: string
  label_mart_ksp_title_1__PH: string
  label_mart_ksp_title_1__SG: string
  label_mart_ksp_title_1__TH: string
  label_mart_ksp_title_1__TW: string
  label_mart_ksp_title_1__VN: string
  label_mart_ksp_title_2: string
  label_mart_ksp_title_2__ID: string
  label_mart_ksp_title_2__MY: string
  label_mart_ksp_title_2__PH: string
  label_mart_ksp_title_2__SG: string
  label_mart_ksp_title_2__TH: string
  label_mart_ksp_title_2__TW: string
  label_mart_ksp_title_2__VN: string
  label_mart_ksp_title_3: string
  label_mart_ksp_title_3__ID: string
  label_mart_ksp_title_3__MY: string
  label_mart_ksp_title_3__PH: string
  label_mart_ksp_title_3__SG: string
  label_mart_ksp_title_3__TH: string
  label_mart_ksp_title_3__TW: string
  label_mart_ksp_title_3__VN: string
  label_from_same_shop: string
  label_mart_buy_again_bought_time: string
  label_mart_buy_again_bought_time__few: string
  label_mart_buy_again_bought_time__many: string
  label_mart_buy_again_bought_time__other: string
  label_mart_buy_again_bought_time__plural: string
  label_mart_buy_again_title: string
  label_mart_rcmd_categories: string
  label_mart_recommendations: string
  label_rcmd_mall_just_for_you: string
  label_rcmd_mall_popular_products: string
  label_rcmd_shop_browse_items_title: string
  label_rcmd_shop_browse_items_title__ES: string
  label_rcmd_shop_browse_items_title__FR: string
  label_rcmd_shop_browse_items_title__PL: string
  label_similar_products: string
  label_you_may_also_like: string
  label_you_may_also_like__PL: string
  rcmd_label_empty_listing: string
  rcmd_label_loading: string
  rcmd_label_nomore: string
  rcmd_label_off: string
  rcmd_label_see_all: string
  rcmd_label_see_more: string
  rcmd_label_soldout: string
  rcmd_no_ratings_yet: string
  rcmd_shop_hot_deals_page_title: string
  rcmd_title_shop_recommended_for_you: string
  rcmd_title_shop_recommended_for_you__ES: string
  rcmd_title_shop_recommended_for_you__FR: string
  rcmd_title_shop_recommended_for_you__PL: string
  brand_sale_dropdownlist_title: string
  brand_sale_starts_at_time: string
  flash_sale_dropdownlist_title: string
  flash_sale_label_ok: string
  flash_sale_no_product_hint: string
  fs_extra_n_off_applied_for_first_m: string
  fs_extra_n_off_applied_for_first_m_in_x: string
  fs_extra_n_off_first_m: string
  fs_extra_n_off_first_m_within_x: string
  fs_flash_sale_session_sub_title_coming_soon: string
  fs_flash_sale_session_sub_title_on_going: string
  fs_flash_sale_session_sub_title_tomorrow: string
  fs_label_loading: string
  fs_label_nomore: string
  fs_label_ok: string
  fs_label_see_more: string
  fs_label_sold_out: string
  label_brandsale_BR: string
  label_brandsale_ID: string
  label_brandsale_MX: string
  label_brandsale_MY: string
  label_brandsale_PH: string
  label_brandsale_SG: string
  label_brandsale_TH: string
  label_brandsale_TW: string
  label_brandsale_VN: string
  label_flash_sale_category_top_picks: string
  label_flash_sale_selling_out_tab: string
  label_flashsale_BR: string
  label_flashsale_ID: string
  label_flashsale_MX: string
  label_flashsale_MY: string
  label_flashsale_PH: string
  label_flashsale_SG: string
  label_flashsale_TH: string
  label_flashsale_TW: string
  label_flashsale_VN: string
  label_flashsale_no_selling_out_item: string
  label_flashsale_only_n_left: string
  label_flashsale_selling_fast: string
  label_reload: string
  label_see_more: string
  label_sold_out: string
  label_voucher_product_coins_cashback: string
  label_voucher_product_percentage_discount: string
  msg_flash_deal_has_ended: string
  msg_flash_sale_has_ended: string
  msg_shocking_sale_has_ended: string
  seo_flash_sale_description: string
  seo_flash_sale_description_in: string
  seo_flash_sale_description_my: string
  seo_flash_sale_description_ph: string
  seo_flash_sale_description_sg: string
  seo_flash_sale_title: string
  seo_flash_sale_title_in: string
  seo_flash_sale_title_mx: string
  seo_flash_sale_title_my: string
  seo_flash_sale_title_ph: string
  seo_flash_sale_title_sg: string
  label_receive_by_date_exact: string
  label_receive_by_date_range: string
  label_receive_in_time_exact: string
  label_receive_in_time_exact_short: string
  label_receive_in_time_range: string
  label_receive_in_time_range_rapid: string
  label_receive_in_time_range_rapid_short: string
  label_receive_in_time_range_short: string
  label_shopee_24h_edt: string
  label_shopee_24h_edt_short: string
  shopee_time_lib_locale: string
  label_ask_allow_location: string
  label_ask_allow_location_title_mobile: string
  label_back_to_homepage: string
  label_bundle: string
  label_cancel: string
  label_cart_add_more: string
  label_categories: string
  label_change: string
  label_confirm: string
  label_follow: string
  label_installment: string
  label_live: string
  label_more_shops: string
  label_my_addresses: string
  label_my_orders: string
  label_name: string
  label_need_help: string
  label_new: string
  label_ok: string
  label_online: string
  label_order_address_allow: string
  label_order_address_dont_allow: string
  label_phone_number: string
  label_postal_code: string
  label_preferred: string
  label_preferred_plus: string
  label_products: string
  label_promotion_off: string
  label_read_more: string
  label_save: string
  label_search_by_address_or_postal_code: string
  label_search_product: string
  label_search_user_products: string
  label_search_user_ratings: string
  label_search_user_sponsored_by: string
  label_see_more_camel: string
  label_select_collection_point_title: string
  label_shopee: string
  label_shopee_live: string
  label_submit: string
  label_verify: string
  label_welcome_pkg_badge_free: string
  label_wholesale: string
  msg_error_delete_delivery: string
  msg_error_delete_pickup: string
  msg_error_delete_return: string
  msg_error_has_occurred: string
  msg_install_pwa_prompt: string
  msg_invalid_phone: string
  msg_invalid_zipcode: string
  msg_must_be_numeric: string
  msg_require_address: string
  msg_require_street_no: string
  msg_require_zipcode: string
  msg_voucher_save_failure_content: string
  no_install_pwa_prompt: string
  title_home_page_new: string
  title_home_page_new_in: string
  title_home_page_new_my: string
  title_home_page_new_ph: string
  title_home_page_new_sg: string
  title_install_pwa_prompt: string
  yes_install_pwa_prompt: string
  alert_best_choice_claimed_and_auto_applied: string
  alert_voucher_applied_successfully: string
  alert_voucher_code_applied_successfully: string
  alert_voucher_device_not_met: string
  alert_voucher_expired: string
  alert_voucher_fully_redeemed: string
  alert_voucher_has_already_used: string
  alert_voucher_has_been_fully_redeemed: string
  alert_voucher_has_expired: string
  alert_voucher_inapplicable_in_current_region: string
  alert_voucher_invalid: string
  alert_voucher_is_already_used: string
  alert_voucher_is_invalid: string
  alert_voucher_logistics_not_match: string
  alert_voucher_no_longer_in_use: string
  alert_voucher_not_met_order_value: string
  alert_voucher_own_shop: string
  alert_voucher_payment_not_match: string
  alert_voucher_product_out_of_scope: string
  alert_voucher_requirements_not_met: string
  alert_voucher_validity_time_not_started: string
  coins_reward_voucher_added: string
  coins_reward_voucher_section_title: string
  dp_voucher_code: string
  dp_voucher_discount_and_cashback: string
  dp_voucher_enter_code_prompt: string
  dp_voucher_input_or_select_voucher: string
  dp_voucher_no_voucher_selected: string
  dp_voucher_not_valid: string
  dp_voucher_redeem: string
  dp_voucher_select_saved_vouchers: string
  dp_voucher_valid_with_spending: string
  flash_sale_starts_in_label: string
  flash_sale_starts_label: string
  flash_sale_time_desync_title: string
  grb_label_group_and_save: string
  grb_label_group_buy_group_leader: string
  grb_label_group_buy_people_joined: string
  group_buy_open_group_count: string
  group_buy_open_group_count__few: string
  group_buy_open_group_count__many: string
  group_buy_open_group_count__other: string
  group_buy_open_group_count_plural: string
  hot_deal_starts_label_in: string
  join: string
  label_amount_sold_out_in_1_hour: string
  label_amount_sold_out_in_1_min: string
  label_amount_sold_out_in_n_hours: string
  label_amount_sold_out_in_n_mins: string
  label_cashback_cannot_be_earned: string
  label_cashback_earned: string
  label_claim_voucher_for_cashback: string
  label_claim_voucher_for_discount: string
  label_claim_voucher_for_discount_percentage: string
  label_coins_cashback: string
  label_details: string
  label_digital_purchase: string
  label_discount_applied: string
  label_discount_cannot_be_applied: string
  label_discount_percentage_applied: string
  label_discount_percentage_cannot_be_applied: string
  label_ends_in: string
  label_flash_deal: string
  label_flash_sale: string
  label_flash_sale_amount_sold_out_in_1_hour: string
  label_flash_sale_amount_sold_out_in_n_hours: string
  label_flash_sale_amount_sold_out_in_n_hours__few: string
  label_flash_sale_amount_sold_out_in_n_hours__many: string
  label_flash_sale_amount_sold_out_in_n_hours__other: string
  label_flash_sale_amount_sold_out_in_n_hours__plural: string
  label_flash_sale_badge: string
  label_flash_sale_booked: string
  label_flash_sale_buy_long: string
  label_flash_sale_buy_short: string
  label_flash_sale_extra_discount_badge: string
  label_flash_sale_sold_out_in_1_hour: string
  label_flash_sale_sold_out_in_n_hours: string
  label_flashsale_n_sold: string
  label_flashsale_n_sold__few: string
  label_flashsale_n_sold__many: string
  label_flashsale_n_sold__other: string
  label_flashsale_n_sold__plural: string
  label_flashsale_n_sold_item_detail: string
  label_flashsale_running_out: string
  label_flashsale_selling_out: string
  label_free_shipping__PH: string
  label_free_shipping_header__PH: string
  label_free_shipping_voucher: string
  label_free_shipping_voucher__ph: string
  label_fully_redeemed: string
  label_get_voucher: string
  label_go_to_shop: string
  label_group_buy_badge: string
  label_group_buy_badge_long: string
  label_group_buy_group_leader: string
  label_group_buy_spot_left: string
  label_hot_deals_page_title: string
  label_how_group_buy_work: string
  label_invoice_shop_voucher: string
  label_invoice_shopee_voucher: string
  label_more_vouchers: string
  label_new_user_voucher: string
  label_no_flash_deal: string
  label_no_flash_sale: string
  label_opc_voucher_coin: string
  label_pdp_voucher_see_more: string
  label_platform_voucher: string
  label_platform_voucher_applied: string
  label_see_all: string
  label_see_all_deals: string
  label_select_one_voucher: string
  label_select_voucher: string
  label_shop_voucher_applied: string
  label_shop_voucher_entrance: string
  label_spend_more_to_get_cashback: string
  label_spend_more_to_get_discount: string
  label_spend_more_to_get_discount_percentage: string
  label_to_my_voucher_wallet: string
  label_up_to_cashback_available: string
  label_up_to_discount_available: string
  label_up_to_discount_percentage_available: string
  label_valid_from: string
  label_value_voucher: string
  label_view_details: string
  label_view_my_voucher: string
  label_view_voucher_wallet_in_app: string
  label_voucher: string
  label_voucher_add_more: string
  label_voucher_cannot_be_applied: string
  label_voucher_cashback: string
  label_voucher_claim_from: string
  label_voucher_claim_in: string
  label_voucher_coins_cash_back: string
  label_voucher_copied: string
  label_voucher_discount_value: string
  label_voucher_go_shopping: string
  label_voucher_header_subtitle: string
  label_voucher_jko_pay: string
  label_voucher_min_spend: string
  label_voucher_n_coins: string
  label_voucher_new_user_only: string
  label_voucher_no_cap: string
  label_voucher_product_value_discount: string
  label_voucher_shopee_pay_only: string
  label_voucher_shopee_pay_only__TH: string
  label_voucher_shopee_pay_only__VN: string
  label_voucher_start_at: string
  label_voucher_terms_and_cond: string
  label_voucher_tnc: string
  label_voucher_use: string
  label_voucher_use_from: string
  label_voucher_use_in: string
  label_voucher_use_later: string
  label_waiting_for_you: string
  label_your_voucher_awaits: string
  msg_drawer_voucher_selected: string
  msg_group_buy_invite_friends: string
  msg_group_buy_ship_when_pays: string
  msg_group_buy_start_group: string
  msg_shop_voucher_subtitle: string
  msg_voucher_shopeepay_not_activate: string
  no_available_vouchers: string
  partner_voucher: string
  private_voucher: string
  voucher_applied: string
  voucher_card_promotion_error_upcoming_voucher: string
  voucher_claimed_successfully: string
  voucher_label_redeem: string
  voucher_label_redeemed: string
  voucher_wallet_label_new_user_only__TW: string
}
