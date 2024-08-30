let bulbImgEl = document.getElementById("bulbId");
let catImgEl = document.getElementById("catId");
let offBtnEl = document.getElementById("off-btn");
let onBtnEl = document.getElementById("on-btn");
let textEl = document.getElementById("text");

function onHideCat() {
  //console.log("hide function running")
  bulbImgEl.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  catImgEl.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  textEl.textContent = "Switched Off";
  offBtnEl.style.backgroundColor = "gray";
  onBtnEl.style.backgroundColor = "green";
  bulbImgEl.style.display = "block";
  catImgEl.style.display = "block";
}
function onShowCat() {
  // console.log("show function running")
  bulbImgEl.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  catImgEl.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  textEl.textContent = "Switched On";
  onBtnEl.style.backgroundColor = "gray";
  offBtnEl.style.backgroundColor = "red";
  bulbImgEl.style.display = "block";
  catImgEl.style.display = "block";
}
