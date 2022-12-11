const bigContainer = document.querySelector(".big-container");
const thank = document.getElementById("thanks");
const visa = document.getElementById("visa");


const buy = document.querySelectorAll(".js-buy");
buy.forEach(item => {
    item.addEventListener("click", (eo) => {
 bigContainer.classList.add("active");
  eo.preventDefault();
  thanks.style.display = "none";
  visa.style.display = "block";
    })
});


const btnYess = document.querySelectorAll(".yes");
btnYess.forEach(item => {
    item.addEventListener("click", (eo) => {
        thanks.style.display = "block";
        visa.style.display = "none";
        setTimeout(() => {
          thanks.style.display = "none";
          bigContainer.classList.remove("active");
        }, 3000);
    })
    
});


const dark = document.getElementById("dark");
const body = document.getElementById("body");
dark.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
});

const bigAbout = document.querySelector(".bigAbout");
const about = document.getElementById("aboutus");
about.addEventListener("click", (eo) => {
  bigAbout.style.display = "block";
});

const backHome = document.getElementById("about");
backHome.addEventListener("click", (eo) => {
  bigAbout.style.display = "none";
});

const contact = document.querySelector(".contact");
const bigContact = document.querySelector(".bigContact");
contact.addEventListener("click", (eo) => {
  bigContact.classList.add("activeContact");

});

const back = document.getElementById("back");
back.addEventListener("click", (eo) => {
  bigContact.classList.remove("activeContact");
  
});


