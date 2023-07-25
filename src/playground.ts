// import { getCurrentFlashSaleItems, getItemDetail } from '.'
import getItemDetailByBrowser from './apis/getItemDetailByBrowser'

const gt = async () => {
  // const result = await getCurrentFlashSaleItems()
  // const result = await getItemDetail(313_033_738, 3_085_480_217)
  // console.log('🚀 ~ file: test.ts:5 ~ gt ~ result:', result)
  try {
    const result = await getItemDetailByBrowser(
      'https://shopee.co.th/product/397858892/8841436743',
    )
    console.log('🚀 ~ file: playground.ts:10 ~ gt ~ result:', result)
  } catch (error) {
    console.log('🚀 ~ file: playground.ts:15 ~ gt ~ error:', error)
  }
}

gt()
