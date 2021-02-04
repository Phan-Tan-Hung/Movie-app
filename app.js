var express = require('express');

var app = express();

app.set('view engine', 'ejs'); // khai báo ejs

var routes = require('./routes'); // khai báo mục routes

var path = require('path'); // khai báo cho express mục item tĩnh ở public
app.use(express.static(path.join(__dirname, 'public')));

// Routes (định tuyến)
 
// Home
app.get('/', routes.home);

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