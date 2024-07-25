const formEl = document.querySelector('.login-form');
const emailInputEl = document.querySelector('[type="email"]');
const passInputEl = document.querySelector('[type="password"]');


const onFormSend = (event) => {
    event.preventDefault();

    if (emailInputEl.value.trim() === '' || passInputEl.value.trim() === '') {
        alert('All form fields must be filled in')
    };
    
    const formObj = {
        email: emailInputEl.value.trim(),
        password: passInputEl.value.trim(),
    };

    console.log(formObj);

    formEl.reset();
}


formEl.addEventListener('submit', onFormSend);