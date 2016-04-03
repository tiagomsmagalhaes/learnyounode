var readFilter = require('./module.js');

readFilter(process.argv[2],process.argv[3],callback);

function callback(err,data) {
  if (err)
    return console.log(err);

  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);

  }
}
