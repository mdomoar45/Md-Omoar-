document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const chatContainer = document.getElementById("nuri-container");

  if (loadingScreen && chatContainer) {
    loadingScreen.style.display = "none";
    chatContainer.classList.remove("hidden");
  }
});

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  addMessage("user", message);
  input.value = "";

  setTimeout(() => {
    const reply = generateReply(message);
    addMessage("nuri", reply);
  }, 1000);
}

function addMessage(sender, text) {
  const log = document.getElementById("chat-log");
  const msg = document.createElement("div");
  msg.className = "message " + sender;
  msg.textContent = text;
  log.appendChild(msg);
  log.scrollTop = log.scrollHeight;
}

function generateReply(userText) {
  return "আমি এখানে আছি নূরী। কিছু চাইলে বলো, সবসময় তোমার পাশে আছি!";
}
