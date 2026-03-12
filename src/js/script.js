document.querySelector(".btn-primary").addEventListener("click", function (event) {

    const btn = document.querySelector("#button");

    btn.addEventListener("click", function (event) {
        event.preventDefault();

        const emailInput = document.querySelector("#email");
        const savedEmail = document.querySelector("#savedEmail");

        savedEmail.textContent = emailInput.value;
    });
});




FN
document.querySelector("#button").addEventListener("click", function (event) {

    const firstName = document.querySelector("#firstName");
const savedFirstName = document.querySelector("#savedFirstName");

    savedFirstName.textContent = firstName.value;
});


LN
document.querySelector("#button").addEventListener("click", function (event) {

    const lastNameInput = document.querySelector("#lastName");
    const savedLastName = document.querySelector("#savedLastName");

    savedLastName.textContent = lastNameInput.value;
});


E
document.querySelector("#button").addEventListener("click", function (event) {

   const emailInput = document.querySelector("#email");
   const savedEmail = document.querySelector("#savedEmail");

   savedEmail.textContent = emailInput.value;
});


P
document.querySelector("#button").addEventListener("click", function (event) {

  const passwordInput = document.querySelector("#password");
  const savedPassword = document.querySelector("#savedPassword");

  savedPassword.textContent = passwordInput.value;
});


C
document.querySelector("#button").addEventListener("click", function (event) {

    const countrySelect = document.querySelector("#country");
    const savedCountry = document.querySelector("#savedCountry");

    savedCountry.textContent = countrySelect.value;
});


AT
document.querySelector("#button").addEventListener("click", function (event) {

   const accountSelect = document.querySelector("#account");
   const savedAccount = document.querySelector("#savedAccount");

   savedAccount.textContent = accountSelect.value;
});


AY
document.querySelector("#button").addEventListener("click", function (event) {

const aboutYouInput = document.querySelector("#aboutYou");
const savedAboutYou = document.querySelector("#savedAboutYou");

savedAboutYou.textContent = aboutYouInput.value;
});

