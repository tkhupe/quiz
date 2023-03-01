var questions = [
    {
        prompt: "What is your name?,\n(a) john \n(b) jane \n(c)sam \n(d) jenny",
        answer: "a"
    },
    
    { 
        prompt: "What is your favorite color?\n(a) red \n(b) blue \n(c) green \n(d) yellow",
        answer: "b"
    },
    
    { 
        prompt: "What is your favorite animal?\n(a) cat \n(b) dog \n(c) horse\n(d) snake",
        answer: "c"
    }
    
]
var score = 0;
    for (var i = 0; i < questions.length; i++) {
// var ask = prompt(questions[i].prompt);
// var answer = questions[i].answer;
var response = window.prompt(questions[i].prompt);

if (response == questions[i].answer) {
    score++;
    alert("correct! answer is " + questions[i].answer);
}
    else if (response != questions[i].answer) {
        alert("incorrect, answer is " + questions[i].answer);
    } 
}


    alert("you got " + score + " out of 3 questions correct");






