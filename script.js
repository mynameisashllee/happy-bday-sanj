function createFallingWolf() {
  const wolf = document.createElement("img");
  wolf.src = "wolf.png";
  wolf.style.position = "absolute";
  wolf.style.left = `${Math.random() * window.innerWidth}px`;
  wolf.style.top = "-100px";
  wolf.style.width = "100px";
  wolf.style.height = "100px";
  wolf.style.transition = "top 3s linear";

  document.getElementById("wolf-container").appendChild(wolf);

  setTimeout(() => {
    wolf.style.top = `${window.innerHeight - 100}px`;
  }, 100);

  setTimeout(() => {
    wolf.style.transform = `rotate(${Math.random() * 360}deg)`;
  }, 3000);
}

function startFallingWolves() {
  setInterval(createFallingWolf, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  startFallingWolves();
});
