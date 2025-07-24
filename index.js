//document.getElementsByTagName('h1')[0].style.fontSize="120px"  to change h tag in console  dom 
//document.getElementsByTagName('h1')[0].style.background="yellow"



// 1.different types of printing in java script 

  //console.log("hello every one");
  //alert("notification");
  //console.warn(" this is a wraning");
  // console.error("this s a error");
  //document.write ("hi usuf how are u");


//2 .java script cosole api  API=application programming interface 

  //console.log("hello every one",45335);
  //alert("notification");
  //console.warn(" this is a wraning");
   //console.error("this s a error");
  //document.write ("hii usuf how are u");
  

  // 3. java script varaibles

  // java script is like a container to store a different type of variables
  //1.text or sting 2.numerical values 3.boolean values 
  // here  using "var" we can redeclare and also reassinind the  values but using "let" =we can only reassing the value not redeclare  "const " using cont we can't do both

   //var a= 500
   //var a =700
   //console.log(a);//700
   //console.log(a);//700
    //let b= 500
    //let b =700
    //b=700//without giving let now we get 700

   //console.log(b);//we get error becaues we cant re ceclare it
   //console.log(b);//700
   //console.log(a+b);//1400

   //const c =600
   //console.log(c);//600 in const we cant  reassign or re declare 
   
    /*  4.  comments 
     we we can give comment line to the more than 1 line by applong the this */


     // 5.different types of data types 
     // strings
    //var d= "hello every one how are u are u there for me "
    //console.log(d);// shows on console
    //document.write(d);// shows on web page 

    //boolean
   // var e = true
   // var f = false
    //console.log(e,f);// true false

    // number 
    //var n=1
    //var m=3
    //console.log(n,m)

    // object  = object which store the data in key:values 
     //var object ={1:"yousuf",
      //2:"harsha",
      //3:"mama",
      //4:"farook"
     //}
     //console.log(object)//{1: 'yousuf', 2: 'harsha', 3: 'mama', 4: 'farook'}

     //  undefined varaiables
      //var abc ;
      //console.log(abc)//undefined

      //null varaiables
      //var aaa= null
      //console.log(aaa)//null
      /*  data types are classified into two typws 
      primitive  data type = numbers ,string,boolean,null,defined,sysmbols.
      non primitive data type= arrays ,object
       array in java script in array we can store diffrent type of data types */
     //    var array=[1,"hello",null,undefined,true,"oxygen"]
     //    console.log(array)//(6) [1, 'hello', null, undefined, true, 'oxygen']
     //    console.log(array[0])// 1  give the o index value 
         // indexing
         // a b c d e f
         // o 1 2 3 4 5 
      //   console.log(array[2,5])//oxygen index number 5
         // console.log(array[2:5])//Uncaught SyntaxError: Unexpected token ':' (at index.js:85:30)   this i s not python gives error here

  // 6. operators
  // arithmetic operations
  /*z=50
  y=25
  console.log(a+b)//75
  console.log(a-b)//25
  console.log(a*b)//1250
  console.log(a/b)//2
  console.log(a%b)//0 

  //comparison operators it give true or false 
   g= 70
   h= 60
   console.log(g==h)//false
   console.log(g>=h)//true
   console.log(g<=h)//false
   console.log(g > h)//true
   console.log(g <h)//false

  // assignment operators 
   var c= g
   //c+=1//c=c+1//
   //c-=1
   //c*=1
   c/=5//14
   console.log(c)


   // bit wise operators 
    console.log(true & true)//1
    console.log(true & false)//0
    console.log(false & true)//0
    console.log(false & false)//0


  // logical operators
    //and
    console.log(true && true)// true
    console.log(true && false)//false
    console.log(false && true)//false
    console.log(false &&false)//false

    // or
    console.log(true || true)// true
    console.log(true || false)// true
    console.log(false || true)// true
    console.log(false ||false)//false

    // not
    console.log(true)// false
    console.log(false)// true */

  
  // 7 . function


    /* function  sum(a,b,c){
      return (a+b+c) 
  }
 c=sum(3,4,6)
 d=sum(3,6,5)
 e=sum(3,49,5)
 console.log(c,d,e) //or  console.log(c=sum(3,4,5)) //13 14 57 

  function rough(u,v){
      z=u+v
     
      return z
    }
    g= rough(6,9)
    console.log(g) */


