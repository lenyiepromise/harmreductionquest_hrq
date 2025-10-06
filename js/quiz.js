// =============================
// QUIZ LOGIC + OFFLINE SAVE
// =============================

let currentQuestion = 0;
let score = 0;

// DOM Elements
const quizScreen = document.getElementById("quiz-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const scoreDisplay = document.getElementById("score-display");
const questionNum = document.getElementById("question-num");
const totalQuestions = document.getElementById("total-questions");
const progressBar = document.getElementById("progress-bar");
const breakBtn = document.getElementById("break-btn");

totalQuestions.textContent = questions.length;

// =============================
// LOCAL STORAGE HELPERS
// =============================
function saveProgress() {
  const progress = {
    currentQuestion,
    score
  };
  localStorage.setItem("hrqProgress", JSON.stringify(progress));
}

function loadProgress() {
  const saved = localStorage.getItem("hrqProgress");
  if (saved) {
    const { currentQuestion: savedQ, score: savedScore } = JSON.parse(saved);
    currentQuestion = savedQ || 0;
    score = savedScore || 0;
    scoreDisplay.textContent = score;
    return true;
  }
  return false;
}

function clearProgress() {
  localStorage.removeItem("hrqProgress");
}

// =============================
// QUIZ FUNCTIONS
// =============================
function startQuiz() {
  const hasSaved = loadProgress();
  if (!hasSaved) {
    currentQuestion = 0;
    score = 0;
    scoreDisplay.textContent = 0;
  }
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    clearProgress();
    endQuiz();
    return;
  }

  const q = questions[currentQuestion];
  questionText.textContent = q.text;
  questionNum.textContent = currentQuestion + 1;
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className =
      "w-full bg-white/20 text-white font-medium p-3 rounded-xl hover:bg-white/30 transition";
    btn.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(btn);
  });

  updateProgress(currentQuestion, questions.length);
  saveProgress();
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  const buttons = optionsContainer.querySelectorAll("button");

  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.answer) {
      b.classList.add("bg-green-500/70");
    } else if (i === selected) {
      b.classList.add("bg-red-500/60");
    }
  });

  if (selected === q.answer) {
    score += q.points;
    scoreDisplay.textContent = score;
  }

  setTimeout(() => {
    currentQuestion++;
    saveProgress();

    // Show mini-game after every 5 questions
    if (currentQuestion % 5 === 0 && currentQuestion < questions.length) {
      showMiniGame();
    } else {
      showQuestion();
    }
  }, 1000);
}

function endQuiz() {
  clearProgress();
  quizScreen.classList.add("hidden");
  showResults();
}