const repeatedString = require('../repeated-word');

describe('repeatedString()', () => {
    it('repeatedString() will return the repeated word in the the string.', () => {

        let str = 'What we know is a drop. What we don’t know is an ocean.'
        expect(repeatedString(str)).toEqual('what');
    });
    it('repeatedString() will return the first repeated word in the the string.', () => {

        let str = 'There are infinite numbers between 0 and 1 , There is 1 and .12 and .112 and an infinite collection of others';
        expect(repeatedString(str)).toEqual('there');
    });
    it('repeatedString() will avoid the spaces and returns the repeated word in the the string.', () => {

        let str = 'some infinities are bigger than    other infinities';
        expect(repeatedString(str)).toEqual('infinities');
    });
    it('repeatedString() will avoid match the words in lower case.', () => {

        let str = 'YOU are so busy being "YOU" that you have no idea how utterly unprecedented you are.';
        expect(repeatedString(str)).toEqual('you');
    });
    it('repeatedString() will returns "no repeated words" if there is no repeated words in the string', () => {

        let str = 'The world is not a wish-granting factory.';
        expect(repeatedString(str)).toEqual('no repeated words');
    });

});