import './style.css';

console.log('funguju!');

const navElm = document.querySelector('nav');
const navBtnElm = document.querySelector('#nav-btn');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

const navClosed = () => {
  navElm.classList.add('nav-closed');
  console.log('navClosed');
};

const navAllElm = navElm.querySelectorAll('a');
console.log(navAllElm);
for (let i = 0; i < navAllElm.length; i += 1) {
  console.log(navAllElm[i]);
  navAllElm[i].addEventListener('click', navClosed);
}

// ------------- 4. bod ----------------------

const orderBtnElm = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector('.drink_cup');
let ordered = false;

const order = () => {
  if (ordered === false) {
    drinkCupElm.classList.add('drink__cup--selected');
    orderBtnElm.textContent = 'Zrušit';
    ordered = true;
  } else {
    drinkCupElm.classList.remove('drink__cup--selected');
    orderBtnElm.textContent = 'Objednat';
    ordered = false;
  }
};

orderBtnElm.addEventListener('click', order);

// ---------------------- 5. bod --------------------------

const layerElm = document.querySelector('.drink_info');

const layer = ({ color, label }) => {
  return `<div class="layer">
  <div class="layer__color" style="background-color: ${color}">
  </div>
  <div class ="layer__label>${label}</div>
  </div>`;
};

const coffeeOffer = [
  { color: '#feeeca', label: 'mléčná pěna' },
  { color: '#fed7b0', label: 'teplé mléko' },
  { color: '#613916', label: 'espresso' },
];

coffeeOffer.forEach((item) => {
  layerElm.innerHTML += layer(item);
});
