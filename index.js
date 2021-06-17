const form = document.getElementById("form");
const emailContainer = document.getElementById("email")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailVal = form.querySelector("input").value;

    if(!validateEmail(emailVal)) {
        showError("Please Enter a valid email address");
        emailContainer.value = "";
    } 
    

    
    
});

const showError = (msg) => {
    const error = document.querySelector(".error-msg small");
    error.innerText = msg;
    setTimeout(() => {
        error.innerText = "";
    }, 1000);
}


const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}