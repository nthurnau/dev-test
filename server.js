var
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    logger = require('morgan'),
    PORT = process.env.PORT || 3000,
    apiRoutes = require('./routes/api.js') 

//middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(logger())
app.use(express.static(path.join(__dirname, 'public-prod')))

app.use('/api', apiRoutes) 

//main route 
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '/public-prod/index.html')) 
})

app.listen(PORT, function(){
    console.log("everything is running on " + PORT + " everything is good!")
})
