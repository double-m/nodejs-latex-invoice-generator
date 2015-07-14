var expect = require('chai').expect
  , jsontotex = require('../lib/jsontotex');

describe('Test the code generation', function() {

  describe('JSON to TeX', function() {

    it('should convert an object element into a TeX definition', function() {
      var obj = {
        line1: { myVar: "myString" },
        line2: { myVar: 10 },
        line3: { myVar: 10000.00 }
      };

      expect(jsontotex.formatPair(obj.line1)).to.equal('\\def \\myVar {' + obj.line1.myVar + '}');
      expect(jsontotex.formatPair(obj.line2)).to.equal('\\def \\myVar {' + obj.line2.myVar + '}');
      expect(jsontotex.formatPair(obj.line3)).to.equal('\\def \\myVar {' + obj.line3.myVar + '}');
    });

    it('date from YYYY-MM-DD to IT locale (EN is the default)', function() {
      expect(jsontotex.formatVal('InvoiceIsoDate', '2015-07-01')).to.equal('Mercoledì 01 luglio 2015');
      //expect(jsontotex.formatVal('InvoiceIsoDate', '2015-07-01')).to.equal('Wednesday, July 01, 2015');
    });

    it.skip('parse JSON file');

  });

});
