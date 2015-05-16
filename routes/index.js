var express = require('express');
var fs = require("fs");
var path = require("path");
var router = express.Router();


/*ルーティング*/
fs.readdir('./public', function(err, files){
	//console.log(files[0]);
	for(i=0;i<files.length;i++){
		router.get("/"+files[i],function(req,res){
			res.sendfile(__dirname+"/"+files[i]+"/index.html");
		});
	}
});


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
