const cancelBtn = document.querySelector("#cancel-btn");
const cosmoSubmitBtn = document.querySelector("#sign-up-btn");
const formEl = document.querySelector("#signUpForm");

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
  const specialtiesEl = document.querySelector("#specialties").value;
  const cosmo_bioEl = document.querySelector("#cosmo-bio").value;

  fetch("/api/cosmo", {
    method: "POST",
    body: JSON.stringify({
      first_name: first_nameEl,
      last_name: last_nameEl,
      username: usernameEl,
      password: passwordEl,
      mobile_number: mobile_numberEl,
      email: emailEl,
      location: locationEl,
      specialties: specialtiesEl,
      cosmo_bio: cosmo_bioEl,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function () {
      document.location.replace("/");
    })
    .catch((err) => console.log(err));

  // Reset all form input entries once it's been submitted
  formEl.reset();
}

function cancelBtnSubmission(event) {
  event.preventDefault();

  document.location.replace("/");
}

cosmoSubmitBtn.addEventListener("click", cosmoFormSubmission);
cancelBtn.addEventListener("click", cancelBtnSubmission);
