const lifeCount = document.querySelector("#lifeCount");
const coin = document.querySelector("#coinCount");
let life = 0;
let coinValue = 100;
document.querySelectorAll(".love_btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    lifeCount.innerHTML = ++life;
  });
});
