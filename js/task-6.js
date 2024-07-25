function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.querySelector('#boxes');
const inputNumEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');

const onCreateDiv = () => {
  divEl.innerHTML = '';
  if (inputNumEl.value >= 1 && inputNumEl.value <= 100) {
    createBoxes(inputNumEl.value);
  }
  inputNumEl.value = '';
}

const createBoxes = (amount) => {
  let divArray = [];
  let size = 30;
  let i = 1; 
  while (i <= amount) {
    const createDivCont = document.createElement('div');
    createDivCont.classList.add('new-box');
    createDivCont.style.height = `${size}px`;
    createDivCont.style.width = `${size}px`;
    createDivCont.style.backgroundColor = getRandomHexColor();
    divArray.push(createDivCont);
    size +=10
    i++;
  }
  divEl.append(...divArray);
}


const destroyBoxes = () => {
  divEl.innerHTML = '';
}


inputNumEl.addEventListener('input', () => inputNumEl.value);
createBtnEl.addEventListener('click', onCreateDiv);
destroyBtnEl.addEventListener('click', destroyBoxes);

 
    
