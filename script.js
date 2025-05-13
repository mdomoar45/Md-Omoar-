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

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer sk-proj-...তোমার_API_KEY..."
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "কিছু ভুল হয়েছে!";
  appendMessage("নূরী", reply);
}

function startVoice() {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = "bn-BD";
  recognition.onresult = function (event) {
    input.value = event.results[0][0].transcript;
    sendMessage();
  };
  recognition.start();
}
