var fs = require('fs');			//load filesystem module
var path = require('path');		//load path module for xtn name

var filePath = process.argv[2];
var xtn = '.' + process.argv[3];

fs.readdir(filePath, function callback(err, list){
	for (var i = 0; i < list.length; i++){
		if (path.extname(list[i]) === xtn){
			console.log(list[i]);
		}
	}
});