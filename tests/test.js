const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("primeArray", function() {
    
        
    describe("handle a valid input", function() {
        it("should return [2,3,5,7,11] as prime numbers from 0 to 11", function() {
            assert.deepEqual(myApp.getPrimes(11), [2,3,5,7,11]);
        });    
        
        it("should return [2,3,5,7] as prime numbers from 0 to 9", function() {
            assert.deepEqual(myApp.getPrimes(9), [2,3,5,7]);
        });  
    })
    
    describe("handle an invalid input", function() {
        it("should return undefined as getPrimes for 'demo'", function() {
            assert.equal(myApp.getPrimes('demo'), 'undefined');
        });    
            
    })
    
    
})
    
    