document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const chatContainer = document.getElementById("chat-container");

  if (loadingScreen && chatContainer) {
    loadingScreen.style.display = "none";
    chatContainer.style.display = "block";
  }
});
