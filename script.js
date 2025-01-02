document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".animate-header");

  // Add a pulsing animation to the header text
  setInterval(() => {
    header.classList.toggle("pulse");
  }, 2000);
});

// script.js

// Video sources array
const videoSources = [
  "krits.mp4",
  "manvi-2-2.mp4",
  "harleen.mp4",
  "mehar.mp4",
// Add more video file paths as needed
];

// Track the current video index
let currentVideoIndex = 0;

// Get the video element and next button
const videoPlayer = document.getElementById("videoPlayer");
const nextVideoBtn = document.getElementById("nextVideoBtn");

// Function to switch to the next video
function playNextVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % videoSources.length; // Loop back to the first video
  videoPlayer.src = videoSources[currentVideoIndex];
  videoPlayer.play(); // Automatically start playing the next video
}

// Attach the event listener to the button
nextVideoBtn.addEventListener("click", playNextVideo);

document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bgmusic");

  // Ensure background music plays after a user interaction
  document.body.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
    }
  });
});

