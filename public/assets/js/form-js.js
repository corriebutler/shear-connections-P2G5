const contactSubmitBtn = document.querySelector("#contact-btn")
const cosmoSubmitBtn = document.querySelector("#sign-up-btn")
const formEl = document.querySelector('#signUpForm');

function cosmoFormSubmission(event) {
    // All page not to refresh after hitting submit
    event.preventDefault();

    const first_nameEl = document.querySelector("#fn-input").value;
    const last_nameEl = document.querySelector("#ln-input").value;
    const user_nameEl = document.querySelector("#un-input").value;
    const passwordEL = document.querySelector("#pw-input").value;
    const mobile_numberEL = document.querySelector("#mn-input").value;
    const emailEL = document.querySelector("#email-input").value;
    const men_haircutEL = document.querySelector("#men_haircut").checked;
    const shaveEL = document.querySelector("#shave").checked;
    const cosmo_bioEL = document.querySelector("#cosmo-bio").value;

    console.log(first_nameEl, last_nameEl, user_nameEl, mobile_numberEL, emailEL, cosmo_bioEL);
    console.log(men_haircutEL);
    console.log(shaveEL);

    // Reset all form input entries once it's been submitted
    formEl.reset();
};

// function contactFormSubmission(event) {
//     // All page not to refresh after hitting submit
//     event.preventDefault();

//     const formData = new FormData(formEl);
    
//     console.log(formData);

//     // Reset all form input entries once it's been submitted
//     formEl.reset();
// };

// When the submit button is clicked, call the contactFormSubmission function
// contactSubmitBtn.addEventListener("click", contactFormSubmission);
cosmoSubmitBtn.addEventListener("click", cosmoFormSubmission);