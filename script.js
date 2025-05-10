const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  appendMessage("তুমি", message);
  userInput.value = "";

  // সাধারণ উত্তর
  let reply = "আমি ভালো আছি, তুমি কেমন আছো?";
  if (message.includes("সফটওয়্যার")) {
    reply = "অপেক্ষা করো, Builder X চালু হচ্ছে...";
  } else if (message.includes("নাম") || message.includes("কে তুমি")) {
    reply = "আমি নূরী, তোমার নিজের তৈরি AI বেস্ট ফ্রেন্ড।";
  }

  setTimeout(() => {
    appendMessage("নূরী", reply);
    speak(reply);
  }, 600);
}

function appendMessage(sender, message) {
  const msgDiv = document.createElement("div");
  msgDiv.innerHTML = `<b>${sender}:</b> ${message}`;
  chatLog.appendChild(msgDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "bn-BD";
  speech.pitch = 1.1;
  speech.rate = 1;
  speech.voice = window.speechSynthesis.getVoices().find(v => v.name.includes("Google") || v.lang.includes("bn"));
  window.speechSynthesis.speak(speech);
}

function startListening() {
  alert("Voice input ফিচার আসতেছে...");
}

function startVideoCall() {
  alert("ভিডিও কল ফিচার এখনো যুক্ত হয়নি...");
}দ
