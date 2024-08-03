const chooseBtn = document.getElementById("chooseBtn");
const howDoWeCleaning = document.getElementById("howDoWeCleaning");

chooseBtn.addEventListener("click", () => {
  howDoWeCleaning.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

const costCalculationBtn = document.getElementById("costCalculationBtn");
const costCalculation = document.getElementById("costCalculation");

costCalculationBtn.addEventListener("click", () => {
  costCalculation.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

const onUpBtn = document.getElementById("onUpBtn");
const background = document.querySelector(".background");

onUpBtn.addEventListener("click", () => {
  background.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});


const burgerMenuBtn = document.querySelector(".burgerMenuBtn");
const mobileNavigationBlock = document.querySelector(".mobileNavigationBlock");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
let flag = false;

function burgerMenu(){
  if(!flag){
    mobileNavigationBlock.style.display = "block";

    line1.style.top = "7px";
    line3.style.bottom = "7px";
    setTimeout(() => {
      mobileNavigationBlock.style.opacity = 1;
      mobileNavigationBlock.style.top = "90px";

      line2.style.display = "none";

      line1.style.rotate = "40deg";
      line3.style.rotate = "-40deg";
    }, 100);

    flag = true;
  }else{
    mobileNavigationBlock.style.opacity = 0;
    mobileNavigationBlock.style.top = "80px";

    line1.style.rotate = "0deg";
    line3.style.rotate = "0deg";
    setTimeout(() => {
      mobileNavigationBlock.style.display = "none";

      line2.style.display = "block";

      line1.style.top = "0px";
      line3.style.bottom = "0px";
    }, 100);

    flag = false;
  }
}

document.addEventListener("click", (event) => {
  const checkHeader = header.contains(event.target);
  const checkMobileNavigationBlock = mobileNavigationBlock.contains(event.target);

  if(!checkHeader && !checkMobileNavigationBlock && flag){
    burgerMenu();
  }
})

burgerMenuBtn.addEventListener("click", () => {
  burgerMenu();
})


document.querySelectorAll('a[href^="#"]').forEach(block => {
  block.addEventListener("click", (event) => {
    event.preventDefault();

    const href = block.getAttribute('href');
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
      block: "start"
    });
    
    if(window.innerWidth < 950){
      setTimeout(() => {
        header.style.top = "-92px";
      }, 800);
      
      burgerMenu();
    };

  });
})

let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-92px";
    }

    prevScrollPos = currentScrollPos;
}

