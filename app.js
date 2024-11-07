const container = document.querySelector("#container");
console.log(container);

const drumMap = {
  kick: {
    key: "q",
    sound: "./sounds/kick.wav",
    position: { top: "60%", left: "53%" },
  },
  snare: {
    key: "w",
    sound: "./sounds/snare.wav",
    position: { top: "42%", left: "54%" },
  },
  hihat: {
    key: "e",
    sound: "./sounds/hihat.wav",
    position: { top: "17%", left: "56%" },
  },
  tom: {
    key: "r",
    sound: "./sounds/tom.wav",
    position: { top: "25%", left: "50%" },
  },
  tink: {
    key: "t",
    sound: "./sounds/tink.wav",
    position: { top: "42%", left: "44%" },
  },
  ride: {
    key: "y",
    sound: "./sounds/ride.wav",
    position: { top: "15%", left: "40%" },
  },
  openhat: {
    key: "u",
    sound: "./sounds/openhat.wav",
    position: { top: "29%", left: "57%" },
  },
  clap: {
    key: "i",
    sound: "./sounds/clap.wav",
    position: { top: "22%", left: "44%" },
  },
};

// Add the drum kit image to the container
const image = document.createElement("img");
image.src = `images/drum-kit2.jpg`;
image.style.height = "600px";
image.style.width = "600px";
image.style.position = "relative"; // Ensure it aligns with absolutely positioned buttons
image.style.right = 50 % container.appendChild(image);

for (const drum in drumMap) {
  const drumButton = document.createElement("div");
  drumButton.classList.add("drum-button");

  // Apply position styles
  drumButton.style.position = "absolute";
  drumButton.style.top = drumMap[drum].position.top;
  drumButton.style.left = drumMap[drum].position.left;
  drumButton.style.width = "50px";
  drumButton.style.height = "50px";
  drumButton.style.borderRadius = "50%";
  drumButton.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  drumButton.style.cursor = "pointer";

  // Play sound on click
  drumButton.addEventListener("click", () => {
    const audio = new Audio(drumMap[drum].sound);
    audio.play();
    console.log(`Playing ${drum} sound`);
  });

  // Play sound on keydown
  window.addEventListener("keydown", (e) => {
    if (e.key === drumMap[drum].key) {
      const audio = new Audio(drumMap[drum].sound);
      audio.play();
      console.log(`Playing ${drum} sound with key "${e.key}"`);
    }
  });

  container.appendChild(drumButton);
}
