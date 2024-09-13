//document.write('<h1> Multiplication </h1>');
//document.write(`${userInput} * 1= ${userInput *1} <br>
//${userInput} * 2 = ${userInput * 2}
//${userInput} * 3 = ${userInput * 3}
//${userInput} * 4 = ${userInput * 4}
//${userInput} * 5 = ${userInput * 5}
//${userInput} * 6 = ${userInput * 6}
//${userInput} * 7 = ${userInput * 7}
//${userInput} * 8 = ${userInput * 8}
//${userInput} * 9 = ${userInput * 9}
//${userInput} * 10 = ${userInput * 10} 
 //`);


  // Q No.....1
var city = prompt('Enter where do you live');
if (city === 'karachi'){
alert ('Welcome to city of lights.');
}
else {
    alert('welcome you live in' + city);
}

  // Q No....2 //

var age = prompt('Enter your age');
if (age >=18){
    console.log('You are eligible for CNIC');
}
else{
    console.log('You are not eligible for CNIC');
}

  //Q  No  3...//

var gender = prompt('Enter your gender ');
var massage ;
if (gender=== 'male');{
  massage = 'Good Morning Sir.';
 }

  if (gender === 'female');{
    massage = 'Good Morning Maam.';
 }
  alert(massage);


  //  Q  No...4  //
  var color = prompt('enter signal color');

    if (color === 'red' ){
    alert ('Must Stop');
    }
   
    if (color === 'yellow' );{
        alert('Ready to Move');   
    }

    if (color === 'green');{
    alert ('Move Now');
  }


// Q No....4 //

var fule = prompt('remaining fule');
  if (fule <= 0.25){
    alert('please refiil fule in car')
  }

//   Q No...6   //

var percentage =prompt('Enter your Percentage');
var grade ;
var remarks ;
if (percentage <= 80){
  grade ='A-one';
  remarks ='Excelent';
}


  if (percentage <= 70){
  grade ='A';
  remarks = 'Good';
  }

  if (percentage <= 60){
    grade = 'B';
    remarks ='need improve';
  }
 alert(grade + remarks);

  var remarks='you needs to improve';

  document.write('<h1>MARK SHEET </h1>');
  document.write('<b>Total Marks :300</b><br><br>');
  document.write('<b>Marks Obtained: 219</b><br><br>');
  document.write('<b>Percentage: 73%</b><br><br>');
  document.write('<b>Grade :B</b><br><br>');
  document.write('<b>Remarks: </b>'+ remarks +' <br><br>');

  // Q No...9 //
  var num =10;
  if (num % 2=== 0){
    console.log(num ,'is even');
  } else {
    console.log(num ,'is odd');
  }

  //  Q No... 10//
  var temprature= prompt('Enter temprature');
  if (temprature <= 40){
    alert('Its too hot outside');
  }

   if (temprature  <= 30){
    alert('The weather Today is Normal');
   }

  if (temprature <= 20){
    alert('Today Weather is Cool');

  }

 if(temprature <= 10){
  alert('Today Weather is so cool');
 }

  //Q no....5 //

  var a = 4;
  if(++a ===5) {
    alert('givin condition for variable a is true');
  }

  var b =82;
  if(b++ === 83) {
    alert('givin condition for variable b is true');
  }

  var c =12 ;
  if (c++ === 13) {
    alert('givin condition for variable c is true');
  }



 // question no....11  //

  var  firstNumber =  parseFloat(prompt('Enter the first number'));
  var secondNumber =  parseFloat(prompt('Enter the second number'));
  var operation  = prompt('Enter the operation(+ ,- ,* ,/ ,%):');

  // calculate result based on operation //
  var result ;
  if (operation ==='+'){
    result = num1 + num2 ;
  } else if(operation ==='-'){
      result = num1 - num2 ;

  } else if(operation ==='*'){
    result = num1  * num2 ;

  } else if(operation ==='%'){
    result = num1 % num2 ;

  } else {
     result = 'invalid operation';
  } 
   alert('The result is:'+ result);


