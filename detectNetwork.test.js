/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

  // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
  //   // This test doesn't really test anything at all! It will pass no matter what.
  //   var even = function(num){
  //     return num/2 === 0;
  //   }
  //   return even(10) === true;
  // });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var expect = chai.expect;

  it('has a prefix of 38 and a length of 14', function() {
    expect (detectNetwork('38283947592712')).to.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
    expect (detectNetwork('39345678901234') === 'Diner\'s Club');
    if (detectNetwork('39345678901233') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function () {
    expect(detectNetwork('6011830482018304')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function () {
    expect(detectNetwork('6011203840582018204')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  var should = chai.should();
  it('has a prefix of 5018 and has a length of 16', function () {
    detectNetwork('5018234567890123').should.equal('Maestro');
  })
  it('has a prefix of 5018 and has a length of 17', function () {
    detectNetwork('50182345678901232').should.equal('Maestro');
  })
  it('has a prefix of 5018 and has a length of 18', function () {
    detectNetwork('501823456789012323').should.equal('Maestro');
  })
  it('has a prefix of 5018 and has a length of 19', function () {
    detectNetwork('5018234567890123234').should.equal('Maestro');
  })
  it('has a prefix of 5020 and has a length of 16', function () {
    detectNetwork('5020234567890123').should.equal('Maestro');
  })
  it('has a prefix of 5020 and has a length of 17', function () {
    detectNetwork('50202345678901233').should.equal('Maestro');
  })
  it('has a prefix of 5020 and has a length of 18', function () {
    detectNetwork('502023456789012312').should.equal('Maestro');
  })
  it('has a prefix of 5020 and has a length of 19', function () {
    detectNetwork('5020234567890123102').should.equal('Maestro');
  })
  it('has a prefix of 5038 and has a length of 16', function () {
    detectNetwork('5038234567890123').should.equal('Maestro');
  })
  it('has a prefix of 5038 and has a length of 17', function () {
    detectNetwork('50382345678901233').should.equal('Maestro');
  })
  it('has a prefix of 5038 and has a length of 18', function () {
    detectNetwork('50382345678901232').should.equal('Maestro');
  })
  it('has a prefix of 5038 and has a length of 19', function () {
    detectNetwork('503823456789012323').should.equal('Maestro');  
  })
  it('has a prefix of 5893 and has a length of 16', function () {
      detectNetwork('5893234567890123').should.equal('Maestro');
  })
  it('has a prefix of 5893 and has a length of 17', function () {
      detectNetwork('58932345678901232').should.equal('Maestro');
  })
  it('has a prefix of 5893 and has a length of 18', function () {
      detectNetwork('589323456789012323').should.equal('Maestro');
  })
  it('has a prefix of 5893 and has a length of 19', function () {
    detectNetwork('5893234567890123232').should.equal('Maestro');
  })
  it('has a prefix of 6304 and has a length of 16', function () {
    detectNetwork('6304234567890123').should.equal('Maestro');
  })
  it('has a prefix of 6304 and has a length of 17', function () {
    detectNetwork('63042345678901232').should.equal('Maestro');
  })
  it('has a prefix of 6304 and has a length of 18', function () {
    detectNetwork('630423456789012323').should.equal('Maestro');
  })
  it('has a prefix of 6304 and has a length of 19', function () {
    detectNetwork('6304234567890123234').should.equal('Maestro');
  })
  it('has a prefix of 6759 and has a length of 16', function () {
    detectNetwork('6759234567890123').should.equal('Maestro');
  })
  it('has a prefix of 6759 and has a length of 17', function () {
    detectNetwork('67592345678901232').should.equal('Maestro');
  })
  it('has a prefix of 6759 and has a length of 18', function () {
    detectNetwork('675923456789012323').should.equal('Maestro');
  })
  it('has a prefix of 6759 and has a length of 19', function () {
    detectNetwork('6759234567890123234').should.equal('Maestro');
  })
  it('has a prefix of 6761 and has a length of 16', function () {
    detectNetwork('6761234567890123').should.equal('Maestro');
  })
  it('has a prefix of 6761 and has a length of 17', function () {
    detectNetwork('67612345678901232').should.equal('Maestro');
  })
  it('has a prefix of 6761 and has a length of 18', function () {
    detectNetwork('676123456789012323').should.equal('Maestro');
  })
  it('has a prefix of 6761 and has a length of 19', function () {
    detectNetwork('6761234567890123234').should.equal('Maestro');
  })
  it('has a prefix of 6762 and has a length of 16', function () {
    detectNetwork('6762234567890123').should.equal('Maestro');
  })
  it('has a prefix of 6762 and has a length of 17', function () {
    detectNetwork('67622345678901232').should.equal('Maestro');
  })
  it('has a prefix of 6762 and has a length of 18', function () {
    detectNetwork('676223456789012323').should.equal('Maestro');
  })
  it('has a prefix of 6762 and has a length of 19', function () {
    detectNetwork('6762234567890123234').should.equal('Maestro');
  })
  it('has a prefix of 6763 and has a length of 16', function () {
    detectNetwork('6763234567890123').should.equal('Maestro');
  })
  it('has a prefix of 6763 and has a length of 17', function () {
    detectNetwork('67632345678901232').should.equal('Maestro');
  })
  it('has a prefix of 6763 and has a length of 18', function () {
    detectNetwork('676323456789012323').should.equal('Maestro');
  })
  it('has a prefix of 6763 and has a length of 19', function () {
    detectNetwork('6763234567890123234').should.equal('Maestro');
  });
});

describe('should support China UnionPay', function(){
  var should = chai.should();
  var prefix = '62123456';
  var suffix = '1234';
  for (var i = 1000; i < 2000; i++) {
    var number = prefix + parseInt(i) + suffix;
    it('has a prefix of 62 and has a length of 16', function () {
      detectNetwork(number).should.equal('China UnionPay');
    })
  }
  
  var prefix="88123456";
  var suffix = "1234";
  for (var i = 1000; i < 3000; i++) {
    var number = prefix + parseInt(i) + suffix;
    it('has a prefix of 88 and has a length of 16', function () {
      detectNetwork(number).should.equal('China UnionPay');
    });
  }
});

describe('should support Switch', function(){
    var should = chai.should();
    it("should return 'Not available'", function() {
      detectNetwork('39827492049').should.equal('Not available')
  })
})
