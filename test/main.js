var expect = require('chai').expect
  , rewire = require("rewire")
  , jsontotex = rewire('../lib/jsontotex');

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

    it('should get the locale for the date/time', function() {
      expect(/[a-z][a-z]_[A-Z][A-Z]/.test(jsontotex.getLocaleTime())).to.be.true;
    });

    it('should format an ISO date to a locale-based fancy format (it_IT supported, en_EN is the default)', function() {
      var revertStub = jsontotex.__set__('getLocaleTime', function() { return 'en_EN'; });
      expect(jsontotex.formatVal('InvoiceIsoDate', '2015-07-01')).to.equal('Wednesday, July 01, 2015');

      jsontotex.__set__('getLocaleTime', function() { return 'it_IT'; });
      expect(jsontotex.formatVal('InvoiceIsoDate', '2015-07-01')).to.equal('Mercoledì 01 luglio 2015');
      
      revertStub();
    });

    it.skip('parse JSON file');

    //jsontotex.getLocaleTime.restore();
  });

});
