const contactSubmitBtn = document.querySelector("#contact-btn")
const cosmoSubmitBtn = document.querySelector("#sign-up-btn")
const formEl = document.querySelector('#signUpForm');

function cosmoFormSubmission(event) {
    // All page not to refresh after hitting submit
    event.preventDefault();

    const first_nameEl = document.querySelector("#fn-input").value;
    const last_nameEl = document.querySelector("#ln-input").value;
    const usernameEl = document.querySelector("#un-input").value;
    const passwordEl = document.querySelector("#pw-input").value;
    const mobile_numberEl = document.querySelector("#mn-input").value;
    const emailEl = document.querySelector("#email-input").value;
    const locationEl = document.querySelector("#location-input").value;
    const men_haircutEl = document.querySelector("#men_haircut").checked;
    const shaveEl = document.querySelector("#shave").checked;
    const women_haircutEl = document.querySelector("#women_haircut").checked;
    const cosmo_bioEl = document.querySelector("#cosmo-bio").value;

    console.log(first_nameEl, last_nameEl, usernameEl, mobile_numberEl, emailEl, cosmo_bioEl);
    console.log(men_haircutEl);
    console.log(shaveEl);

    fetch("/api/cosmo", {
        method: 'POST',
        body: JSON.stringify({
            first_name: first_nameEl,
            last_name: last_nameEl,
            username: usernameEl,
            password: passwordEl,
            mobile_number: mobile_numberEl,
            email: emailEl,
            location: locationEl,
            men_haircut: men_haircutEl,
            shave: shaveEl,
            women_haircut: women_haircutEl,
            cosmo_bio: cosmo_bioEl
        }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(function () {
            // document.location.replace('/');
        })
        .catch(err => console.log(err));

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
cosmoSubmitBtn.addEventListener("submit", cosmoFormSubmission);