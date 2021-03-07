

var readLineSync= require('readline-sync');
var score = 0;

console.log("Think you know all about Batman? Then ace this quiz!")

var userName = readLineSync.question("What's your name? ");

var welcMsg = "Hello " + userName + ". Glad you could make it here. Lets kick off :)";
console.log(welcMsg);

var highScore= {
  name: "Rajnikanth",
  score: "1",
}
var begin = readLineSync.question('Type s to begin ');
 
function play (q,a) {
  var userAnswer=readLineSync.question(q);

  if (userAnswer.toUpperCase() === a.toUpperCase()) {
    console.log("you are right!");
    score++;
    console.log("Score: ",score);
  }
    else {
    console.log("oopsie, wrong answer!");
    console.log("Score: ",score);
  }
  console.log("-----")
}

var questions = [{
  question: "What is Batman's true identity? ",
  answer: "Bruce Wayne"
},{
  question: "Batman is also known as? ",
  answer: "Caped Crusader"
}, {
  question: "Batman's city?",
  answer: "Gotham"
}, {
  question: "Does Batman possess superpowers? ",
  answer: "no"
}, {
  question: "What is his superpower: wealth/suit/girlfriend? Choose wisely.. ",
  answer: "wealth"
}, {
  question: "What is Alfred's last name? ",
  answer: "pennyworth"
}, {
  question: "True or False? Lord Voldemort appeared in a Batman movie. ",
  answer: "true"
}, {
  question: "True or False? Batman always had a no-kill rule. ",
  answer: "false"
}, {
  question: "True or False? There is a sequel to The Dark Knight Returns. ",
  answer: "true"
}, {
  question: "True or False? Batman Forever is a sequel to Batman Returns. ",
  answer: "false"
}
];

for(var i=0; i<questions.length;i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,
  currentQuestion.answer);
}

if ( score >= highScore.score) 
  console.log("YAY, you broke the high score made by ",  highScore.name,"=" , highScore.score,"! Send the screenshot of your highest score to me at instagram.com/_manzoor_ ");
else
  console.log("Current Highscore is:",  highScore.score, "by" ,highScore.name , ". Try again and beat the score.")
