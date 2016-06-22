
var
    express = require('express'),
    app = express(),
    OAuth2 = require('oauth').OAuth2,
    https = require('https')
    path = require('path'),
    logger = require('morgan'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    PORT = process.env.PORT || 3000,
    Twitter = require('twitter')

var client = new Twitter({
    consumer_key: 'UUjvZT9Uulis3wqpO4DFPIF4p',
    consumer_secret: 'AKlplZIu0H00Mv748n6Oi5RqhYZ1SJVV3siV5qt4roG0Tzb1LB',
    access_token_key: '2717428192-fvN3s29Dw3TQNasWN423DY5yxIWNIDHP9GQmT6S',
    access_token_secret: 'nB2dpARK2zgKG5TdiJw0agWfMCiXsZnSqU4pPz5gaIGKZ'
})


//middleware
app.use(logger('combined'))
app.use(express.static(path.join(__dirname, 'public-prod')))
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) 

// client.get('search/tweets', {q: search + encodeURIComponent('#')}, function(error, tweets, response){
//     console.log(tweets)
// })
var search = ''
client.get('search/tweets', {q: "funnycats"}, function(error, tweets, response) {
   return (
   res.json(tweets)
   )
})

//main route 
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '/public-prod/index.html')) 
})

app.listen(PORT, function(){
    console.log("everything is running on " + PORT + " everything is good!")
})
