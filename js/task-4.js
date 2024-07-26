const formEl = document.querySelector('.login-form');
const emailInputEl = document.querySelector('[type="email"]');
const passInputEl = document.querySelector('[type="password"]');


const onFormSend = (event) => {
    event.preventDefault();

    const formObj = {
        email: emailInputEl.value.trim(),
        password: passInputEl.value.trim(),
    };

    if (emailInputEl.value.trim() !== '' && passInputEl.value.trim() !== '') {
        console.log(formObj);
        formEl.reset();
    } else alert('All form fields must be filled in');
}


formEl.addEventListener('submit', onFormSend);