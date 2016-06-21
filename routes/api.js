var 
    express = require('express'),
    apiRouter = express.Router()

apiRouter.get('/', function (req, res) {
    debugger;
    res.json({message: "Our API root"})
})


module.exports = apiRouter
