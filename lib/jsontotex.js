function jsontotex(objPair) {
  var key = Object.keys(objPair)[0]
    , val = objPair[key];

  return '\\def \\' + key + ' {' + val + '}';
}

module.exports = jsontotex;
