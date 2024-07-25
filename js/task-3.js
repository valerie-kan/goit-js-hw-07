const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const onInputFill = () => {
    if (inputEl.value.trim() !== '') {
    outputEl.textContent = inputEl.value.trim();
    } else outputEl.textContent = 'Anonymous';
}

inputEl.addEventListener('input', onInputFill);