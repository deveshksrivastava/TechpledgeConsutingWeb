// Object query 

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

// var test = obj.getFullname;

console.log(obj.getFullname);

////////////////use of the object
var fullname = "DMS"

var obj = {
  fullname : "devesh kr sri",
  getfullname: function(){
     return this.fullname;
  },  
  
  getUser: function(name){
      if(name == "devesh")
        return "got my fullname";
      else{
       return "no fullname";
      }
  }
}

console.log(obj.fullname)
console.log(obj.getfullname())

var test = obj.getfullname()
console.log(test)

var name = obj.getUser("devesh");
console.log(name)
