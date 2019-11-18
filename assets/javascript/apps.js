var questionPosition = 0;

function startGame() {
  $(".intro-holder").toggle();
  addNewQuestion(questionPosition);
  listenForAnswer();
}

function addNewQuestion(questionPosition) {
  var questionText = questions[questionPosition]["questionPrompt"];
  var questionTextElement = `<p>${questionText}</p>`;
  $("#question-text-holder").html(questionTextElement);
  for (var i = 0; i < questions[questionPosition]["options"].length; i++) {
    var answerText = questions[questionPosition]["options"][i]["answer"];
    var answerTextElement = `<p>${answerText}</p>`;
    $(`#answer-holder-${i}`).html(answerTextElement);
  }
}

function listenForAnswer() {
  $(".answer-holder").click(function(event) {
    // answerID = event.currentTarget.id;
    answerIDString = event.currentTarget.id;
    answerID = answerIDString[answerIDString.length - 1];
    if (questions[questionPosition]["options"][answerID]["correct"] === true) {
      console.log("You're Correct!");
    } else if (
      questions[questionPosition]["options"][answerID]["correct"] === false
    ) {
      console.log("incorret");
    }
  });
}
