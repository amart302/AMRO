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
        longitude: { from: 45.3000, to: 46.0000 }
    },
];

let region = sessionStorage.getItem("region");
const choosingARegionBtns = document.querySelectorAll(".choosingARegionBtn");
const phoneNumber = document.getElementById("phoneNumber");
const linkTgs = document.querySelectorAll(".linkTg");
const linkWas = document.querySelectorAll(".linkWa");
const changeTheRegionBtn = document.querySelector(".changeTheRegionBtn");
const choosingARegionParentBlock = document.querySelector(".choosingARegionParentBlock");

if (region) {
    if(region == 'Республика Ингушетия') changeTheRegionBtn.innerHTML = `Респ. Ингушетия`;
    else if(region == 'Чеченская Республика') changeTheRegionBtn.innerHTML = `Чеченская Респ.`;
    else changeTheRegionBtn.innerHTML = `Москва`;
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
    for(let i = 0; i < contacts.length; i++){
        if((latitude > contacts[i].latitude.from && latitude < contacts[i].latitude.to) && (longitude > contacts[i].longitude.from && longitude < contacts[i].longitude.to)){
            let region = contacts[i].region;
            

            const confirmationBlockParent = document.createElement('div');
            confirmationBlockParent.className = 'confirmationBlockParent';
            confirmationBlockParent.innerHTML =`
            <div class='confirmationBlock'>
                <p>Ваш регион ${region} ?</p>
                <div>
                    <button id='saveRegionBtn'>Да</button>
                    <button id='notSaveRegionBtn'>Сменить регион</button>
                </div>
            </div>`
            document.body.appendChild(confirmationBlockParent);
            setTimeout(() => confirmationBlockParent.style.bottom = '20px', 700);

            document.getElementById('saveRegionBtn').addEventListener('click', () => {
                sessionStorage.setItem("region", region);
                if(region == 'Республика Ингушетия') changeTheRegionBtn.innerHTML = `Респ. Ингушетия`;
                else if(region == 'Чеченская Республика') changeTheRegionBtn.innerHTML = `Чеченская Респ.`;
                else changeTheRegionBtn.innerHTML = `Москва`;
                changingTheNumberAndLinks();
                setTimeout(() => confirmationBlockParent.style.bottom = '-140px', 400);
                setTimeout(() => confirmationBlockParent.remove(), 800)
            })

            document.getElementById('notSaveRegionBtn').addEventListener('click', () => {
                chooseRegionForm();
                setTimeout(() => confirmationBlockParent.style.bottom = '-140px', 400);
                setTimeout(() => confirmationBlockParent.remove(), 800)
            })
        }        
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

    if(region == 'Республика Ингушетия') changeTheRegionBtn.innerHTML = `Респ. Ингушетия`;
    else if(region == 'Чеченская Республика') changeTheRegionBtn.innerHTML = `Чеченская Респ.`;
    else changeTheRegionBtn.innerHTML = `Москва`;
    

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