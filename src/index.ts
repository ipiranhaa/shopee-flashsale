import getAllSessions from './apis/getAllSessions'
import getItems from './apis/getItems'
import filterItemsByCriteria from './utils/filterItemsByCriteria'
import parseSession from './utils/parseSession'

const main = async () => {
  const allSessions = await getAllSessions()
  const currentSession = allSessions[0]
  const promotionId = currentSession.promotionid

  const paginations = await parseSession(currentSession)
  console.log('🚀 Total Page:', paginations.length)
  const items = await getItems(promotionId, paginations[0])
  const filterdItems = filterItemsByCriteria(items)
  console.log('🚀 ~ file: index.ts:15 ~ main ~ filterdItems:', filterdItems)
}

main()
