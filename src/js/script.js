document.querySelector(".btn-primary").addEventListener("click", function (event) {

    const btn = document.querySelector("#button");

    btn.addEventListener("click", function (event) {
        event.preventDefault();

        const emailInput = document.querySelector("#email");
        const savedEmail = document.querySelector("#savedEmail");

        savedEmail.textContent = emailInput.value;
        const jsonString = JSON.stringify(user);
        console.log(jsonString);

    });
});




FN
document.querySelector("#button").addEventListener("click", function (event) {

    const firstName = document.querySelector("#firstName");
const savedFirstName = document.querySelector("#savedFirstName");
 savedFirstName.textContent = userObj.firstName;
    savedFirstName.textContent = firstName.value;


});


LN
document.querySelector("#button").addEventListener("click", function (event) {

    const lastNameInput = document.querySelector("#lastName");
    const savedLastName = document.querySelector("#savedLastName");
    savedLastName.textContent = userObj.lastName;

    savedLastName.textContent = lastNameInput.value;
   
});


E
document.querySelector("#button").addEventListener("click", function (event) {

   const emailInput = document.querySelector("#email");
   const savedEmail = document.querySelector("#savedEmail");
    savedEmail.textContent = userObj.email;

   savedEmail.textContent = emailInput.value;
});


P
document.querySelector("#button").addEventListener("click", function (event) {

  const passwordInput = document.querySelector("#password");
  const savedPassword = document.querySelector("#savedPassword");
  savedPassword.textContent = userObj.password;

  savedPassword.textContent = passwordInput.value;
});


C
document.querySelector("#button").addEventListener("click", function (event) {

    const countrySelect = document.querySelector("#country");
    const savedCountry = document.querySelector("#savedCountry");
    savedCountry.textContent = userObj.country;

    savedCountry.textContent = countrySelect.value;
});


AT
document.querySelector("#button").addEventListener("click", function (event) {

   const accountSelect = document.querySelector("#account");
   const savedAccount = document.querySelector("#savedAccount");
    savedAccountType.textContent = userObj.accountType;

   savedAccount.textContent = accountSelect.value;
});


AY
document.querySelector("#button").addEventListener("click", function (event) {

const aboutYouInput = document.querySelector("#aboutYou");
const savedAboutYou = document.querySelector("#savedAboutYou");
    savedAbout.textContent = userObj.about;

savedAboutYou.textContent = aboutYouInput.value;


});

