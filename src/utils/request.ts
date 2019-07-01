import axios from 'axios'

interface param {
  [key: string]: any
}
/**
 * 请求参数处理
 * @param {object} params
 */

const parseBody = (params: param = {}) => {
  params = {
    ...params,
  }
  return params
}
// headers: { 'Content-Type': '' }
export const request = (url: string, params = {}) => {
  return axios({
    url,
    method: "post",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    timeout: 10000,
    data: parseBody(params),

  }).then(res => {
    const { status, data } = res
    // if (errCode && errMsg) {
    //   return message.error(errMsg)
    // }

    if (status >= 200) {
      return data
    }
    throw new Error(`网络请求错误，状态码${status}`)
  }).catch((err: string) => {
    throw new Error(`网络请求错误，错误原因${err}`)
  })
}
export const get = (url: string, params={}) => {
  return axios.get(url, {
    params: parseBody(params),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then(res => {
    const { status, data } = res
    if (status >= 200) {
      return data
    }
    throw new Error(`网络请求错误，状态码${status}`)
  })
}

