let socialBtn = document.getElementById("social-tag");
let bioBtn = document.getElementById("bio-tag");
const scrollTo = [50, 300];
socialBtn.addEventListener("click", (e) => {
  changeDir(e);
});
bioBtn.addEventListener("click", (e) => {
  changeDir(e);
});

function changeDir(e) {
  console.log(e.currentTarget.innerHTML);
  let scrollPx;
  if (e.currentTarget.innerHTML == "Social Media Links") {
    scrollPx = 300;
  } else {
    scrollPx = 50;
  }
  window.scrollTo({
    top: scrollPx,
    left: 0,
    behavior: "smooth",
  });
}
