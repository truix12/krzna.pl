const btnOffer = document.querySelector(".btn-offer");
const btnExecution = document.querySelector(".btn-execution");
const btnContact = document.querySelector(".btn-contact");

const offerDiv = document.querySelector(".offer");
const executionDiv = document.querySelector(".execution")
const contactDiv = document.querySelector(".footer-div")

btnOffer.addEventListener("click", myFunctionOffer)

function myFunctionOffer() {
  offerDiv.scrollIntoView( {
    behavior: 'smooth'
  });
}

btnExecution.addEventListener("click", myFunctionExecution)

function myFunctionExecution() {
  executionDiv.scrollIntoView( {
    behavior: 'smooth'
  });
}

btnContact.addEventListener("click", myFunctionContact)

function myFunctionContact() {
  contactDiv.scrollIntoView( {
    behavior: 'smooth'
  });
}