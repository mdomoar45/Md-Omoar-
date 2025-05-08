window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("hidden");
        document.getElementById("nuri-container").classList.remove("hidden");
    }, 3000); // ৩ সেকেন্ড লোডিং
});

function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;

    addMessage("user", message);
    input.value = "";

    // নূরীর জবাব (ডামি)
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
    return "আমি এখনো শিখছি, কিন্তু আমি সবসময় তোমার পাশে আছি!";
}
