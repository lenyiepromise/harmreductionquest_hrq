// =============================
// MINI-GAME: MEMORY MATCH
// =============================

const miniGameScreen = document.getElementById("mini-game-screen");
const cardGrid = document.getElementById("card-grid");
const miniGameMessage = document.getElementById("mini-game-message");
const continueBtn = document.getElementById("continue-btn");

const icons = ["💉", "🛡️", "🤝", "🏠"];
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let lockBoard = false;

function showMiniGame() {
  // Hide quiz, show mini-game
  quizScreen.classList.add("hidden");
  miniGameScreen.classList.remove("hidden");

  // Reset state
  cardGrid.innerHTML = "";
  miniGameMessage.classList.add("hidden");
  continueBtn.classList.add("hidden");
  matchedPairs = 0;
  lockBoard = false;
  flippedCards = [];

  // Duplicate + shuffle icons
  const shuffled = [...icons, ...icons].sort(() => Math.random() - 0.5);

  shuffled.forEach((icon, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">?</div>
        <div class="card-back">${icon}</div>
      </div>`;
    card.addEventListener("click", () => flipCard(card));
    cardGrid.appendChild(card);
  });
}

function flipCard(card) {
  if (lockBoard || card.classList.contains("flipped") || flippedCards.includes(card)) return;

  card.classList.add("flipped");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    lockBoard = true;
    checkMatch();
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  const isMatch =
    card1.querySelector(".card-back").textContent === card2.querySelector(".card-back").textContent;

  if (isMatch) {
    matchedPairs++;
    card1.querySelector(".card-back").classList.add("bg-green-400", "text-white");
    card2.querySelector(".card-back").classList.add("bg-green-400", "text-white");
    resetMiniGameState();

    if (matchedPairs === icons.length) {
      finishMiniGame();
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      resetMiniGameState();
    }, 800);
  }
}

function resetMiniGameState() {
  flippedCards = [];
  lockBoard = false;
}

function finishMiniGame() {
  miniGameMessage.textContent = "Well done! +100 bonus points 🎯";
  miniGameMessage.classList.remove("hidden");
  score += 100;
  scoreDisplay.textContent = score;
  continueBtn.classList.remove("hidden");

  continueBtn.onclick = () => {
    miniGameScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    showQuestion();
  };
}