// 8.condition statements
    /*var age =18
   if (age > 18){
   console.log("yes they are major",age)
   }
   else if (age >=18){
    console.log("yes same age man ")
   }
   else{
    console.log("not major bro")
   }   */


 // 9.loops  for while do while
//var array1 = [111, 2, 63, 49, 5, 6, 708, 9]

/*console.log(array1)//(8) [111, 2, 63, 49, 5, 6, 708, 9]
for (var a = 0; a < array1.length; a++) {
  console.log(array1[a])// in vertical 
} */
//array1.forEach(function(num) {
  //console.log(num);
//}) 

/*//while loop
var i = 0
while (i < array1.length) {
  console.log(array1[i])
  i++
}  */

//do while loop
/* var i = 12

do {
  console.log(array1[i])
  i++
}
while (i < array1.length) ; */

// 10. break and continue
//break
/*for (var i = 0; i < array1.length; i++) {
  if (i == 4) {
    break
  }
  console.log(array1[i])
} */

//continue
/*for (var i = 0; i < array1.length; i++) {
  if (i == 4) {
    continue
  }
  console.log(array1[i])
} */

// 11. switch case
/* var day = 5
switch (day) {
  case 0:
    console.log("sunday")
    break
  case 1:
    console.log("monday")
    break
  case 2:
    console.log("tuesday")
    break
  case 3:
    console.log("wednesday")
    break
  case 4:
    console.log("thursday")
    break
  case 5:
    console.log("friday")
    break
  case 6:
    console.log("saturday")
    break
} */    

// 12. array methods
//push() method
/*var array1 = [1, 2, 3, 4, 5]
array1.push(6)
console.log(array1)//(6) [1, 2, 3, 4, 5, 6]
//concat() method
var array1 = [1, 2, 3, 4, 5]
var array2 = [6, 7, 8, 9, 10]
var array3 = array1.concat(array2)
console.log(array3)//(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//join() method
var array1 = [1, 2, 3, 4, 5]
var array2 = [6, 7, 8, 9, 10]
var array3 = array1.join(" ")
console.log(array3)//1 2 3 4 5
//pop() method
var array1 = [1, 2, 3, 4, 5]
array1.pop()
console.log(array1)//(4) [1, 2, 3, 4]
//shift() method
var array1 = [1, 2, 3, 4, 5]
array1.shift()
console.log(array1)//(4) [2, 3, 4, 5]
//unshift() method
var array1 = [1, 2, 3, 4, 5]
array1.unshift(0)
console.log(array1)//(5) [0, 1, 2, 3, 4, 5]
//splice() method
var array1 = [1, 2, 3, 4, 5]
array1.splice(2,1)
console.log(array1)//(4) [1, 2, 4, 5] 
var array1 = [1, 2, 3, 4, 5]
array1.sort()  */


// string methods

/*let myString ="hello every one how are u hello"
console.log(myString.length)// 35
console.log(myString.indexOf("hello"))//0
console.log(myString.lastIndexOf("hello"))//30
console.log(myString.slice(1,4))//ell
let f=myString.replace("hello","good morning")//good morning every one how are u hello
console.log(f)//hello every one how are u hello */

// Dom manipulation explaination of dom document.getElementById("click").click()

// document object model is used to access the html elements in the web page from java script console
/*let element=document.getElementById("click")
console.log(element)//<button id="click">click me</button>

let eleclass =document.getElementsByClassName("container")
console.log(eleclass)//HTMLCollection(1) [div.container#container]
eleclass[1].style.background="blue"  */



    
  
    
 


      









   