function newScoreBoard() {
  return [
    {
      correct: 0,
      incorrect: 0,
      outOfTime: 0
    }
  ];
}

var questions = [
  {
    questionPrompt: "Where did Jesse and Abby meet?",
    options: [
      { answer: "A frat party", correct: false },
      { answer: "College orientation", correct: false },
      { answer: "Math class", correct: true },
      { answer: "A friends house", correct: false }
    ]
  },
  {
    questionPrompt: "What is Jesse and Abby's favorite holiday?",
    options: [
      { answer: "Friendsgiving", correct: true },
      { answer: "The Fourth of July", correct: false },
      { answer: "Jesses Bachelor party", correct: false },
      { answer: "Abbys birthday", correct: false }
    ]
  }
];
