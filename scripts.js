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
    console.log(fname.value);
if (fname.value = " " || "" || null){
    fnameWarning.classList.remove("hidden");
    fname.classList.add('red_border');



}
    
}