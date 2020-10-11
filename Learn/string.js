var city = "AmsteRDam"

city.toUpperCase() //"AMSTERDAM"
city.toLowerCase() //"amsterdam"

var city = "lOndON"; //"London"

var city = "London" 
city[0] //"L"
city[1] //"o"
city.length //6
city[5] //"n"

var name = "  Aakash   "
name.length //11
name.trim() //"Aakash"
var output = name.trim() //"Aakash"

var a = "John"
var b = "john"
a==b //false
var c ="Johm"
a==c //false
var c ="John"
a==c //true
a.toLowerCase() == b.toLowerCase() //true


var a = "John"
a.charAt(0) //"J"
a.charAt(1) //"o"
a.charAt(0).toLowerCase() //"j"

var color = "orange";
color.slice(1) //"range"
color.slice(2) //"ange"
color.slice(3) //"nge"
color.slice(2,5) //"ang"
color.slice(3,10) //"nge"


var city = "lOndON";
city.charAt(0) //"l"
city.charAt(0).toUpperCase() //"L"
city.slice(1)//"OndON"
city.slice(1).toLowerCase()//"ondon"
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() //"London"

var a = " I am learning Javascript"
a.replace('Javascript','JS') //" I am learning JS"
var a = "John Snow"
a.replace(' ','-') //"John-Snow"
var a = "Javascript I am learning Javascript"
a.replace('Javascript','JS') //"JS I am learning Javascript"
a.replace(/Javascript/g,'JS') //"JS I am learning JS"

var name = "  Aakash . "
name.replace(/ /g,'') //"Aakash."

var a = 89789789
a.toString() //"89789789"
var a = "101"
Number(a) //101


////Maths
Math.random() //0.8017656442173675
Math.random()//0.8604976786145455
Math.random() //0.6936394724093871
Math.random()*100 //54.541336301880335
Math.random()*1000 //734.861141155958
Math.random()*10000 //8242.204535217017
Math.random()*100000 //62283.28191665804

Math.floor(10.1) //10
Math.floor(10.4) //10
Math.floor(10.6) //10
Math.floor(10.9) //10

Math.ceil(10.1) //11
Math.ceil(10.4) //11
Math.ceil(10.9) //11

Math.round(10.2) //10
Math.round(10.4) //10
Math.round(10.5) //11
Math.round(10.9) //11

Math.PI //3.141592653589793
Math.sin(1) //0.8414709848078965
Math.cos(1) //0.5403023058681398
Math.tan(1) //1.5574077246549023
Math.E //2.718281828459045
Math.log(0) //-Infinity
Math.log(1) //0


Math.PI //3.141592653589793
Math.PI.toFixed(2) //"3.14"
Math.PI.toFixed(3) //"3.142"



Math.floor(Math.random()*(max-min))+min
Math.floor(Math.random()*(20-1))+1 //11
Math.floor(Math.random()*(20-1))+1 //4
Math.floor(Math.random()*(20-1))+1 //12

////Storage
localstorage
//Persistent Storage
// > Save wrt to browser

// local storage
localStorage.setItem('tokenltt','78678bjhb767b87')
localStorage.getItem('tokenltt') //"78678bjhb767b87"
localStorage.removeItem('tokenltt') 

//Session Storage
sessionStorage.setItem("kltoken",56765765) 
sessionStorage.getItem('kltoken') //"56765765"
sessionStorage.removeItem('kltoken') 

// save wrt to tab
// remove automatcially as you close the tab

document.cookie//// "_ga=GA1.2.777733879.1601303280; _gid=GA1.2.445056163.1601303280; _gat_gtag_UA_131256843_1=1"
document.cookie="location=12" //"location=12"
// cookies save wrt to the website
// when you reopen the webpage you will still see your saved cookies
document.cookie="location=12;expires=Fri, 2 Oct 2020 01:00:00 UTC;"