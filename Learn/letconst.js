> var a = 10
> a
10
> var a = 20
> a
20
> a = 300
300
> a
300
> 


var a = 10
var a;
a=10;

// var > we are able to redecalre and reassign
// let > we cannot redecalre but can reassign
// const > we cannot redecalre but nor reassign


> let b = 20
> b //20
> let b = 21 //// Uncaught SyntaxError: Identifier 'b' has already been declared
> b=21 //21
> const c = 10
> const c = 11
// Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
// Uncaught TypeError: Assignment to constant variable.