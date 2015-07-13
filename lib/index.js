var fs = require('fs')
  , shelljs = require('shelljs');

if (process.argv.length < 3) {
  console.error('Usage:', process.argv[0], 'lib/index.js', 'filename', '# see README.md');
  process.exit(1);
}

var filename = process.argv[2];
fs.exists(filename, function (exists) {
  var exitCode;

  exists ?
    exitCode = shelljs.exec("pdflatex latex/invoice-model.tex " + filename).code :
    console.error("'" + filename + "'", 'does not exist');

  if(exitCode !== 0) {
    console.error('pdflatex command failed');
    process.exit(1);
  }
});
