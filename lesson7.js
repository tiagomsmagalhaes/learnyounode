var http = require('http')

http.get(process.argv[2],callback)

function callback(response) {
  response.on('data',treatData).setEncoding('utf8')
  function treatData(data) {
    console.log(data);
  }
}
// 
// var http = require('http')
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })
