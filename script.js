const plusBtns = document.querySelectorAll('.plus-btn');
const minusBtns = document.querySelectorAll('.minus-btn');
const numberInputs = document.querySelectorAll('.number-input');
const totalPrices = document.querySelectorAll('#total-one');
let prices = Array.from(totalPrices).map(el => parseInt(el.textContent));

plusBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    let currentValue = parseInt(numberInputs[index].value);
    numberInputs[index].value = currentValue + 1;
    prices[index] += 110;
    totalPrices[index].textContent = prices[index];
    console.log("clicked");
  });
});

minusBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    let currentValue = parseInt(numberInputs[index].value);
    if (currentValue > 1) {
      numberInputs[index].value = currentValue - 1;
      prices[index] -= 110;
      totalPrices[index].textContent = prices[index];
    }
  });
});
