const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const numberInput = document.querySelector('.number-input');
const totalPrice = document.getElementById('total-one');
let price = parseInt(totalPrice.textContent);
plusBtn.addEventListener('click', () => {
  let currentValue = parseInt(numberInput.value);
  numberInput.value = currentValue + 1;
  price +=110;
  totalPrice.textContent = price;
});

minusBtn.addEventListener('click', () => {
  let currentValue = parseInt(numberInput.value);
  if (currentValue > 1) {
    numberInput.value = currentValue - 1;
    price -=110;
    totalPrice.textContent = price;
  }
});
