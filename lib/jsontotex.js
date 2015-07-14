var strftime = require('strftime');

function formatPair(objPair) {
  var key = Object.keys(objPair)[0]
    , val = objPair[key];

  return '\\def \\' + key + ' {' + formatVal(key, val) + '}';
}

function formatVal(key, val) {
  var date = new Date(val + 'T00:00:00');

  if (key === 'InvoiceIsoDate' && /\d\d\d\d-\d\d-\d\d/.test(val)) {

    if ('it_IT' === getLocaleTime()) {
      var it_IT = {
        days: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
        months: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
      } , strftimeIT = strftime.localize(it_IT);

      return strftimeIT('%A %d %B %Y', date); // Mercoledì 01 luglio 2015
    }

    var en_EN = {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    } , strftimeEN = strftime.localize(en_EN);
    return strftimeEN('%A, %B %d, %Y', date); // Saturday, January 01, 2011
  }

  return val;
}

function getLocaleTime() {
  var lcTime = process.env.LC_TIME;

  if (/[a-z][a-z]_[A-Z][A-Z].*/.test(lcTime)) return lcTime.substring(0, 5);

  return 'en_EN';
}

module.exports = {
  formatPair: formatPair,
  formatVal: formatVal,
  getLocaleTime: getLocaleTime
};
