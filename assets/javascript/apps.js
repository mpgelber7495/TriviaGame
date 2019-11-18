var questionPosition = 0;
var scoreBoard = newScoreBoard()[0];
var questionCountDown;
var timerCountDown;

function startGame() {
  $(".intro-holder").toggle();
  addNewQuestion(questionPosition);
  //   clearTimeout(questionCountDown);
  //   questionCountDown = setTimeout(listenForAnswer(), 30000);
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
    // clearTimeout(questionCountDown);
    clearInterval(timerCountDown);
    answerIDString = event.currentTarget.id;
    var answerID = answerIDString[answerIDString.length - 1];
    wasAnswerCorrect =
      questions[questionPosition]["options"][answerID]["correct"] === true;
    answerResponder(wasAnswerCorrect, answerID);
  });
  var timeLeft = 30;
  var clockText = `Time Remaining: ${timeLeft}`;
  $(".question-count-down-clock").html(clockText);
  timerCountDown = setInterval(function() {
    timeLeft--;
    var clockText = `Time Remaining: ${timeLeft}`;
    $(".question-count-down-clock").html(clockText);

    if (timeLeft < 1) {
      //   clearTimeout(questionCountDown);
      clearInterval(timerCountDown);
      scoreBoard["outOfTime"]++;
      // DISPLAY SCREEN ABOUT OUT OF TIME
    }
  }, 1000);
}

function answerResponder(wasAnswerCorrect, answerID) {
  if (questionPosition <= questions.length) {
    clearQuestionArea();
    var answerResponseText =
      questions[questionPosition]["options"][answerID]["answer"];
    if (wasAnswerCorrect === true) {
      $(".answer-responder-holder").html(
        `<p>${answerResponseText} was the right answer! Awesome job, you must really know JAbby!</p>`
      );
      scoreBoard["correct"]++;
    } else if (wasAnswerCorrect === false) {
      $(".answer-responder-holder").html(
        `<p>${answerResponseText} was INCORRECT... hope you're not invited to the wedding.</p>`
      );
      scoreBoard["incorrect"]++;
    }
    //   setTimeout(addNewQuestion(questionPosition), 4000);
    questionPosition++;
    setTimeout(addNewQuestion(), 4000);
  }
}
