document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".animate-header");

  // Add a pulsing animation to the header text
  setInterval(() => {
    header.classList.toggle("pulse");
  }, 2000);
});

