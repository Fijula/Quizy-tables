const first = document.getElementById("first");
first.innerText = Math.ceil(Math.random() * 10);

const second = document.getElementById("second");
second.innerText = Math.ceil(Math.random() * 10);

const scoreid = document.getElementById("score");
const form1 = document.getElementById("form");
const ansinput = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("value")) || 0;
scoreid.innerText = score;

const result = first.innerText * second.innerText;

form1.addEventListener("submit", (event) => {
  event.preventDefault();

  const ans = +ansinput.value;
  console.log(score);
  console.log(ans, "ans");

  if (ans === result) {
    score++;
  } else {
    score--;
  }

  scoreid.innerText = score;
  localStorage.setItem("value", JSON.stringify(score));
});



