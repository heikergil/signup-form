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
    

if (fname.value == "" || fname.value == " " || fname.value == null) 
{
    fnameWarning.classList.remove("hidden");
    fnameWarning.innerHTML = "First name cannot be empty";
    fname.classList.add('red_border');
    return false;
} else { 
    fnameWarning.classList.add("hidden");
    fnameWarning.innerHTML = "";
    fname.classList.remove('red_border');
    };

if (lname.value == " " || lname.value == "" || lname.value == null){
    lnameWarning.classList.remove("hidden");
    lnameWarning.innerHTML = "Last name cannot be empty";
    lname.classList.add('red_border');
    return false;
} else {
    lnameWarning.classList.add("hidden");
    lnameWarning.innerHTML = "";
    lname.classList.remove('red_border');
}
if (email.value == " " || email.value ==  "" || email.value ==  null){
    emailWarning.classList.remove("hidden");
    emailWarning.innerHTML = "You must enter avalid email";
    email.classList.add('red_border');
    email.placeholder = "";
    return false;
} else {
    emailWarning.classList.add("hidden");
    emailWarning.innerHTML = "";
    email.classList.remove('red_border');
    email.placeholder = "";
  };
if (password.value == " " || password.value == "" || password.value == null){
    passwordWarning.classList.remove("hidden");
    passwordWarning.innerHTML = "Password cannot be empty";
    password.classList.add('red_border');
    password.placeholder = "";
    return false;    
} else {
    passwordWarning.classList.add("hidden");
    passwordWarning.innerHTML = "";
    password.classList.remove('red_border');
    password.placeholder = "";
   };

 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    emailWarning.classList.add("hidden");
    emailWarning.innerHTML = "";
    email.classList.remove('red_border');

         
  } else {
      emailWarning.classList.remove("hidden");
      emailWarning.innerHTML = "Looks like this is not an email";
      email.classList.add('red_border');
      email.value= "email@example.com";
      return false;

  };
const msg = "welcome " + fname.value;
  alert(msg);

    
}


