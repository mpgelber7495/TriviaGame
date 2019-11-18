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

function clearQuestionArea() {
  $("#question-text-holder").html("");
  for (var i = 0; i < questions[0]["options"].length; i++) {
    $(`#answer-holder-${i}`).html("");
  }
}

function listenForAnswer() {
  $(".answer-holder").click(function(event) {
    // answerID = event.currentTarget.id;
    answerIDString = event.currentTarget.id;
    var answerID = answerIDString[answerIDString.length - 1];
    wasAnswerCorrect =
      questions[questionPosition]["options"][answerID]["correct"] === true;
    answerResponder(wasAnswerCorrect, answerID);
  });
}

function answerResponder(wasAnswerCorrect, answerID) {
  clearQuestionArea();
  var answerResponseText =
    questions[questionPosition]["options"][answerID]["answer"];
  if (wasAnswerCorrect === true) {
    $(".answer-responder-holder").html(
      `<p>${answerResponseText} was the right answer! Awesome job, you must really know JAbby!</p>`
    );
  } else if (wasAnswerCorrect === false) {
    $(".answer-responder-holder").html(
      `<p>${answerResponseText} was INCORRECT... hope you're not invited to the wedding.</p>`
    );
  }
}
