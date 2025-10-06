// =============================
// MAIN APP CONTROLLER
// =============================

const startScreen = document.getElementById("start-screen");
const resultsScreen = document.getElementById("results-screen");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const finalScoreDisplay = document.getElementById("final-score");
const badgesContainer = document.getElementById("badges-container");
const leaderboard = document.getElementById("leaderboard");

startBtn.addEventListener("click", () => {
  switchScreen("quiz-screen");
  startQuiz();
});

restartBtn.addEventListener("click", () => {
  switchScreen("start-screen");
});

function showResults() {
  switchScreen("results-screen");
  finalScoreDisplay.textContent = score;

  // Display badges based on score
  badgesContainer.innerHTML = "";
  badges.forEach(badge => {
    const div = document.createElement("div");
    div.className = "bg-white/10 p-3 rounded-xl flex flex-col items-center";
    div.innerHTML = `<span class="text-2xl mb-1">${badge.icon}</span>
      <p class="text-gray-200 text-sm">${badge.name}</p>`;
    badgesContainer.appendChild(div);
  });

  // Leaderboard (local dummy)
  const players = [
    { name: "Aisha", score: 880 },
    { name: "Tunde", score: 950 },
    { name: "You", score: score }
  ];
  players.sort((a, b) => b.score - a.score);

  leaderboard.innerHTML = `
    <div class="flex justify-between border-b border-white/10 pb-2 mb-2 text-gray-300">
      <span>Name</span><span>Score</span>
    </div>
  `;

  players.forEach(p => {
    const row = document.createElement("div");
    row.className = "flex justify-between text-gray-100 text-sm py-1";
    row.innerHTML = `<span>${p.name}</span><span>${p.score}</span>`;
    leaderboard.appendChild(row);
  });
}