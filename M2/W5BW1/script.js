const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let currentIndex = 0;
let score = 0;

let total = 20; // durata countdown
let current = total;

const timer = document.querySelector(".timer");
const number = document.querySelector(".timer-number");


const elementQuestion = document.querySelector(".question")
const containerBtn = document.querySelector(".answers-grid");

const footer = document.querySelector(".footer")
const buttons = document.querySelectorAll("button")
const questionCounterElement = document.querySelector(".question-counter")
const questionNumberElement = document.getElementById("question-number")
const retryButton = document.createElement("button")

function retry() {

  retryButton.classList.add("retry-button")
  retryButton.innerText = "Riprova"
  questionCounterElement.appendChild(retryButton)
  retryButton.addEventListener("click", () => {
    window.location.reload()
  })
}



function increaseScore() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", () => { 
      current = 20;
      if (button.innerText === questions[currentIndex].correct_answer) {
        score++;
      };
      increaseIndex();
    });
  });
};

function showScore() {
  if (score > 5) {
    elementQuestion.innerText = `Complimenti! Il tuo score è ${score}`;
  } else {
    elementQuestion.innerText = `Fai schifo il tuo score è ${score}`;
    retry();
  };
};

function cleaningQuestion() {
  elementQuestion.innerHTML = "";
  containerBtn.innerHTML = "";
  questionCounterElement.innerHTML = "";
  timer.innerHTML = "";
  showScore();
};





function showQuestion() {
  elementQuestion.innerText = questions[currentIndex].question;
  questionNumberElement.innerText = currentIndex + 1;
}


//genera bottoni risposta

function generateArrayBtn() {

  containerBtn.innerHTML = "";

  const arrayGen = questions[currentIndex].incorrect_answers.concat(questions[currentIndex].correct_answer);

  const shuffled = arrayGen.sort(() => Math.random() - 0.5);

  for (let i = 0; i < shuffled.length; i++) {
    const answerButton = document.createElement("button");
    answerButton.classList.add("answer-btn");
    answerButton.innerText = shuffled[i];
    containerBtn.appendChild(answerButton);
  }

  if (currentIndex > questions.length - 1) {
    cleaningQuestion();
  }

  increaseScore();
};


function increaseIndex() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    showQuestion();
    generateArrayBtn();
  } else {
    cleaningQuestion();
  }
}


buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    if (event.target.value === questions[currentIndex].correct_answer) {
      score++
    }
  });
});


// timer
function timeCircle() {
  const interval = setInterval(() => {
    let progress = (current / total) * 360;
    timer.style.setProperty("--progress", progress + "deg");
    number.textContent = current;

    if (current <= 0) {
      current = 21;
      clearInterval(interval);
      setTimeout(increaseIndex, 1000);
      timeCircle();
    }
    current--;
  }, 1000);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") {
    window.location.href = './index.html'
  }
});

timeCircle()
showQuestion()
generateArrayBtn()