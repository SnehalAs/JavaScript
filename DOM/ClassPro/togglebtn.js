let headingEl = document.getElementById("heading");
let isChecked = true;
function changeHeading() {
  if (isChecked === true) {
    headingEl.textContent = "Snehal";
    isChecked = false;
  } else {
    headingEl.textContent = "Apurv";
    isChecked = true;
  }
}
