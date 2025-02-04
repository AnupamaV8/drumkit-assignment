const container = document.querySelector("#container");
const drumImage = document.querySelector("#drumImage");

const drumMap = {
  kick: {
    key: "Q",
    sound: "./sounds/kick.wav",
    position: { top: 42, left: 62 },
  },
  snare: {
    key: "W",
    sound: "./sounds/snare.wav",
    position: { top: 27, left: 65 },
  },
  hihat: {
    key: "E",
    sound: "./sounds/hihat.wav",
    position: { top: 13, left: 70 },
  },
  tom: { key: "R", sound: "./sounds/tom.wav", position: { top: 19, left: 56 } },
  tink: {
    key: "T",
    sound: "./sounds/tink.wav",
    position: { top: 30, left: 40 },
  },
  ride: {
    key: "Y",
    sound: "./sounds/ride.wav",
    position: { top: 12, left: 30 },
  },
  openhat: {
    key: "U",
    sound: "./sounds/openhat.wav",
    position: { top: 20, left: 71 },
  },
  clap: {
    key: "I",
    sound: "./sounds/clap.wav",
    position: { top: 15, left: 40 },
  },
};

let drumButtons = [];

function createDrumButtons() {
  drumButtons.forEach((button) => button.remove());
  drumButtons = [];

  for (const drum in drumMap) {
    const drumButton = document.createElement("div");
    drumButton.classList.add("drum-button");
    drumButton.textContent = drumMap[drum].key;

    drumButton.style.position = "absolute";
    drumButton.style.top = `${drumMap[drum].position.top}%`;
    drumButton.style.left = `${drumMap[drum].position.left}%`;

    drumButton.addEventListener("click", () => {
      const audio = new Audio(drumMap[drum].sound);
      audio.play();
      console.log(`Playing ${drum} sound`);
    });

    window.addEventListener("keydown", (e) => {
      if (e.key.toUpperCase() === drumMap[drum].key) {
        const audio = new Audio(drumMap[drum].sound);
        audio.play();
        console.log(`Playing ${drum} sound with key "${e.key}"`);
      }
    });

    container.appendChild(drumButton);
    drumButtons.push(drumButton);
  }
}

function updateButtonPositions() {
  drumButtons.forEach((button) => {
    const buttonIndex = drumButtons.indexOf(button);
    const drum = Object.keys(drumMap)[buttonIndex];
    const drumData = drumMap[drum];

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const newTop = (drumData.position.top / 100) * containerHeight;
    const newLeft = (drumData.position.left / 100) * containerWidth;

    button.style.top = `${newTop}px`;
    button.style.left = `${newLeft}px`;
  });
}

window.onload = () => {
  createDrumButtons();
  updateButtonPositions();
};

window.onresize = updateButtonPositions;
