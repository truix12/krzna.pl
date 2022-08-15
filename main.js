const btn = document.querySelectorAll('li a');

const offerDiv = document.querySelector(".offer");
const executionDiv = document.querySelector(".execution")
const contactDiv = document.querySelector(".footer-div")

let bo = btn[0];
let be = btn[1];
let bc = btn[2];

for (const b of btn) {
  b.addEventListener("click", function() {
    if (b.className == "btn-offer") {
      offerDiv.scrollIntoView( {
        behavior: 'smooth'
      });
    }
    if (b.className == "btn-execution") {
      executionDiv.scrollIntoView( {
        behavior: 'smooth'
      });
    }
    else if (b.className == "btn-contact") {
      contactDiv.scrollIntoView( {
        behavior: 'smooth'
      });
    }
  })
}