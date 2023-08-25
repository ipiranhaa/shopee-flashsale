import { IInitalDataResponse } from '../interfaces/initialDataResponse'
import client from '../services/client'
import { JSDOM } from 'jsdom'

const findInitData = (
  scriptTags: NodeListOf<HTMLScriptElement>,
): IInitalDataResponse => {
  for (const scriptTag of scriptTags) {
    if (scriptTag.getAttribute('type') === 'text/mfe-initial-data') {
      return JSON.parse(scriptTag.innerHTML)
    }
  }

  throw new Error('Not found initial data.')
}
const getItemDetailByPage = async (shopId: string, ItemId: string) => {
  const { data } = await client.get<string>(
    `https://shopee.co.th/product/${shopId}/${ItemId}`,
  )

  const { document } = new JSDOM(data).window
  const scriptTags = document.querySelectorAll('script')
  try {
    const { initialState } = findInitData(scriptTags)
    const itemDetail = initialState.item.items[ItemId]
    return itemDetail
  } catch {
    throw new Error(`Not found detail of ${ItemId}`)
  }
}

export default getItemDetailByPage
