if (!sessionStorage.getItem("loggedInUser")) {
  window.location.href = "index.html";
}

const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const story = {
  start: {
    text: "You wake up in a dark forest. Two paths lie ahead. Which way will you go?",
    choices: [
      { text: "Take the left path 🌲", next: "leftPath" },
      { text: "Take the right path 🌌", next: "rightPath" }
    ]
  },
  leftPath: {
    text: "You encounter a wild wolf! Do you fight or run?",
    choices: [
      { text: "Fight 🗡️", next: "fightWolf" },
      { text: "Run 🏃", next: "runAway" }
    ]
  },
  rightPath: {
    text: "You find a hidden village. The villagers welcome you. Do you stay or explore further?",
    choices: [
      { text: "Stay 🏡", next: "stayVillage" },
      { text: "Explore 🔍", next: "exploreCave" }
    ]
  },
  fightWolf: {
    text: "You fought bravely but the wolf overpowered you. Game Over 💀",
    choices: [{ text: "Restart 🔄", next: "start" }]
  },
  runAway: {
    text: "You escaped safely and found your way out of the forest. You Win 🎉",
    choices: [{ text: "Play Again 🔄", next: "start" }]
  },
  stayVillage: {
    text: "You live happily in the village. A peaceful ending 🌸",
    choices: [{ text: "Play Again 🔄", next: "start" }]
  },
  exploreCave: {
    text: "Inside the cave, you discover hidden treasure! You Win 💰",
    choices: [{ text: "Play Again 🔄", next: "start" }]
  }
};

function startStory(part) {
  storyElement.textContent = story[part].text;
  choicesElement.innerHTML = "";
  story[part].choices.forEach(choice => {
    let btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => startStory(choice.next);
    choicesElement.appendChild(btn);
  });
}

function logout() {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}


startStory("start");
