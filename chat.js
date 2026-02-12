const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const text = input.value;
  input.value = "";

  messages.innerHTML += `<p><b>You:</b> ${text}</p>`;

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text })
  });

  const data = await res.json();
  messages.innerHTML += `<p><b>AI:</b> ${data.reply}</p>`;
});