const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let passwordButton = document.getElementById("passwordButton");
let passwordBtn = document.getElementById("passwords");
let passwordBtn2 = document.getElementById("password2");

let passwordLength = 15;

passwordButton.addEventListener("click", function () {
  let passwords1 = [];
  let passwords2 = [];
  for (i = 0; i < passwordLength && i < characters.length; i++) {
    let newPassword = characters[Math.floor(Math.random() * characters.length)];
    // console.log("ONE WORD", newPassword);
    passwords1.push(newPassword);
  }

  for (j = 0; j < passwordLength && j < characters.length; j++) {
    let newPassword = characters[Math.floor(Math.random() * characters.length)];
    // console.log("ONE WORD", newPassword);
    passwords2.push(newPassword);
  }
  console.log("PASS1", passwords1);
  console.log("PASS2", passwords2);
  passwordBtn.textContent = passwords1.join("");
  passwordBtn2.textContent = passwords2.join("");
});
