// console.log("sanity check");

// ------------ R E Q U I R E M E N T 1 ------------

// prompt how many students learning JS
// need to turn numStudents into an integer
var numStudents = parseInt(prompt("How many students are learning JavaScript?"));

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


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

  alert(" Name: " + capitalizeFirstLetter(totalStudents[i].name) + " \n Phone: " + totalStudents[i].number + "\n City: " + totalStudents[i].city.toUpperCase());

}
console.log(totalStudents);

// ---------- M E N T O R S ----------

// var numMentors = parseInt(prompt("How many mentors are teaching JavaScript?"));

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }


// // create empty array for totalMentors
// // collect mentorName, mentorPhone, mentorCity
// var totalMentors = [];
//   for(i = 0; i < numMentors; i++){
//   var mentorName = prompt("What is the mentor's name? ");
//   var mentorPhoneNo = prompt("What is the mentor's phone number? (xxx-xxx-xxxx)");

//   // while the phone number doesn't comply to format, prompt re-enter
//   while (mentorPhoneNo.length != 12 || mentorPhoneNo.charAt(3) != "-" || mentorPhoneNo.charAt(7) != "-")  {
//     alert(" Your phone number is not valid, please re-enter your number using the format xxx-xxx-xxxx ");
//     var mentorPhoneNo = prompt("What is the mentor's phone number? (xxx-xxx-xxxx");
//   }

//   var mentorCity = prompt("What city does the mentor live in?");
//   var mentorInfo = {name: mentorName, number: mentorPhoneNo, city:mentorCity};

//   totalMentors.push(mentorInfo);
// }

// for (var i = 0; i < totalMentors.length; i ++) {

//   alert(" Name: " + capitalizeFirstLetter(totalMentors[i].name) + " \n Phone: " + totalMentors[i].number + "\n City: " + totalMentors[i].city.toUpperCase());

// }
// console.log(totalMentors);













