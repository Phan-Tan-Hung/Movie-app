// Yêu cầu truy cập movies json
var moviesJSON = require('../movies.json');

// Home
exports.home = function(req,res){

    var movies = moviesJSON.movies; // truy cập phim

    res.render('home', {
        title: "Mephim.com",
        movies : movies
    });
};

// Chon phim
exports.chonPhim = function(req,res){
    var maPhim = req.params.maPhim;

    var movies = moviesJSON.movies;

    if(maPhim >= 1 && maPhim <= 9){
        var movie = movies[maPhim - 1];//truyền mảng động mã phim

        var title = movie.title;

        var main_characters = movie.main_characters;
    
        res.render('moviesCode',{
            movies : movies,
            title : title,
            movie : movie,
            main_characters : main_characters
        });
	} else {
		res.render('notFound', {
			movies : movies,
			title : "Xin lỗi! phim này chưa được cập nhật."
		});
	}

};

// khong tim thay
exports.notFound = function(req, res) {
	var movies = moviesJSON.movies;
	res.render('notFound', {
		movies : movies,
		title : "không tìm thấy trang này"
	});
};