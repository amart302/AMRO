const contacts = [
    {
        region: "Москва",
        phoneNumber: "8-928-099-55-51",
        linkToTelegram: "https://t.me/amarthh",
        linkToWhatsApp: "https://wa.me/+79280995551",
        latitude: { from: 55.5000, to: 56.0000 },
        longitude: { from: 37.3000, to: 37.9000 }
    },
    {
        region: "Республика Ингушетия",
        phoneNumber: "8-938-007-03-04",
        linkToTelegram: "https://t.me/amarthh",
        linkToWhatsApp: "https://wa.me/+79380070304",
        latitude: { from: 42.7000, to: 43.5000 },
        longitude: { from: 44.5000, to: 45.5000 }
    },
    {
        region: "Чеченская Республика",
        phoneNumber: "8-938-887-01-02",
        linkToTelegram: "https://t.me/amarthh",
        linkToWhatsApp: "https://wa.me/+79388870102",
        latitude: { from: 43.0000, to: 43.5000 },
        lfongitude: { from: 45.3000, to: 46.0000 }
    },
];

let region = sessionStorage.getItem("region");
const choosingARegionBtns = document.querySelectorAll(".choosingARegionBtn");
const phoneNumber = document.getElementById("phoneNumber");
const linkTgs = document.querySelectorAll(".linkTg");
const linkWas = document.querySelectorAll(".linkWa");
const changeTheRegionBtn = document.querySelector(".changeTheRegionBtn");
const changeTheRegionBtn2 = document.querySelector(".changeTheRegionBtn2");

const choosingARegionParentBlock = document.querySelector(".choosingARegionParentBlock");

if (region) {
    changeTheRegionBtn.innerHTML = `Сменить регион<br>Регион: ${region}`;
    changeTheRegionBtn2.innerHTML = `Сменить регион<br>Регион: ${region}`;
    changingTheNumberAndLinks();
}else{
    window.onload = getLocation;
}

function chooseRegionForm(){
    choosingARegionParentBlock.style.display = "flex";
    setTimeout(() => {
        choosingARegionParentBlock.style.opacity = 1;
    }, 100);
    document.body.style.overflow = "hidden";
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }else{
        chooseRegionForm();
    }
}

function showPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    // alert(`Широта: ${latitude} Долгота: ${longitude}`);
    let check = false;
    for(let i = 0; i < contacts.length; i++){
        if((latitude > contacts[i].latitude.from && latitude < contacts[i].latitude.to) && (longitude > contacts[i].longitude.from && longitude < contacts[i].longitude.to)){
            const definingRegion = confirm(`Ваш регион: ${contacts[i].region}?`);
            if(definingRegion){
                sessionStorage.setItem("region", contacts[i].region);
                region = sessionStorage.getItem("region");

                changeTheRegionBtn.innerHTML = `Сменить регион<br>Регион: ${region}`;
                changeTheRegionBtn2.innerHTML = `Сменить регион<br>Регион: ${region}`;
                changingTheNumberAndLinks();
                check = true;
            }
            break;
        }
    }
    if(!check){
        chooseRegionForm();
    }
}

function showError(err){
    switch(err.code){
        case err.PERMISSION_DENIED:
            console.log('Пользователь отклонил запрос на определение местоположения.');
            chooseRegionForm();
            break;
        case err.POSITION_UNAVAILABLE:
            console.log('Информация о местоположении недоступна.');
            chooseRegionForm();
            break;
        case err.TIMEOUT:
            console.log('Истекло время ожидания запроса на определение местоположения.');
            chooseRegionForm();
            break;
        case err.UNKNOWN_ERROR:
            console.log('Произошла неизвестная ошибка.');
            chooseRegionForm();
            break;
    }
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
        if(contacts[i].region == region){
            phoneNumber.innerHTML = contacts[i].phoneNumber;
            phoneNumber.href = `tel:${contacts[i].phoneNumber}`;

            linkTgs.forEach(link => {
                link.href = contacts[i].linkToTelegram;
                link.target = "_blank";
            });

            linkWas.forEach(link => {
                link.href = contacts[i].linkToWhatsApp;
                link.target = "_blank";
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
