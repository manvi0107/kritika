document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".animate-header");
  const bgMusic = document.getElementById("bgmusic");
  const videoPlayer = document.getElementById("videoPlayer");
  const nextVideoBtn = document.getElementById("nextVideoBtn");

  // Array of video sources
  const videoSources = [
    "krits.mp4",
    "manvi-2-2.mp4",
    "harleen.mp4",
    "mehar.mp4",
    // Add more video file paths as needed
  ];
  let currentVideoIndex = 0; // Track the current video index

  // Add a pulsing animation to the header text
  setInterval(() => {
    header.classList.toggle("pulse");
  }, 2000);

  // Allow autoplay of background music after user interaction
  document.body.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
    }
  });

  // Pause background music when the video starts playing
  videoPlayer.addEventListener("play", () => {
    bgMusic.pause();
  });

  // Resume background music when the video is paused or ends
  videoPlayer.addEventListener("pause", () => {
    bgMusic.play();
  });

  videoPlayer.addEventListener("ended", () => {
    bgMusic.play();
  });

  // Function to play the next video
  function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length; // Loop back to the first video
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.play(); // Automatically start playing the next video
  }

  // Attach the event listener to the "Next Video" button
  nextVideoBtn.addEventListener("click", playNextVideo);
});

  
