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

      expect(jsontotex(obj.line1)).to.equal('\\def \\myVar {' + obj.line1.myVar + '}');
      expect(jsontotex(obj.line2)).to.equal('\\def \\myVar {' + obj.line2.myVar + '}');
      expect(jsontotex(obj.line3)).to.equal('\\def \\myVar {' + obj.line3.myVar + '}');
    });

    it.skip('date from YYYY-MM-DD to locale (EN and IT). How to get the locale?');

    it.skip('parse JSON file');

  });

});

