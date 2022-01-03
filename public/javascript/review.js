const signUpBtn = document.querySelector("#sign-up-btn");
const cancelBtn = document.querySelector("#cancel-btn");

function reviewFormHandler(event) {
  event.preventDefault();

  const ratingEl = document.querySelector("#rating").value;
  const cosmoIDEl = document.querySelector("#cosmoID").value;
  const reviewEl = document.querySelector("#comment").value;

  fetch("/api/ratings", {
    method: "POST",
    body: JSON.stringify({
      value: ratingEl,
      cosmo_id: cosmoIDEl,
      comment: reviewEl,
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

signUpBtn.addEventListener("click", reviewFormHandler);
cancelBtn.addEventListener("click", cancelBtnSubmission);
