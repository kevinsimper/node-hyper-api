import aws4 from 'hyper-aws4'
import fetch from 'node-fetch'

export default class Hyper {
  constructor(options) {
    let _options = options || {}
    this.baseurl = 'https://us-west-1.hyper.sh'
    this.credential = Object.assign({}, {
      accessKey: process.env.HYPER_ACCESS,
      secretKey: process.env.HYPER_SECRET
    }, _options.credential || {})
  }
  sign(method, url, body) {
    let fullUrl = this.baseurl + url
    const signOption = {
      method,
      credential: this.credential,
      url: fullUrl
    }
    if(body) signOption.body = JSON.stringify(body)
    const headers = aws4.sign(Object.assign({}, signOption))
    let fetchOptions = {
      fullUrl,
      method: signOption.method,
      headers
    }
    if(body) fetchOptions.body = signOption.body
    return fetchOptions
  }
  request(method, url, body) {
    const { fullUrl, fetchOptions } = this.sign(method, url, body)
    return fetch(fullUrl, fetchOptions).then((res) => {
      return res.json()
    })
  }
  get(url) {
    return this.request('GET', url)
  }
  post(url, body) {
    return this.request('POST', url, body)
  }
  logs(containerId, callback) {

  }
}
