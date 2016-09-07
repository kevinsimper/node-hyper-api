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
  get(url) {
    const signOption = {
      method: 'GET',
      credential: this.credential
    }
    let fullUrl = this.baseurl + url
    const headers = aws4.sign(Object.assign({}, {url: fullUrl}, signOption))
    return fetch(fullUrl, {method: signOption.method, headers}).then((res) => {
      return res.json()
    })
  }
}
