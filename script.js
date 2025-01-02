document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".animate-header");

  // Add a pulsing animation to the header text
  setInterval(() => {
    header.classList.toggle("pulse");
  }, 2000);
});
// script.js

// JavaScript for controlling background music and video notes

// Background music and video elements
const backgroundMusic = document.getElementById("backgroundMusic");
const videoPlayer = document.getElementById("videoPlayer");

// Video sources
const videoSources = [
  "manvi-2-2.mp4",
  "krits.mp4",
  "harleen.mp4",
  "mehar.mp4",// Add more videos as needed
];

let currentVideoIndex = 0;

// Play the next video
const nextVideoBtn = document.getElementById("nextVideoBtn");
nextVideoBtn.addEventListener("click", () => {
  currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
  videoPlayer.src = videoSources[currentVideoIndex];
  videoPlayer.play();
});

// Pause background music when video starts playing
videoPlayer.addEventListener("play", () => {
  backgroundMusic.pause();
});

// Resume background music when video is paused or ends
videoPlayer.addEventListener("pause", () => {
  backgroundMusic.play();
});
videoPlayer.addEventListener("ended", () => {
  backgroundMusic.play();
});

const nextVideoBtn = document.getElementById("nextVideoBtn");

// Function to switch to the next video
function playNextVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % videoSources.length; // Loop back to the first video
  videoPlayer.src = videoSources[currentVideoIndex];
  videoPlayer.play(); // Automatically start playing the next video
}

// Attach the event listener to the button
nextVideoBtn.addEventListener("click", playNextVideo);

