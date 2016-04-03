var fs = require('fs');

var arr = fs.readFileSync(process.argv[2]).toString().split("\n");

console.log(arr.length-1);

// 
// var fs = require('fs')
//
//      var contents = fs.readFileSync(process.argv[2])
//      var lines = contents.toString().split('\n').length - 1
//      console.log(lines);
