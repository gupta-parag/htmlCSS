let text = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

let colors = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function randColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colors[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

console.log(text.length);
const effect = document.querySelector("div");

function generateRandomText() {
  let randString = "";
  for (let i = 0; i < 5000; i++) {
    const index = Math.floor(Math.random() * 61);
    randString += text[index];
  }
  effect.innerText = randString;
  // effect.style.color = randColor();
}
generateRandomText();
effect.addEventListener("mousemove", generateRandomText);
