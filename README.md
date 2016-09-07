# Hyper API Node.js SDK

```
var Hyper = require('../dist')

let api = new Hyper()
api.get('/containers/json').then(c => console.log(c))

let createOptions = {
  Image: 'ubuntu',
  Cmd: 'date'
}
api.post('/containers/create', createOptions)
  .then(c => console.log(c))
  .catch((e) => console.log(e))

```
