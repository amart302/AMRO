const whyAreWeBtn = document.getElementById("whyAreWeBtn");
const whyAreWeBlock = document.querySelector(".Why_are_we");

whyAreWeBtn.addEventListener("click", () => {
  whyAreWeBlock.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

const howDoWeCleaningBtn = document.getElementById("howDoWeCleaningBtn");
const howDoWeCleaningBlock = document.querySelector(".How_do_we_do_the_cleaning");
const chooseBtn = document.getElementById("chooseBtn");


howDoWeCleaningBtn.addEventListener("click", () => {
  howDoWeCleaningBlock.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

chooseBtn.addEventListener("click", () => {
  howDoWeCleaningBlock.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

const servicesBtn = document.getElementById("servicesBtn");
const additionalServicesBlock = document.querySelector(".Additional_services");

servicesBtn.addEventListener("click", () => {
  additionalServicesBlock.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

const costCalculationBtn = document.getElementById("costCalculationBtn");
const costCalculationBlock = document.querySelector(".Cost_calculation");

costCalculationBtn.addEventListener("click", () => {
  costCalculationBlock.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});