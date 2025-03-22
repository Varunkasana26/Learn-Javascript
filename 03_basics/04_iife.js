//Immediately Invoked function Expressions(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})(); //semicolon to end the invoke function
      // try to run without semicolon

( function aurcode()  {
    console.log(`DB CONNECTED TWO`);
})();//  ; end this particular code

((name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})('varun');