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
document.querySelectorAll(".call_btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const fullCard = btn.closest(".card");
    const cardTitle = fullCard.querySelector(".card-title").innerText;
    const cardNumber = fullCard.querySelector(".number").innerText;

    e.preventDefault();
    if (coinValue >= 20) {
      if (confirm(`Calling ${cardTitle} ${cardNumber} `)) {
        coin.innerText = coinValue -= 20;
      } else return;
    } else {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    }
  });
});
