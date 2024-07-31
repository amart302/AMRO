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
const header = document.querySelector("header");

onUpBtn.addEventListener("click", () => {
  header.scrollIntoView({
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
