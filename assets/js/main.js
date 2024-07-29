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

howDoWeCleaningBtn.addEventListener("click", () => {
  howDoWeCleaningBlock.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});