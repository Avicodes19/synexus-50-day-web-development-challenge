const socket = new WebSocket("wss://ws.postman-echo.com/raw");

socket.onopen = function () {
  console.log("WebSocket connection established.");
};

socket.onmessage = function (event) {
  const feed = document.getElementById("live-feed");

  if (!feed) return;

  feed.innerHTML += `<p>${event.data}</p>`;
};

socket.onerror = function (error) {
  console.error("WebSocket error:", error);
};

socket.onclose = function () {
  console.log("WebSocket connection closed.");
};

export function sendLiveMessage(text) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(text);
  } else {
    console.log("WebSocket is not connected yet.");
  }
}
