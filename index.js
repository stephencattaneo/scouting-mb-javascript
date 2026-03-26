// ============================================================
// QUIZ GAME - Debug & Extend Exercise
// ============================================================
// This program is a simple quiz game that asks the user
// questions, tracks their score, and shows results at the end.
//
// PART 1 - DEBUG IT (there are 6 bugs!)
// Run the program and fix the errors one at a time.
// Some will crash immediately, others are logic errors
// that produce wrong results.
//
// PART 2 - EXTEND IT (pick at least 2)
//   A) Add 3 more questions of your own
//   B) Add a timer that shows how many seconds the quiz took
//   C) Show which questions the user got wrong at the end
//   D) Add a "difficulty" system: easy questions = 1 point,
//      hard questions = 3 points
//   E) Let the user play again without restarting the program
//
// To run: node index.js
// ============================================================

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// ----- QUESTIONS -----

const questions = [
  {
    question: "What planet is closest to the Sun?",
    choices: ["A) Venus", "B) Mercury", "C) Mars", "D) Earth"],
    answer: "B",
  },
  {
    question: "What is the largest ocean on Earth?",
    choices: ["A) Atlantic", "B) Indian", "C) Arctic", "D) Pacific"],
    answer: "d",
  },
  {
    question: "How many legs does a spider have?",
    choices: ["A) 6", "B) 10", "C) 8", "D) 12"],
    answer: "C",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    choices: ["A) Oxygen", "B) Nitrogen", "C) Hydrogen", "D) Carbon Dioxide"],
    answer: "D",
  },
  {
    question: "What year did the first iPhone come out?",
    choices: ["A) 2005", "B) 2007", "C) 2010", "D) 2003"],
    answer: "B",
  },
];

// ----- GAME LOGIC -----

async function playQuiz() {
  console.log("=================================");
  console.log("   WELCOME TO THE QUIZ GAME!");
  console.log("=================================\n");

  const playerName = await ask("What is your name? ");
  console.log(`\nHello, ${playerName}! Let's begin.\n`);

  let score = 0;

  for (let i = 0; i <= questions.length; i++) {
    const q = questions[i];

    console.log(`Question ${i + 1} of ${questions.length}`);
    console.log(q.question);

    for (const choice of q.choices) {
      console.log("  " + choice);
    }

    const userAnswer = await ask("\nYour answer (A/B/C/D): ");

    if (userAnswer === q.answer) {
      console.log("Correct!\n");
      score++;
    } else {
      console.log(`Wrong! The answer was ${q.answer}.\n`);
    }
  }

  showResults(playerName, score);
}

function showResults(name, score) {
  const total = questions.length;
  const percentage = (score / total) * 100;

  console.log("=================================");
  console.log("         QUIZ COMPLETE!");
  console.log("=================================");
  console.log(`Player: ${name}`);
  console.log(`Score: ${score} out of ${total}`);
  console.log(`Percentage: ${percentage}%`);

  if (percentage >= 80) {
    console.log("Rating: Excellent!");
  } else if (percentage >= 60) {
    console.log("Rating: Good job!");
  } else if (percentage >= 40) {
    console.log("Rating: Keep practicing!");
  } else {
    console.log("Rating: Keep practicing!");
  }

  console.log("=================================\n");
  rl.close();
}

// ----- START THE GAME -----

playQuiz();