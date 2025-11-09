// ===== SELECT ELEMENTS =====
const body = document.body;
const input = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");
const moodBox = document.getElementById("mood-box");
const growBtn = document.getElementById("growBtn");
const shrinkBtn = document.getElementById("shrinkBtn");
const toggleModeBtn = document.getElementById("toggleModeBtn");
const showSecretBtn = document.getElementById("showSecretBtn");
const secretMessage = document.getElementById("secret-message");
const title = document.querySelector("h1");
const buttons = document.querySelectorAll("button");

// ===== BODY & TITLE STYLING =====
body.style.fontFamily = "'Poppins', sans-serif";
body.style.textAlign = "center";
body.style.marginTop = "40px";
body.style.transition = "all 0.5s ease";
body.style.backgroundColor = "#f5f7fa";
body.style.color = "#333";

title.style.color = "#2c3e50";
title.style.letterSpacing = "1px";
title.style.marginBottom = "20px";

// ===== PLACEHOLDER STYLING =====
const style = document.createElement("style");
style.innerHTML = `
  ::placeholder {
    opacity: 0.5;
    color: gray;
    font-style: italic;
  }
`;
document.head.appendChild(style);

// ===== INPUT STYLING =====
nameInput.style.padding = "15px 20px";
nameInput.style.width = "40%";
nameInput.style.fontSize = "16px";
nameInput.style.border = "2px solid #3498db";
nameInput.style.borderRadius = "10px";
nameInput.style.outline = "none";
nameInput.style.marginBottom = "20px";
nameInput.style.transition = "0.3s";
nameInput.style.textAlign = "center";
let name = (input.value);
// if (name === "") {
//   greeting.innerText = "Wagwan, friend!";
//   greeting.style.color = "green"
// }else{
//   input.addEventListener("input", () => {
//   greeting.innerText ="Wagwan, " + name + "!";
//   greeting.style.color = "green";
//   greeting.style.fontWeight = "bold";
// });
// }
 input.addEventListener("input", () => {
  let name = input.value
  if(name ===""){
    greeting.innerText = "Wagwan, friend!";
    greeting.style.color = "green"
  }else{
    greeting.innerText ="Hello, " + name + "!";
    greeting.style.color = "green";
    greeting.style.fontWeight = "bold";
  }
}
)


input.addEventListener("focus", () => {
  nameInput.style.borderColor = "#2980b9";
});
nameInput.addEventListener("blur", () => {
  nameInput.style.borderColor = "#3498db";
});

// ===== GREETING STYLING =====
greeting.style.fontSize = "24px";
greeting.style.marginTop = "15px";
greeting.style.transition = "0.3s";

// ===== MOOD BOX STYLING =====
let boxSize = 150;
moodBox.style.width = `${boxSize}px`;
moodBox.style.height = `${boxSize}px`;
moodBox.style.background = "linear-gradient(135deg, #6dd5fa, #2980b9)";
moodBox.style.margin = "30px auto";
moodBox.style.borderRadius = "20px";
moodBox.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
moodBox.style.transition = "all 0.3s ease";

// ===== SECRET MESSAGE STYLING =====
let secretVisible = false;
secretMessage.style.display = "none";
secretMessage.style.marginTop = "20px";
secretMessage.style.fontStyle = "italic";
secretMessage.style.color = "#8e44ad";
secretMessage.style.fontWeight = "500";
secretMessage.style.transition = "opacity 0.3s ease";

// ===== BUTTON STYLING =====
buttons.forEach((btn) => {
  btn.style.margin = "6px";
  btn.style.padding = "10px 25px";
  btn.style.fontSize = "15px";
  btn.style.border = "none";
  btn.style.borderRadius = "10px";
  btn.style.cursor = "pointer";
  btn.style.backgroundColor = "#3498db";
  btn.style.color = "#fff";
  btn.style.fontWeight = "bold";
  btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  btn.style.transition = "0.3s";

  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#2980b9";
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#3498db";
    btn.style.transform = "scale(1)";
  });
});

// ===== 1. LIVE NAME GREETING =====
nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    greeting.textContent = "Hello, friend!";
    greeting.style.color = "#333";
    greeting.style.fontWeight = "normal";
  } else {
    (greeting.textContent = Hello), `${name}!`;
    greeting.style.color = "green";
    greeting.style.fontWeight = "bold";
  }
});

// ===== 2. MOOD BOX GROW/SHRINK =====
growBtn.addEventListener("click", () => {
  boxSize += 20;
  moodBox.style.width = `${boxSize}px`;
  moodBox.style.height = `${boxSize}px`;
  moodBox.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
});

shrinkBtn.addEventListener("click", () => {
  if (boxSize > 70) {
    boxSize -= 20;
    moodBox.style.width = `${boxSize}px`;
    moodBox.style.height = `${boxSize}px`;
  }
});

// ===== 3. DAY/NIGHT MODE =====
let isNight = false;
toggleModeBtn.addEventListener("click", () => {
  isNight = !isNight;
  if (isNight) {
    body.style.backgroundColor = "#050505ff";
    h.style.color = "white";
    body.style.color = "white";
    moodBox.style.background = "linear-gradient(135deg, #141e30, #243b55)";
  } else {
    body.style.backgroundColor = "#f5f7fa";
    h.style.color = "#050505ff";
    body.style.color = "#333";
    moodBox.style.background = "linear-gradient(135deg, #6dd5fa, #2980b9)";
  }
});

// ===== 4. SECRET MESSAGE TOGGLE =====
showSecretBtn.addEventListener("click", () => {
  secretVisible = !secretVisible;
  secretMessage.style.display = secretVisible ? "block" : "none";
});

/*
QUESTION: WHAT IS THE DIFFERENCE BETWEEN ".INNERHTML" AND ".INNERTEXT"?

ANSWER:

.INNERHTML returns or sets the HTML markup (includes tags and elements).

.INNERTEXT returns or sets only the visible text inside an element, excluding HTML tags.
*/
