// {/* <p id="name"></p>

// // read value
// document.getElementById("name").value //used for text, select and textarea
// document.getElementById("name").innerHTML //html tag
// document.getElementById("name").innerText  //normal text

// //add value 
// document.getElementById("name").value = "rohit"

// // update value
// document.getElementById("name").value = "rhotttnm"

// // delete value
// document.getElementById("name").value = "" */}


// const name = "devesh"
// var age=31		
// if(age>=30){
//     let age = 30
//     let name  = "jyoti"
//     console.log(age);
// }
// console.log(age);


// //CALLING CALL APPLU AND BIND


// var emp1  = {fname:"devesh", lname:"srivasta"}
// var emp2  = {fname:"jyoti", lname:"bari"}

// function invite(g1, g2) {
//     console.log(g1 + " " + this.fname + " " + this.lname+  ', '+ g2);
// }

// // Call: The call() method invokes a function with a given object this value and arguments provided one by one// invite.call(emp1,"hello", "how are you")
// // invite.call(emp1,"hello", "how are you")
// // invite.call(emp2,"hello", "how are you")

// // Apply: Invokes the function and allows you to pass in arguments as an array
// // invite.apply(emp1,["hello", "how are you"])
// // invite.apply(emp2,["hello", "how are you"])

// // Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments.

// // bind: returns a new function, allowing you to pass in an array and any number of arguments
// // var inviteemp1 = invite.bind(emp1)
// // var inviteemp2 = invite.bind(emp2)

// // inviteemp1("hello", "how are you?")
// // inviteemp2("hello", "how are you?")

// // Parsing: Converting a string to a native object
// // var text = "this is not good"
// // JSON.parse(text)

// // // convert native object to string accorss network
// // JSON.stringify(object)


// var arr = ["Apple", "Orange", "Apple", "Mango"];
// arr.push("Sabe")
// console.log(arr)


// console.log(mergeSort([2, 3, 3, 4, 6, 7, 12]));

// // function
// // method
// // arrow function
// // IFFI
// // Generator
// //////////////////////
// var a = 10
// var b = 20
// a+b

// //////function///////
// function add(a,b){
//     return a+b
// }

// add(1,2)
// 3
// add(5,7)
// 12
// add('a','b')
// "ab"

// function isEven(userInput){
//     var out;
//     if(userInput%2==0){
//         out = `Number ${userInput} is even`
//     }else{
//         out = `Number ${userInput} is odd`
//     }
//     return out
// }

// isEven(4)
// "Number 4 is even"
// isEven(99)
// "Number 99 is odd"
// isEven('hh')
// "Number hh is odd"

// function add(a,b){
//     return a,b
// }

// add(1,2) //2
// add(6,9) //9
// add(9) //
// add(9,8,0) //8


// /////////////
// method>>> when function is assign to variable
// ////////

// var add = function(a,b){
//     return a+b
// }

// add(1,2)

// //////////
// Es6 > arrow
// /////////////////
// var add = (a,b) => {return a+b}
// add(1,2)

// /*function greet(){
//     console.log("Hi to all")
// }
// greet()
// */
// ////IFFI////

// (function(){
//     console.log("Hi To IFFI")
// }())

// ((){}())
// ////////
// Generator
// ////////
// function looping(userInput){
//     for(i=0;i<userInput;i++){
//         console.log(i)
//     }
// }
// looping(4)
// 0
// 1
// 2
// 3

// function * looping(userInput){
//     for(i=0;i<userInput;i++){
//        yield i
//     }
// }
// undefined
// looping(4)
// looping {<suspended>}
// var data = looping(4)
// undefined
// data.next()
// {value: 0, done: false}
// data.next()
// {value: 1, done: false}
// data.next()
// {value: 2, done: false}
// data.next()
// {value: 3, done: false}
// data.next()
// {value: undefined, done: true}