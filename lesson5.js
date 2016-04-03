var fs = require('fs');
var path = require('path');


fs.readdir(process.argv[2],callback);

function callback(err, list) {
  var listToReturn = [];
  for (var i = 0; i < list.length; i++) {

    if ('.'+process.argv[3] == path.extname(list[i])) {
      listToReturn.push(list[i]);
      console.log(list[i]);
    }

  }
}

// var fs = require('fs')
// var path = require('path')
//
// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//     console.log(file)
//   })
// })
