const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");

let currentIndex = 0;
const intervalTime = 3000; // Time between slides
const transitionTime = 500; // Transition time

function nextSlide() {
  // Move to the next item
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

function updateCarousel() {
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Slide the carousel
}

// Set interval for autoplay
setInterval(nextSlide, intervalTime);

// Initially set the active class
updateCarousel();

var crrncy = { EUR: { SUM: 13570, USD: 1.07 }, USD: { SUM: 12700, EUR: 0.94 } };
var btn = document.querySelector(".calculate-btn");
var baseCurrencyInput = document.getElementById("currency-1");
var secondCurrencyInput = document.getElementById("currency-2");
var amountInput = document.getElementById("amounnt");
var toShowAmount = document.querySelector(".given-amount");
var toShowBase = document.querySelector(".base-currency");
var toShowSecond = document.querySelector(".second-currency");
var toShowResult = document.querySelector(".final-result");

function convertCurrency(event) {
  event.preventDefault();
  var amount = parseFloat(amountInput.value);
  var from = baseCurrencyInput.value;
  var to = secondCurrencyInput.value;
  var result = 0;

  try {
    if (from === to) {
      result = amount.toFixed(1); // Limit result to two decimal places
    } else {
      result = (amount * crrncy[from][to]).toFixed(1); // Limit result to two decimal places
    }
  } catch (err) {
    result = (amount * (1 / crrncy[to][from])).toFixed(1); // Limit result to two decimal places
  }

  toShowAmount.innerHTML = amount.toFixed(1); // Limit amount to two decimal places
  toShowBase.textContent = from + " = ";
  toShowSecond.textContent = to;
  toShowResult.textContent = result;
}

btn.addEventListener("click", convertCurrency);




document.getElementById("amountRange").addEventListener("input", function () {
  document.getElementById("amountInput").value = this.value;
});

document.getElementById("months").addEventListener("input", function () {
  document.getElementById("monthsInput").value = this.value;
});

document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateLoan);

function calculateLoan() {
  const amountt = document.getElementById("amountInput").value;
  const interestRate = 20/ 100 / 12; // 20% annual interest rate
  const months = document.getElementById("monthsInput").value;

  const x = Math.pow(1 + interestRate, months);
  const monthlyPayment = (amountt * x * interestRate) / (x - 1);

  if (!isNaN(monthlyPayment) && monthlyPayment !== Infinity) {
    document.getElementById("monthlyPaymentResult").innerText =
      monthlyPayment.toFixed(2);
    document.getElementById("totalPaymentResult").innerText = (
      monthlyPayment * months
    ).toFixed(2);
    document.getElementById("totalInterestResult").innerText = (
      monthlyPayment * months -
      amountt
    ).toFixed(2);
  } else {
    document.getElementById("monthlyPaymentResult").innerText =
      "0";
    document.getElementById("totalPaymentResult").innerText =
      "0";
    document.getElementById("totalInterestResult").innerText =
      "0";
  }
}


