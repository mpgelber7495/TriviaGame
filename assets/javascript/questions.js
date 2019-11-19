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
    questionPrompt: "Where did Jesse and Abby first meet?",
    options: [
      { answer: "A Hawaiian themed frat party", correct: false },
      { answer: "College orientation at UVA", correct: false },
      { answer: "Math class", correct: true },
      { answer: "An interactive baking class", correct: false }
    ]
  },
  {
    questionPrompt:
      "Every year Jesse and Abby host a massive party for which of the following Holidays?",
    options: [
      { answer: "Friendsgiving", correct: true },
      { answer: "The Fourth of July", correct: false },
      { answer: "Jesses Bachelor party", correct: false },
      { answer: "Abbys birthday", correct: false }
    ]
  },
  {
    questionPrompt:
      "Jesse and Abby's favorite family member of all time is which of the following?",
    options: [
      { answer: "Abby's Mom, Jenny", correct: false },
      { answer: "Jesse's Uncle, Chuck", correct: false },
      { answer: "Abby's lost twin sister, Winston", correct: false },
      { answer: "Jesse's cousin, Mike", correct: true }
    ]
  },
  {
    questionPrompt: "When did these love birds get engaged?",
    options: [
      { answer: "November 18th", correct: false },
      { answer: "December 20th", correct: true },
      { answer: "August 16th", correct: false },
      { answer: "September 4th", correct: false }
    ]
  }
];
