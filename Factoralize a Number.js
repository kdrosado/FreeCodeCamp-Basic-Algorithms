/*
Free Code Camp - Basic Algorithms
Factoralize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arithmetic Operators
*/

function factorialize(num) {

  if (num === 0 || num === 1) // return 1, if num is 0 or 1
  
    return 1;
    
  for (var i = num - 1; i >= 1; i--) { // start at 4, then decrement by 1
  
    num *= i; // store value of num at each iteration
    
  }
  
  return num;
  
}
 

// test cases
factorialize(0); 
factorialize(5);
factorialize(10);
factorialize(20);
