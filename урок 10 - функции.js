/* let num = 20;
function ShowFirstMessage(text) {
    alert(text);
}

ShowFirstMessage("Hello world");
    console.log(num); */
/* 
   let calc = function(a,b) {
        return (a + b);
   }
 */

   let calc = (a,b) => a+b
   console.log(calc(3,4));
   console.log(calc(8,7));

   function RetVar() {
        let num = 50;
        return num;
   }
   let ohShitNum = RetVar();
   console.log(ohShitNum);

   let str = "test";
   console.log(str.length);

   console.log(str.toUpperCase());
   console.log(str.toLowerCase());

   let twelve = "12.2px";
/*    console.log(Math.round(twelve)); */

console.log(parseInt (twelve));
console.log(parseFloat (twelve));



function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log ("Я прошёл 3 урок")
}

learnJS('Javascript', done);