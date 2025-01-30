let socialBtn = document.getElementById("social-tag");
let bioBtn = document.getElementById("bio-tag");
let certificateBtn = document.getElementById("certificate-tag");
let skillsBtn = document.getElementById("skills-tag");
const scrollTo = [130, 320];
socialBtn.addEventListener("click", (e) => {
  changeDir(e);
});
bioBtn.addEventListener("click", (e) => {
  changeDir(e);
});
certificateBtn.addEventListener("click", (e) => {
  changeDir(e);
});
skillsBtn.addEventListener("click", (e) => {
  changeDir(e);
});

function changeDir(e) {
  console.log(e.currentTarget.innerHTML);
  let scrollPx;
  if (e.currentTarget.innerHTML == "Social Media Links") {
    scrollPx = 320;
  } else if (e.currentTarget.innerHTML == "Biography") {
    scrollPx = 130;
  } else if (e.currentTarget.innerHTML == "Certificates") {
    scrollPx = 630;
  } else {
    scrollPx = 1020;
  }
  window.scrollTo({
    top: scrollPx,
    left: 0,
    behavior: "smooth",
  });
}
