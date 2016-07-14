var fs = require('fs');		//load filesystem module


var filePath = process.argv[2];		//from input

var dataFileStr = fs.readFileSync(filePath).toString();

var lineArr = dataFileStr.split('\n');

var newLines = lineArr.length - 1; 


console.log(newLines);
