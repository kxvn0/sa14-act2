const registrationForm = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});


function validateForm() {
    clearErrors();
    const usernameValue = usernameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    let isValid = true;

    if (usernameValue.length < 6) {
        setError(usernameError, 'Username must be at least 6 characters in length');
        isValid = false;
    }

    if (!isValidEmail(emailValue)) {
        setError(emailError, 'Email is not valid.');
        isValid = false;
    }

    if (passwordValue.length < 8 || !/\d/.test(passwordValue) || !/[A-Z]/.test(passwordValue)) {
        setError(passwordError, 'The password must be at least 8 characters and contain at least one capital letter and one number');
        isValid = false;
    }


    if (isValid) {
        alert('Registration successful!')
        registrationForm.reset();
    }
}

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function setError(element, message) {
    element.textContent = message;
}

function clearErrors() {
    setError(usernameError, '');
    setError(emailError, '');
    setError(passwordError, '');
}

