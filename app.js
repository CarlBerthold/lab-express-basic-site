const express = require('express');

const app = express()

app.use(express.static(__dirname + '/public'));

const port = 8000;


app.get('/',function (req,res){
    res.sendFile(__dirname + '/views/home-page.html')
});

app.get('/Photo-gallery',function (req,res){
    res.sendFile(__dirname + '/views/Photo-gallery.html')
});

app.get('/contact', function (req,res){
    res.sendFile(__dirname + '/views/contact.html')
});

//
app.listen(port, function(){
console.log('im listening musik on port 8000')
})