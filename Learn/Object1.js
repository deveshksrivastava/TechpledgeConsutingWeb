https://github.com/Aakashdeveloper/Aug_JavaScript_Mrng

var moviename = "Blood Diamond"
var movierating = 5
var movielang = "English"

var moviename1="Jab We Met"
var movierating1 = 5
var movielang1 = "Hindi"

///////literal 
var movies = {
    name:'Avenger',
    rating:4.5,
    lang:'English'
}

typeof(movies)
"object"

var movies = {
    name:'Avenger',
    rating:4.5,
    lang:'English'
}
movies.name //"Avenger"
movies.rating //4.5
movies.lang //"English"
movies.genre="Action" //"Action"
movies //{name: "Avenger", rating: 4.5, lang: "English", genre: "Action"}
movies.rating=4.7 //4.7
movies //{name: "Avenger", rating: 4.7, lang: "English", genre: "Action"}
delete movies.lang //true
movies //{name: "Avenger", rating: 4.7, genre: "Action"}
movies['name'] //"Avenger"
movies['rating'] //4.7
movies['rating']=4.8 //4.8
movies //{name: "Avenger", rating: 4.8, genre: "Action"}
movies['lang']="English" //"English"
movies //{name: "Avenger", rating: 4.8, genre: "Action", lang: "English"}

var movies = [
    {
        name:'Avenger',
        rating:4.5,
        lang:'English'
    },
    {
        name:'Jab We Met',
        rating:4.6,
        lang:'Hindi'
    },
    {
        name:'Blood Diamond',
        rating:4,
        lang:'English'
    }
]


// JSON > JavaScript Object Notation
// Array of object 

movies[1].name
"Jab We Met"

var a = {1:"a"}
undefined
a.1
VM571:1 Uncaught SyntaxError: Unexpected number
a[1]



var calc = {
    sum:function(a,b){return a+b},
    sub:(a,b) => {return a-b}
}

calc.sum(1,2)
3
calc.sum(2,4)
6
calc.sub(4,2)
2

var dbquery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => { return `insert into ${table} name,city Values(${data.name},${data.city})`}
}

dbquery.find('student')
"Select * from student"
dbquery.insert('student',{name:'John',city:'Delhi'})
"insert into student name,city Values(John,Delhi)"


 //JSON object, IT HAVE QUATE AT KEY VALUE 
 myJson = { "name": "John", "age": 30, "car": null };     
 //Object, HAVE QUOTE ONLY AT VALUE
 var obj = { name: "John", age: 30, city: "New York" }; 
 //Array - defined as []
 var arr = ["John",30, "New York" ];       
 
 
 //Object or Array conversion to string
 var myJSON = JSON.stringify(obj);
 var myJSON = JSON.stringify(arr);
 
 var myJson = JSON.stringify(obj);
 console.log(myJSON) //["John",30,"New York"]
 console.log(typeof(myJSON)) //myJSON now is string so cant loop it
 
 var arr = JSON.stringify(myJSON)  //string to object