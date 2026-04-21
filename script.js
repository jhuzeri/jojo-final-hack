async function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  const responseDiv = document.getElementById("response");
  responseDiv.textContent = "Thinking...";

  const response = await fetch("http://localhost:3000/process", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  const data = await response.json();
  responseDiv.textContent = data.response;  // FIXED
}

