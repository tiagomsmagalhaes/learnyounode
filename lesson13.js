var http = require('http')
var url = require('url')


server = http.createServer(function (req,res) {
  if (req.method=='GET') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    var parsedReq = url.parse(req.url, true)
    var date = new Date(parsedReq.query['iso'])
    if (parsedReq.pathname == "/api/parsetime")
    date = '{"hour":'+ date.getHours() +',"minute":'+ date.getMinutes() +',"second":'+ date.getSeconds() +'}'
    else if (parsedReq.pathname == "/api/unixtime")
    date = '{"unixtime":'+ Date.parse(date.toISOString()) +'}'

    res.end(date);
  }
})
server.listen(process.argv[2]);

// 
// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }
//
// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url))
//   result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//   result = unixtime(time)
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
