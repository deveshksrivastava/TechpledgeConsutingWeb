var a = 10
function add(){
    var b = 20
    return a+b
}
console.log("Add>>>",add());
console.log("A>>>>",a)
// console.log("B>>>>",b) //ReferenceError: b is not defined

var a = 10
for(i=0;i<10;i++){
    let b = 20 //fixed with let
    console.log(a+b+i)
}
console.log("A>>>>",a)
// console.log("B>>>>",b) //ReferenceError: b is not defined