const form = document.getElementById("trialform");
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const fnameWarning = document.getElementById('fnameWarning');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});


function formSubmit(fsumit) {
    
if (fname.value = " " || "" || null){
    fnameWarning.classList.remove("hidden");
    fnameWarning.innerHTML = "First name cannot be empty";
    fname.classList.add('red_border');
};
if (lname.value = " " || "" || null){
    lnameWarning.classList.remove("hidden");
    lnameWarning.innerHTML = "Last name cannot be empty";
    lname.classList.add('red_border');
};
if (email.value = " " || "" || null){
    emailWarning.classList.remove("hidden");
    emailWarning.innerHTML = "You must enter avalid email";
    email.classList.add('red_border');
    email.value = "";
    email.placeholder = "";
};
if (password.value = " " || "" || null){
    passwordWarning.classList.remove("hidden");
    passwordWarning.innerHTML = "password cannot be empty";
    password.classList.add('red_border');
    password.value = "";
    password.placeholder = "";    
}
if (password.value.lenght < 6) {
    passwordWarning.classList.remove("hidden");
    password.classList.add('red_border');
    password.value = "";
    password.placeholder = "";    
}
    
};
