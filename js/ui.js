// =============================
// UI MANAGEMENT + NETWORK STATUS
// =============================

function switchScreen(showId) {
  const sections = document.querySelectorAll("#app > section");
  sections.forEach(sec => sec.classList.add("hidden"));
  document.getElementById(showId).classList.remove("hidden");
}

function showMessage(message, type = "info") {
  const msgBox = document.createElement("div");
  msgBox.textContent = message;
  msgBox.className = `
    fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full 
    text-white text-sm font-medium shadow-lg transition-all duration-500
    ${type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-indigo-500"}
  `;
  document.body.appendChild(msgBox);
  setTimeout(() => {
    msgBox.style.opacity = "0";
    setTimeout(() => msgBox.remove(), 300);
  }, 2500);
}

// Progress bar animation
function updateProgress(current, total) {
  const progressBar = document.getElementById("progress-bar");
  const percent = (current / total) * 100;
  progressBar.style.width = `${percent}%`;
}

// =============================
// NETWORK STATUS TOAST
// =============================
function setupNetworkStatusListener() {
  window.addEventListener("online", () => {
    showMessage("✅ Back online!", "success");
  });

  window.addEventListener("offline", () => {
    showMessage("⚠️ You’re offline. Some features may not work.", "error");
  });
}

// Initialize on app load
setupNetworkStatusListener();