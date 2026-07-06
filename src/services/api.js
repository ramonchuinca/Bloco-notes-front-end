// import axios from 'axios'

// export default axios.create({
//   baseURL: 'http://127.0.0.1:8000/api'
// })

// import api from './services/api'

// api.get('/users')
//   .then(response => {
//     console.log(response.data)
//   })

import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default api