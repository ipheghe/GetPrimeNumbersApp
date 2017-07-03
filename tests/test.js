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
        
        it("should return [2,3,5,7] as prime numbers from 0 to 2", function() {
            assert.deepEqual(myApp.getPrimes(2), [2]);
        }); 
                
        it("should return [2,3,5,7] as prime numbers from 0 to 3", function() {
            assert.deepEqual(myApp.getPrimes(3), [2,3]);
        }); 
        
        it("should return [2,3,5,7] as prime numbers from 0 to 10", function() {
            assert.deepEqual(myApp.getPrimes(10), [2,3,5,7]);
        }); 
        
        it("should return [2,3,5,7] as prime numbers from 0 to 1", function() {
            assert.deepEqual(myApp.getPrimes(1), 'No Prime number available');
        });  
    })
    
    describe("handle an invalid input", function() {
        it("should return undefined as getPrimes for 'demo'", function() {
            assert.equal(myApp.getPrimes('demo'), 'undefined');
        });  
        
        it("should return undefined as getPrimes for -1", function() {
            assert.equal(myApp.getPrimes(-1), 'No negative Number allowed');
        });    
            
    })
    
    
})
    
    