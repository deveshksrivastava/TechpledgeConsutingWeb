String
number
boolean

string = "fvfdvfv" '43rf43g' '44232' "443" "true" 'false' '5/5/2020'
number = 534  545446456 454.465  .4654 
boolean = true/false
null
undefined

////////////////////Es5/////////////////////////////////

var a = "hi"
var b = 10
var c = true
//////////////////////////////

var a = 10
typeof(a)
"number"
var b = "hi"
typeof(b)
"string"
var c = true
typeof(b)
"string"
typeof(c)
"boolean"
var d = "10"
typeof(d)
"string"

var a = 1
undefined
var b = 2
undefined
a+b
3(addition)
a-b
-1
a*b
2
a/b
0.5
4%2
0
4%3
1

3%4
3
2%4
2



var a = "hi "
undefined
var b = "JavaScript"
undefined
a+b(concat)
"hi JavaScript"
a-b
NaN
a*b
NaN
a/b
NaN > not a number
1+"hi"
"1hi"
"hi"+1
"hi1"

string+string = string
string+number = string
number+string = string
number+number= number

10+"20"+30
"102030"

"10"+20+30
"1020"+30
"102030"

10+20+"30"
30+"30"
"3030"


10+"20"+30-1
'102030'-1 >102029
'a102030'-1 >nan 
102029
"10"+20+30-1
102029
10+20+"30"-1
3029





'q'-1
NaN
'2'-1
1
'2'+1
"21"
'8'*2
16
'a'*8
NaN


var a = true
var b = true

var a = true
var b = true
undefined
a+b
2
a+10
11
a+false
1

'a'+true
"atrue"
'true'+'true'
"truetrue"
true+true
2

var a = '1'
undefined
var b = '2'
undefined
a+b
"12"
parseInt(a)+parseInt(b)
3
Number(a)+Number(b)
3
var c = "10.44"
undefined
var d = "11.33"
undefined
c+d
"10.4411.33"
parseInt(c)+parseInt(d)
21
parseFloat(c)+parseFloat(d)
21.77
Number(c)+Number(d)
21.77
parseFloat(a)
1

////////////////string litral
var name = " Avengers";
var rating=4.5
var type="action";
var ind="Hollywood";

//es5
var data = "The "+name+" is an "+type+" movie with rating of "+rating+" and ind is "+ind+"."
"The Avengers is an action movie with rating of 4.5 and ind is Hollywood."

//es6
var data = `The${name} is an ${type} movie with rating of ${rating} and ind is ${ind}.`
"The Avengers is an action movie with rating of 4.5 and ind is Hollywood."

//////////////condtion

// = assignment
// == we are comparing data of variable
// === we are comparing data and datatype

var a = 10
var b = "10"
a==b //true
a===b //false

//case senstive
var name = "john"
var name1="John"

name == name1 //false
name === name1 //false

///////////////if else
if(condition){
    //do something
}else{
    //do something
}

var a = 899878
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
// Number 899878 is even

var name = "Bhumika"
if(name=="John"){
    console.log("You are admin")   
}else if(name=="Bhumika"){
    console.log("You are Super Admin")
}else if(name=="Aakash"){
    console.log("You are user")
}else{
    console.log("I dont know you")
}
// You are Super Admin


// var role = "Admin"
// var name = "Keev"
// if(role=="Admin"){
//     if(name=="John"){
//         console.log("You are System admin");
//     }else if(name=="Aakash"){
//         console.log("You are Aplication Admin");
//     }else{
//         console.log("You are Admin");
//     }
// }else if(role=="User"){
//     if(name=="John"){
//         console.log("You are System user");
//     }else if(name=="Aakash"){
//         console.log("You are Super user");
//     }else{
//         console.log("You are user");
//     }
// }else{
//     console.log("I dont know you")
// }



var a = 1
if(true){
    console.log("Hi")
}else{
    console.log("Bie")
}

// truthy => any number except 0 (+number, -ve number), true, string
// falsy => 0 ,false, null, undefined

/////
// ternary operator (single line if else condition)
//////
var a =10
a>10? "Hii":"Bie" //"Bie"
var a =10
a==10? "Hii":"Bie" //"Hii"

var a =10
a==10? a+1:a-1 //11
var a =9
a==10? a+1:a-1 //8

//Switch

for multiple condition multiple output we will use "if else"
for one condition mutiple output we will use "switch"
for only one condition use "ternary" 

var name = "John"

switch(name){
    case 'Aakash':
        console.log("You are user");
        break;
    case 'John':
        console.log('You are admin');
        break;
    case 'Eva':
        console.log('You are Super admin');
        break;
    default:
        console.log('i dont know you')
}

'You are admin'


var a = 10
switch(a%2){
    case 0:
        console.log('Number is even');
        break;
    case 1:
        console.log('Number is odd');
        break;
    default:
        console.log('I Dont know')
}