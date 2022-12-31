// Q1





function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


// Q2.
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();


//Q3.
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

  //Q4.
  function lenfun(width){ 
    function brfun(length){ 
      return width * length; 
      
    } 
    return brfun(20); 
  } 
  console.log(lenfun(10)); 

  //Q5.
  function counter(){ 
    var counter=0; 
    
    function increaseNumber(){ 
      return counter+= 1 
    } 
    return increaseNumber(); 
  } 
  
  var counter = counter(); 
  
  alert(counter); 
   alert(counter); 

   //Q6.
   var a = 12; 
   (function () { 
     alert(a); 
   })(); 

   //Q7.
   var a = 10; 
var x = (function () {
  var a = 12; 
  return function () { 
    alert(a); 
  }; 
})(); 
x(); 

//Q8.
var globalVar = "xyz"; 

(function outerFunc(outerArg) { 
    var outerVar = 'a'; 
    
    (function innerFunc(innerArg) { 
    var innerVar = 'b'; 
    
    console.log( 
        "outerArg = " + outerArg + "/n" + 
        "innerArg = " + innerArg + "\n" + 
        "outerVar = " + outerVar + "\n" + 
        "innerVar = " + innerVar + "\n" + 
        "globalVar = " + globalVar); 
    
    })(456); 

})(123); 


   

