var Hyper = require('../dist')

let api = new Hyper()
api.get('/containers/json').then(c => console.log(c))
