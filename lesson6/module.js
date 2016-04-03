var fs = require('fs');
var path = require('path');



function readFilter(fileList,extension,callback) {

  fs.readdir(fileList,rdirCallback);

  function rdirCallback(err, list) {
    if (err)
      return callback(err)

    var listToReturn = [];
    for (var i = 0; i < list.length; i++)
      if ('.'+process.argv[3] == path.extname(list[i]))
        listToReturn.push(list[i]);

    return callback(null, listToReturn)
  }
}

module.exports = readFilter;
