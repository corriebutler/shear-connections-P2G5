const signUpBtn = document.querySelector("#sign-up-btn");
const cancelBtn = document.querySelector("#cancel-btn");

function signUpFormHandler(event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#un-input").value;
  const passwordEl = document.querySelector("#pw-input").value;

  fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl,
      password: passwordEl,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function () {
      document.location.replace("/");
    })
    .catch((err) => console.log(err));
}

function cancelBtnSubmission(event) {
  event.preventDefault();

  document.location.replace("/");
}

signUpBtn.addEventListener("click", signUpFormHandler);
cancelBtn.addEventListener("click", cancelBtnSubmission);
