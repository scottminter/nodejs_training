/**
 * Debugging
 * console.log() is your best friend
 */

let myObj = {
  a: 'a',
  b: function () {
    console.log('this is a function');
  },
  c: [
    'one',
    'two',
    'three'
  ],
  d: {
    d1: 'd1',
    d2: function () {
      console.log('this is d2 function');
    }
  }
};

console.log(myObj);
myObj.d.d2();
