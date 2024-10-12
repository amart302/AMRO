const contacts = [
  {
    title: "Москва",
    phoneNumber: "8-928-099-55-51",
    linkToTelegram: "",
    linkToWhatsApp: "https://wa.me/+79280995551",
  },
  {
    title: "Республика Ингушетия",
    phoneNumber: "8-938-007-03-04",
    linkToTelegram: "https://t.me/amarthh",
    linkToWhatsApp: "https://wa.me/+79380070304",
  },
  {
    title: "Чеченская Республика",
    phoneNumber: "8-938-887-01-02",
    linkToTelegram: "https://t.me/amarthh",
    linkToWhatsApp: "https://wa.me/+79388870102",
  },
];

let region = sessionStorage.getItem("region");
const choosingARegionBtns = document.querySelectorAll(".choosingARegionBtn");
const phoneNumber = document.getElementById("phoneNumber");
const linkTgs = document.querySelectorAll(".linkTg");
const linkWas = document.querySelectorAll(".linkWa");
const changeTheRegionBtn = document.querySelector(".changeTheRegionBtn");
const changeTheRegionBtn2 = document.querySelector(".changeTheRegionBtn2");

const choosingARegionParentBlock = document.querySelector(
  ".choosingARegionParentBlock"
);
if (!region) {
    choosingARegionParentBlock.style.display = "flex";
    setTimeout(() => {
      choosingARegionParentBlock.style.opacity = 1;
    }, 100);
    document.body.style.overflow = "hidden";
}else{
  changeTheRegionBtn.innerHTML = `Сменить регион<br>Регион: ${region}`;
  changeTheRegionBtn2.innerHTML = `Сменить регион<br>Регион: ${region}`;
  changingTheNumberAndLinks();
}

choosingARegionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sessionStorage.setItem("region", null);
    region = sessionStorage.getItem("region");

    sessionStorage.setItem("region", btn.innerHTML);
    region = sessionStorage.getItem("region");

    changeTheRegionBtn.innerHTML = `Сменить регион<br>Регион: ${region}`;
    changeTheRegionBtn2.innerHTML = `Сменить регион<br>Регион: ${region}`;
    
    document.body.style.overflow = "auto";

    choosingARegionParentBlock.style.opacity = 0;
    setTimeout(() => {
      choosingARegionParentBlock.style.display = "none";
    }, 100);
    changingTheNumberAndLinks();
  });
});

function changingTheNumberAndLinks(){
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].title == region){
            phoneNumber.innerHTML = contacts[i].phoneNumber;
            phoneNumber.href = `tel:${contacts[i].phoneNumber}`;

            linkTgs.forEach(link => {
                link.href = contacts[i].linkToTelegram;
            });

            linkWas.forEach(link => {
                link.href = contacts[i].linkToWhatsApp;
            });
        }
    }
}


changeTheRegionBtn.addEventListener("click", () => {
  document.body.style.overflow = "hidden";

  choosingARegionParentBlock.style.display = "flex";
  setTimeout(() => {
    choosingARegionParentBlock.style.opacity = 1;
    }, 100);
});

changeTheRegionBtn2.addEventListener("click", () => {
  document.body.style.overflow = "hidden";

  choosingARegionParentBlock.style.display = "flex";
  setTimeout(() => {
    choosingARegionParentBlock.style.opacity = 1;
    }, 100);
});

const chooseBtn = document.getElementById("chooseBtn");
const howDoWeCleaning = document.getElementById("howDoWeCleaning");

chooseBtn.addEventListener("click", () => {
  howDoWeCleaning.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
})

const costCalculationBtn = document.getElementById("costCalculationBtn");
const costCalculation = document.getElementById("costCalculation");

costCalculationBtn.addEventListener("click", () => {
  costCalculation.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
})

const onUpBtn = document.getElementById("onUpBtn");
const background = document.querySelector(".background");

onUpBtn.addEventListener("click", () => {
  background.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
})


const burgerMenuBtn = document.querySelector(".burgerMenuBtn");
const mobileNavigationBlock = document.querySelector(".mobileNavigationBlock");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
let flag = false;

function burgerMenu(){
  if(!flag){
    mobileNavigationBlock.style.display = "flex";

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
    })
    
    if(window.innerWidth < 950){
      setTimeout(() => {
        header.style.top = "-92px";
      }, 800);
      
      burgerMenu();
    }

  })
})

let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos < currentScrollPos && !flag) {
      header.style.top = "-110px";
    } else {
      header.style.top = "0";
    }

    prevScrollPos = currentScrollPos;
}

