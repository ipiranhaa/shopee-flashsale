import axios from 'axios'
import UserAgent from 'user-agents'

const client = axios.create({
  headers: {
    'User-Agent': new UserAgent([
      /Chrome/,
      { deviceCategory: 'desktop' },
    ]).toString(),
  },
})

export default client
