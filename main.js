// console.log("sanity check");

// ------------ R E Q U I R E M E N T 1 ------------

// prompt how many students learning JS
// need to turn numStudents into an integer
var numStudents = parseInt(prompt("How many students are learning JavaScript?"));

// create empty array for totalStudents
// collect studentName, studentPhone, studentCity
var totalStudents = [];
  for(i = 0; i < numStudents; i++){
    var studentName = prompt("What is the student's name? ");
    var studentPhoneNo = prompt("What is the student's phone number? (xxx-xxx-xxxx)");

// while the phone number doesn't comply to format, prompt re-enter
while (studentPhoneNo.length != 12 || studentPhoneNo.charAt(3) != "-" || studentPhoneNo.charAt(7) != "-")  {
  alert(" Your phone number is not valid, please re-enter your number using the format xxx-xxx-xxxx ");
  var studentPhoneNo = prompt("What is the student's phone number? (xxx-xxx-xxxx");
}

  var studentCity = prompt("What city does the student live in?");
  var studentInfo = {name: studentName, number: studentPhoneNo, city:studentCity};

  totalStudents.push(studentInfo);
}

for (var i = 0; i < totalStudents.length; i ++) {

alert(" Name: " + totalStudents[i].name + " \n Phone: " + totalStudents[i].number + "\n City: " + totalStudents[i].city.toUpperCase());

}
console.log(totalStudents);













