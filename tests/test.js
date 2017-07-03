const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("primeArray", function() {
    
        
    describe("handle a valid input", function() {
        it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 77, 79, 83, 89, 91, 97] as prime numbers from 0 to 100", function() {
            assert.deepEqual(myApp.getPrimes(100), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 77, 79, 83, 89, 91, 97]);
        });    
        
        it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67] as prime numbers from 0 to 67", function() {
            assert.deepEqual(myApp.getPrimes(67), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]);
        }); 
        
        it("should return [2,3,5,7,11] as prime numbers from 0 to 11", function() {
            assert.deepEqual(myApp.getPrimes(11), [2,3,5,7,11]);
        });    
        
        it("should return [2,3,5,7] as prime numbers from 0 to 9", function() {
            assert.deepEqual(myApp.getPrimes(9), [2,3,5,7]);
        });  
        
        it("should return [2] as prime numbers from 0 to 2", function() {
            assert.deepEqual(myApp.getPrimes(2), [2]);
        }); 
                
        it("should return [2,3] as prime numbers from 0 to 3", function() {
            assert.deepEqual(myApp.getPrimes(3), [2,3]);
        }); 
        
        it("should return [2,3,5,7] as prime numbers from 0 to 10", function() {
            assert.deepEqual(myApp.getPrimes(10), [2,3,5,7]);
        }); 
        
        it("should return 'No Prime number available' as prime numbers from 0 to 1", function() {
            assert.deepEqual(myApp.getPrimes(1), 'No Prime number available');
        });  
        
        it("should return [2] as getPrimes for 2.4", function() {
            assert.deepEqual(myApp.getPrimes(2.4), [2]);
        });   
                
        it("should return [2,3,5]  as getPrimes for 4.5", function() {
            assert.deepEqual(myApp.getPrimes(4.5), [2,3,5]);
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
    
    