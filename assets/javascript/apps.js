var questionPosition = 0;
var scoreBoard = newScoreBoard()[0];
var questionCountDown;
var timerCountDown;

function startGame() {
  $(".intro-holder").toggle();
  addNewQuestion();
  listenForAnswer();
}

function addNewQuestion() {
  var questionText = questions[questionPosition]["questionPrompt"];
  var questionTextElement = `<p>${questionText}</p>`;
  $(".answer-responder-holder").html("");
  $("#question-text-holder").html(questionTextElement);
  for (var i = 0; i < questions[questionPosition]["options"].length; i++) {
    var answerText = questions[questionPosition]["options"][i]["answer"];
    var answerTextElement = `<p>${answerText}</p>`;
    $(`#answer-holder-${i}`).html(answerTextElement);
  }
  var timeLeft = 30;
  var clockText = `Time Remaining: ${timeLeft}`;
  $(".question-count-down-clock").html(clockText);
  timerCountDown = setInterval(function() {
    timeLeft--;
    var clockText = `Time Remaining: ${timeLeft}`;
    $(".question-count-down-clock").html(clockText);

    if (timeLeft < 1) {
      clearInterval(timerCountDown);

      displayOutOfTime();
    }
  }, 1000);
}

function clearQuestionArea() {
  $("#question-text-holder").html("");
  $(".question-count-down-clock").html("");
  for (var i = 0; i < questions[0]["options"].length; i++) {
    $(`#answer-holder-${i}`).html("");
  }
}

function listenForAnswer() {
  if (questionPosition < questions.length) {
    $(".answer-holder").click(function(event) {
      clearInterval(timerCountDown);
      answerIDString = event.currentTarget.id;
      var answerID = answerIDString[answerIDString.length - 1];
      wasAnswerCorrect =
        questions[questionPosition]["options"][answerID]["correct"] === true;
      answerResponder(wasAnswerCorrect, answerID);
    });
  }
}

function answerResponder(wasAnswerCorrect, answerID) {
  clearQuestionArea();
  var answerResponseText =
    questions[questionPosition]["options"][answerID]["answer"];
  if (wasAnswerCorrect === true) {
    $(".answer-responder-holder").html(
      `<p>${answerResponseText} was the right answer! Awesome job, you must really know JAbby!</p>`
    );
    scoreBoard["correct"]++;
  } else if (wasAnswerCorrect === false) {
    correctAnswerText = findCorrectAnswer();
    $(".answer-responder-holder").html(
      `<p>${answerResponseText} was INCORRECT. ${correctAnswerText} was the right answer... hope you're not invited to the wedding.</p>`
    );
    scoreBoard["incorrect"]++;
  }
  questionPosition++;
  if (questionPosition < questions.length) {
    setTimeout(addNewQuestion, 3500);
  } else if (questionPosition === questions.length) {
    setTimeout(endGame, 3500);
  }
}

function findCorrectAnswer() {
  for (var i = 0; i < questions[questionPosition]["options"].length; i++) {
    if (questions[questionPosition]["options"][i]["correct"] === true) {
      var correctAnswerText =
        questions[questionPosition]["options"][i]["answer"];
    }
  }
  return correctAnswerText;
}

function displayOutOfTime() {
  clearQuestionArea();
  answerResponseText = findCorrectAnswer();
  $(".answer-responder-holder").html(
    `<p>You're out of time! ${answerResponseText} was the right answer! Ya gotta think quicker buddy...</p>`
  );
  scoreBoard["outOfTime"]++;
  questionPosition++;
  if (questionPosition < questions.length) {
    setTimeout(addNewQuestion, 3500);
  } else if (questionPosition === questions.length) {
    setTimeout(endGame, 3500);
  }
}

function endGame() {
  $(".answer-responder-holder").html("");
  var endOfGameScoreHTML = `<h3>Game over</h3><p>Correct Answers: ${scoreBoard["correct"]}</p><p>Incorrect Answers: ${scoreBoard["incorrect"]}</p><p>Questions lost to time: ${scoreBoard["outOfTime"]}</p><button id = "start-over-button" onclick="startOver()">Start Over?<button>`;
  $(".score-board").html(endOfGameScoreHTML);
}

function startOver() {
  scoreBoard = newScoreBoard()[0];
  questionPosition = 0;
  addNewQuestion();
  $(".score-board").html("");
}
