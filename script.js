function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", { hour12: false });
  
    const day = now.toLocaleDateString("en-US", { weekday: "long" });
    const date = now.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  
    document.getElementById("time").textContent = time;
    document.getElementById("day").textContent = day;
    document.getElementById("date").textContent = date;
  }
  setInterval(updateClock, 1000);
  updateClock();