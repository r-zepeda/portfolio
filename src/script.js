function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function updateText() {
  var inputValue = document.getElementById("inputField").value;

  var outputDiv = document.getElementById("outputDiv");
  outputDiv.innerText = inputValue ? inputValue : "WHAT I DO";
}

function updateChip() {
  var words = [
    "Cat",
    "Dog",
    "Problem",
    "Good",
    "Bad",
    "Play",
    "Frontend",
    "Backend",
  ];
  var randomIndex = Math.floor(Math.random() * words.length);
  var randomWord = words[randomIndex];
  var outputChip = document.getElementById("outputChip1");
  var buttonChip = document.getElementById("buttonChip1");

  // Remove the animation class before updating the text
  outputChip.classList.remove("fade-out-in");

  // Trigger a reflow to restart the animation
  void outputChip.offsetWidth;

  // Add the animation class after triggering the reflow
  outputChip.classList.add("fade-out-in");
  buttonChip.innerText = randomWord;
  outputChip.innerText = randomWord;
}

function updateChip2() {
  var words = [
    "Lover",
    "Hater",
    "Solver",
    "Fan",
    "Developer",
    "Maker",
    "Boy",
    "Talker",
  ];
  var randomIndex = Math.floor(Math.random() * words.length);
  var randomWord = words[randomIndex];
  var outputChip2 = document.getElementById("outputChip2");

  var buttonChip = document.getElementById("buttonChip2");

  // Remove the animation class before updating the text
  outputChip2.classList.remove("fade-out-in");

  // Trigger a reflow to restart the animation
  void outputChip2.offsetWidth;

  // Add the animation class after triggering the reflow
  outputChip2.classList.add("fade-out-in");
  buttonChip2.innerText = randomWord;
  outputChip2.innerText = randomWord;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// const logo = document.querySelectorAll("#load_icon path");

// for (let i = 0; i < logo.length; i++) {
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }
