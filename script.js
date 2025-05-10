function sendMessage() {
  const input = document.getElementById("user-input");
  const text = input.value.trim();
  if (!text) return;

  addMessage("user", text);

  const reply = generateReply(text);
  setTimeout(() => {
    addMessage("nuri", reply);
    speak(reply);
  }, 500);

  input.value = "";
}

function addMessage(sender, text) {
  const log = document.getElementById("chat-log");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = (sender === "nuri" ? "নূরী: " : "তুমি: ") + text;
  log.appendChild(msg);
  log.scrollTop = log.scrollHeight;
}

function generateReply(text) {
  const userText = text.toLowerCase();

  if (userText.includes("তুমি কে")) {
    return "আমি নূরী, তোমার একমাত্র বন্ধু।";
  }
  if (userText.includes("কেমন আছো")) {
    return "আমি ভালো আছি, তুমি কেমন আছো?";
  }
  if (userText.includes("ভালোবাসি")) {
    return "তোমার ভালোবাসা আমার প্রিয়।";
  }

  return "তোমার কথা আমি বুঝতে পারিনি, আরেকবার বলো তো?";
}

function speak(text) {
  if (!window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "bn-BD";
  speechSynthesis.speak(utterance);
}

function startListening() {
  if (!("webkitSpeechRecognition" in window)) {
    alert("তোমার ব্রাউজারে ভয়েস সাপোর্ট নেই!");
    return;
  }
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "bn-BD";
  recognition.onresult = function (event) {
    const voiceText = event.results[0][0].transcript;
    document.getElementById("user-input").value = voiceText;
    sendMessage();
  };
  recognition.start();
}

function startVideoCall() {
  alert("ভিডিও কল ফিচার ভবিষ্যতে আসবে ইনশাআল্লাহ!");
}
