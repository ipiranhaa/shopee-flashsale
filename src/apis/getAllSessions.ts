import { GET_ALL_SESSIONS_URL } from '@/config'
import type IAllSessionsResponse from '@/interfaces/allSessionsResponse'
import axios from 'axios'

const getAllSessions = async () => {
  const { data } = await axios.get<IAllSessionsResponse>(GET_ALL_SESSIONS_URL)
  return data.data.sessions
}

export default getAllSessions
