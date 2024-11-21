function check()
{
    const emailform = document.getElementById('InputEmail');
    const loginform = document.getElementById('InputLogin');
    const passwordform = document.getElementById('InputPassword');
    const phoneform = document.getElementById('InputPhone');
    const ageform = document.getElementById('InputAge');
    
    ageform.classList.add('is-indalid')
    
    const regexPatternEmail =/(?:[a-z0-9!#$%&*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&*+/=?^_{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm;      
    const regexPatternNumber = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/gm;
    
    let isValidEmail = regexPatternEmail.test(emailform.value);
    let isValidPassword = passwordform.value.length > 3;
    let isValidLogin = loginform.value.length > 3;
    let isValidNumber = regexPatternNumber.test(phoneform.value);
    let isValidAge = parseInt(ageform.value) >= 18 && parseInt(ageform.value) <= 90;

    console.log(isValidEmail);
    console.log(isValidPassword);
    console.log(isValidLogin);
    console.log(isValidNumber);
    console.log(isValidAge);

    if (!isValidEmail){
        InputEmail.classList.add('is-invalid');
        InputEmail.classList.remove('is-valid');
    }
    else
    {
        InputEmail.classList.remove('is-invalid');
    }
    if (!isValidLogin){
        InputLogin.classList.add('is-invalid');
        InputLogin.classList.remove('is-valid');
    }
    else
    {
        InputLogin.classList.remove('is-invalid');
    }
    if (!isValidNumber){
        InputPhone.classList.add('is-invalid');
        InputPhone.classList.remove('is-valid');
    }
    else
    {
        InputPhone.classList.remove('is-invalid');
    }
    if (!isValidPassword){
        InputPassword.classList.add('is-invalid');
        InputPassword.classList.remove('is-valid');
    }
    else
    {
        InputPassword.classList.remove('is-invalid');
    }
    if (!isValidAge){
        InputAge.classList.add('is-invalid');
        InputAge.classList.remove('is-valid');
    }
    else
    {
        InputAge.classList.remove('is-invalid');
    }
    if(isValidEmail && isValidPassword && isValidLogin && isValidEmail && isValidNumber && isValidAge)
    {
        alert('Вы успешно зарегистрировались')
    }
}
