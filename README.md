# Hyper API Node.js SDK

```
var Hyper = require('hyper-api')

// You can do it like this
let api = new Hyper()
// this reads the access and secret from the environment
// HYPER_ACCESS
// HYPER_SECRET

// or you can specify it like this
let api = new Hyper({
  credential: {
    accessKey: '###',
    secretKey: '###'
  }
})
api.get('/containers/json').then(c => console.log(c))

let createOptions = {
  Image: 'ubuntu',
  Cmd: 'date'
}
api.post('/containers/create', createOptions)
  .then(c => console.log(c))
  .catch((e) => console.log(e))

```
