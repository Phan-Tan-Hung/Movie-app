var express = require('express');

//mongodb
// var mongodb = require('mongodb');
// var mongoClient = mongodb.MongoClient;
// var ObjectId = mongodb.ObjectID;

var app = express();

app.set('view engine', 'ejs'); // khai báo ejs

var routes = require('./routes'); // khai báo mục routes

var path = require('path'); // khai báo cho express mục item tĩnh ở public
const { MongoClient } = require('mongodb');
app.use(express.static(path.join(__dirname, 'public')));

// Routes (định tuyến)
 
// Home
app.get('/', routes.home);

//DNDK
app.get('/signin', routes.signin);
app.get('/signup', routes.signup);

// Chon phim
app.get('/phim/:maPhim?', routes.chonPhim);

//the loai
app.get('/theLoai/:Category?', routes.chonTheLoai);

// khong tim thay
app.get('*', routes.notFound);

// listen port
// app.listen(3000, function() {
//     console.log("App đang chạy trên cổng: 3000!");
// }); 

app.listen(process.env.PORT || 3000);

// MongoClient.connect('mongodb://localhost:27017', 
// function (error,client) {
//     database = client.db("Movie_App");
// });