function handleUserInput() {
  const input = document.getElementById("userInput").value;
  const message = document.getElementById("nuriMessage");

  if (input.includes("কেমন আছো") || input.includes("বন্ধু")) {
    message.innerText = "ভালো আছি! তুমি কেমন আছো?";
    speak("ভালো আছি! তুমি কেমন আছো?");
  } else {
    message.innerText = "তোমার কথা মনে রাখলাম।";
    speak("তোমার কথা মনে রাখলাম।");
  }
}

function generateApp() {
  const instructions = document.getElementById("builderInput").value;
  if (instructions.trim() === "") {
    alert("দয়া করে সফটওয়্যার তৈরির নির্দেশ লিখো");
    return;
  }
  alert("তোমার নির্দেশনা অনুযায়ী সফটওয়্যার বানানো হচ্ছে:\n\n" + instructions);
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "bn-BD";
  speechSynthesis.speak(utterance);
}
