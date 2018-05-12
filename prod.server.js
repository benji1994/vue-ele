var express = require('express')
var config = require('./config/index')

var port = process.env.PORT || config.build.port || 9000

var app = express()

var router = express.Router()

router.get('/hot', function (req, res, next) {
    req.url = '/index.html'
})

app.use(router)

var appData = require('./data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings
var apiRoutes = express.Router()
apiRoutes.get('/seller', (req, res) => {
    res.json({
      errno: 0,
      data: seller
    })
  }),
  apiRoutes.get('/goods', (req, res) => {
    res.json({
      errno: 0,
      data: goods
    })
  }),
  apiRoutes.get('/ratings', (req, res) => {
    res.json({
      errno: 0,
      data: ratings
    })
  })
app.use('/api', apiRoutes)

app.use(express.static('./dist'))
console.log(port)
module.exports = app.listen(port, (err) =>{
    if (err) {
        console.log('ERR')
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
})
