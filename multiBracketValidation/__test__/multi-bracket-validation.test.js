  'user strict';

  const braketChecker = require('../multi-bracket-validation');


  describe('Multi Bracket Validation', () => {

      it('it returns true or false', () => {
          expect(braketChecker('()(({}))')).toEqual(true);
          expect(braketChecker('[((({a}))]')).toEqual(false);
          expect(braketChecker('((()))(anythext)')).toEqual(true);
      });
  });