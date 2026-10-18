const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");

const intro = document.getElementById("intro");
const apology = document.getElementById("apology");
const ending = document.getElementById("ending");

const talkButton = document.getElementById("talkButton");
const timeButton = document.getElementById("timeButton");
const restartButton = document.getElementById("restartButton");

const endingIcon = document.getElementById("endingIcon");
const endingTitle = document.getElementById("endingTitle");
const endingMessage = document.getElementById("endingMessage");

const heartsContainer = document.getElementById("hearts");

let opened = false;

openButton.addEventListener("click", () => {
  if (opened) return;

  opened = true;
  envelope.classList.add("open");
  openButton.disabled = true;
  openButton.textContent = "Opening your letter... 💗";

  setTimeout(() => {
    intro.classList.add("hidden");
    apology.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1700);
});

talkButton.addEventListener("click", () => {
  showEnding(
    "💗",
    "Thank you for giving us a chance",
    "I'm glad we're ready to talk. Your feelings matter, and I'll do my best to listen."
  );
});

timeButton.addEventListener("click", () => {
  showEnding(
    "🌷",
    "Take all the time you need",
    "You don't have to reply right away. I'll respect your space, and whenever you're ready, we can talk."
  );
});

function showEnding(icon, title, message) {
  apology.classList.add("hidden");
  ending.classList.remove("hidden");

  endingIcon.textContent = icon;
  endingTitle.textContent = title;
  endingMessage.textContent = message;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

restartButton.addEventListener("click", () => {
  ending.classList.add("hidden");
  apology.classList.add("hidden");
  intro.classList.remove("hidden");

  envelope.classList.remove("open");
  openButton.disabled = false;
  openButton.textContent = "Open My Letter 💌";

  opened = false;

  window.scrollTo({ top: 0, behavior: "smooth" });
});

function createHeart() {
  const heart = document.createElement("span");

  heart.className = "floating-heart";
  heart.textContent = ["♡", "♥", "✦"][Math.floor(Math.random() * 3)];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (12 + Math.random() * 18) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 900);