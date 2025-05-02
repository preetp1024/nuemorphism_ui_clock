function updateClock() {
  const now = new Date();

  // 24-hour time
  const time = now.toLocaleTimeString("en-US", { hour12: false });

  // Day and Date
  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const date = now.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Set values to HTML
  document.getElementById("time").textContent = time;
  document.getElementById("day").textContent = day;
  document.getElementById("date").textContent = date;

  // Greeting based on time
  const hour = now.getHours();
  let greetingText = "";

  if (hour < 12) {
    greetingText = "☀️ Good Morning!";
  } else if (hour < 18) {
    greetingText = "🌤️ Good Afternoon!";
  } else {
    greetingText = "🌙 Good Evening!";
  }

  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = greetingText;
  }
}

setInterval(updateClock, 1000);
updateClock();
