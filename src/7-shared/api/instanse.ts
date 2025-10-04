import axios from 'axios'


import {JWTToken} from '@/7-shared/lib/jwtToken'

export const instance = axios.create({
  // TODO: при подключении настоящей апишки вернуть сюда withCredentials: true
  withCredentials: false,
  // TODO: Replace with new baseURL
  // baseURL: `http://localhost:8000/api`,
  baseURL: 'https://dog.ceo/api/',

})

instance.interceptors.request.use(
  (config) => {
    const access = JWTToken.getAccess()
    if (access) {
      config.headers.Authorization = `Bearer ${access}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

instance.interceptors.response.use(
  function (config) {
    return config
  },

  async function (error) {
    const originalRequest = error.config
    if (error.response.status.toString().startsWith(5)) {
      // TODO: Need to add some notification
      // notification({
      //   status: ENotificationStatus.ERROR,
      //   title: t('status.server_error'),
      //   message: t('status.server_error_message'),
      // })
      return
    }
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true
      try {
        const refresh = JWTToken.getRefresh()
        if (refresh) {
          // TODO: Replace with new refresh api endpoint
          const response = await axios.post(`http://localhost:8000/api/users/auth/token/refresh/`, { refresh })
          JWTToken.setTokens(response.data.access, response.data.refresh)
        }
        return instance.request(originalRequest)
      } catch (e) {
        JWTToken.removeTokens()
        window.location.reload()
      }
    }

    throw error
  },
)
