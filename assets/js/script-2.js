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
    linkToTelegram: "",
    linkToWhatsApp: "https://wa.me/+79380070304",
  },
  {
    title: "Чеченская Республика",
    phoneNumber: "8-938-887-01-02",
    linkToTelegram: "",
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
if(!region){

}

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