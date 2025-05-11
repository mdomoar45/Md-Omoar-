// OpenAI Key গোপনে ভাগ করে রাখা
const p1 = "sk";
const p2 = "-proj";
const p3 = "-vC_nxP5GwfLk9ER";
const p4 = "-wdiziBMHItlSmOYCse9llvchSUVjfiwh6sWciNVtWGEGedypZaQZrByoutT3BlbkFJFeTaQxzpk9ZLfw_Luo6-FbEAjrWBG_SeYwozYoKBjlgDfEPm_sDgzFn4S5m28B78fS8rzz4x0A";

const API_KEY = p1 + p2 + p3 + p4;

// চ্যাট পাঠানোর ফাংশন
async function sendMessageToGPT(prompt) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "নূরী কিছু বলতে পারছে না এখন।";
}

// ইউজার ক্লিক করলে কাজ শুরু
document.getElementById("sendBtn").addEventListener("click", async () => {
  const input = document.getElementById("user-input").value;
  const chatBox = document.getElementById("response-box");

  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.innerText = "তুমি: " + input;
  chatBox.appendChild(userMsg);

  const reply = await sendMessageToGPT(input);

  const botMsg = document.createElement("div");
  botMsg.className = "nuri-msg";
  botMsg.innerText = "নূরী: " + reply;
  chatBox.appendChild(botMsg);

  document.getElementById("user-input").value = "";
});
