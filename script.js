const $id = (id) => document.getElementById(id);
const $q = (q) => document.querySelector(q);
const $qa = (q) => document.querySelectorAll(q);

const main = $q("main");
const submit = $id("submit");
const modal = $id("thank-you-modal");
const userRating = $id("user-rating");
const tooltip = $id("required-tooltip");
const inputs = $qa("input");
let rating = $q("input[type='radio'][name='rate']:checked");

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    rating = $q("input[type='radio'][name='rate']:checked");
  });
});

submit.addEventListener("click", (e) => {
  if (!rating?.value) {
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";
    setTimeout(() => {
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = "0";
    }, 2000);
  } else {
    userRating.innerHTML = rating.value;
    modal.style.visibility = "visible";
    main.style.visibility = "hidden";
    rating.checked = false;
  }
});
