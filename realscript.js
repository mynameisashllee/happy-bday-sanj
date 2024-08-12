function createCloud(imageSrc) {
  const cloud = document.createElement("img");
  cloud.src = imageSrc;
  cloud.classList.add("cloud");

  // Randomly size the clouds
  cloud.style.width = `${Math.random() * 200 + 150}px`;

  // Random vertical position between 10% and 90% of the viewport height
  cloud.style.top = `${Math.random() * 80 + 10}vh`;

  // Random horizontal position to start either just off the left or right side of the screen
  const startLeft = Math.random() < 0.5;
  cloud.style.left = startLeft ? '-200px' : 'calc(100% + 200px)';

  // Randomly assign the direction of movement (left to right or right to left)
  const direction = startLeft ? 1 : -1;
  cloud.style.transform = `translateX(${direction * (100 + Math.random() * 20)}vw)`; 
  // Spread movement more

  // Random animation duration between 40s and 80s
  cloud.style.transition = `transform ${Math.random() * 40 + 40}s linear`;

  document.getElementById("cloudContainer").appendChild(cloud);

  // Trigger the cloud movement
  requestAnimationFrame(() => {
    cloud.style.transform = `translateX(0)`;
  });
}

function startFloatingClouds() {
  const cloudImages = ["cloud1.png", "cloud2.png", "cloud3.png", "cloud4.png"];

  cloudImages.forEach((cloudImage) => {
    for (let i = 0; i < 3; i++) { // Create three copies of each cloud
      createCloud(cloudImage);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  startFloatingClouds();
});




function updateProgress(audio) {
  const elapsedTime = document.getElementById("elapsedTime");
  const totalDuration = document.getElementById("totalDuration");

  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60);
  elapsedTime.textContent = `${String(currentMinutes).padStart(2, '0')}:${String(currentSeconds).padStart(2, '0')}`;

  const durationMinutes = Math.floor(audio.duration / 60);
  const durationSeconds = Math.floor(audio.duration % 60);
  totalDuration.textContent = `${String(durationMinutes).padStart(2, '0')}:${String(durationSeconds).padStart(2, '0')}`;
}

document.getElementById("playButton").addEventListener("click", function () {
  const audioPlayer = document.getElementById("audioPlayer");

  if (audioPlayer.paused) {
    audioPlayer.play();
    this.textContent = "▮▮";
  } else {
    audioPlayer.pause();
    this.textContent = "▶";
  }

  audioPlayer.addEventListener("timeupdate", function () {
    updateProgress(audioPlayer);
  });

  audioPlayer.addEventListener("loadedmetadata", function () {
    updateProgress(audioPlayer);
  });
});
