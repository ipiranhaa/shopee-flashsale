import { GET_ALL_SESSIONS_URL } from '../config'
import type IAllSessionsResponse from '../interfaces/allSessionsResponse'
import client from '../services/client'

const getAllSessions = async () => {
  const { data } = await client.get<IAllSessionsResponse>(GET_ALL_SESSIONS_URL)
  return data.data.sessions
}

export default getAllSessions
