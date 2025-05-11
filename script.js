const API_KEY = process.env.OPENAI_API_KEY;

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
    return data.choices?.[0]?.message?.content || "দুঃখিত! আমি কিছু বুঝতে পারলাম না।";
}

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
