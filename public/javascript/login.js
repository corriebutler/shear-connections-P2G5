const cancelBtn = document.querySelector("#cancel-btn");
const loginBtn = document.querySelector("#login-btn-modal");

function loginFormHandler(event) {
  event.preventDefault();

  const userName = document.querySelector("#username").value.trim();
  const password = document.querySelector("#pw-input").value.trim();

  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      username: userName,
      password: password,
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

loginBtn.addEventListener("click", loginFormHandler);
cancelBtn.addEventListener("click", cancelBtnSubmission);
