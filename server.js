var
    express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan'),
    compression = require('compression')
    PORT = process.env.PORT || 3000

//middleware
app.use(logger('combined'))
app.use(express.static(path.join(__dirname, 'public-prod')))
app.use(compression())


//main route 
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '/public-prod/index.html')) 

})

app.listen(PORT, function(){
    console.log("everything is running on " + PORT + " everything is good!")
})
