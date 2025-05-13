const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.innerHTML = `<b>${sender}:</b> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const message = input.value.trim();
  if (!message) return;

  appendMessage("তুমি", message);
  input.value = "";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      appendMessage("নূরী", "রিপ্লাই আসছে না। API বা Server চেক করো!");
      return;
    }

    const data = await response.json();
    const reply = data.reply || "কিছু ভুল হয়েছে!";
    appendMessage("নূরী", reply);
  } catch (err) {
    appendMessage("নূরী", "নেটওয়ার্ক সমস্যা হয়েছে!");
  }
}

function startVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("ভয়েস রিকগনিশন সাপোর্ট করছে না!");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "bn-BD";

  recognition.onresult = function (event) {
    input.value = event.results[0][0].transcript;
    sendMessage();
  };

  recognition.start();
}
