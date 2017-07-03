'use strict';

module.exports = {
    /* Find the prime numbers from a group of numbers */
    getPrimes: (n) => {
        
        var primeArray = [];
        
        if (typeof(n) !== 'number') {
            
            return 'undefined';
            
        }
        
        else if (n < 0) {
        
            return 'No negative Number allowed';
            
        }  
        
        else if (n < 2) {
        
            return 'No Prime number available';
            
        }
               
        else if (n % 1 !== 0) {
        
            return 'Decimal numbers not allowed';
            
        }
        
       else{
    
            if (n === 2) {

                primeArray = [2];

            }
           
            else if (n === 3) {

                primeArray = [2,3];

            }
           
            else {

                primeArray = [2,3,5];
                
            }

            for(var i = 2; i <= n; i++){

                if(i % 2 !== 0 && Math.sqrt(i) % 1 !== 0 && i % 3 !== 0 && i % 5 !== 0 ) {

                 primeArray.push(i); 
                    
                }

            }
        
       }
    
    return primeArray;   
                 
    }
    
}