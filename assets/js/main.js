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

document.querySelectorAll('a[href^="#"]').forEach(block => {
  block.addEventListener("click", (event) => {
    event.preventDefault();

    const href = block.getAttribute('href');
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
      block: "start"
    });
  });
});

const burgerMenuBtn = document.querySelector(".burgerMenuBtn");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
let flag = false;

burgerMenuBtn.addEventListener("click", () => {
  if(!flag){
    line1.style.top = "7px";
    line3.style.bottom = "7px";
    setTimeout(() => {
      line2.style.display = "none";

      line1.style.rotate = "40deg";
      line3.style.rotate = "-40deg";
    }, 200);

    flag = true;
  }else{
    line1.style.rotate = "0deg";
    line3.style.rotate = "0deg";
    setTimeout(() => {
      line2.style.display = "block";

      line1.style.top = "0px";
      line3.style.bottom = "0px";
    }, 200);

    
    

    flag = false;
  }
})