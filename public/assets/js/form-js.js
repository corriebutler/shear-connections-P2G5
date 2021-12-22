const contactSubmitBtn = document.querySelector("#contact-btn")
const formEl = document.forms.contactForm;

function contactFormSubmission(event) {
    // All page not to refresh after hitting submit
    event.preventDefault();

    const formData = new FormData(formEl);
    
    console.log(formData);

    // Reset all form input entries once it's been submitted
    formEl.reset();
};

// When the submit button is clicked, call the contactFormSubmission function
contactSubmitBtn.addEventListener("click", contactFormSubmission);