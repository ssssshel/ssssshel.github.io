
// *********************************************************************************
// OCULTAR ELEMENTOS
// *********************************************************************************


// MENÚ BURGER

const nav = document.querySelector(".navHid");
const bars = document.querySelector(".fa-bars");
const btnBurg = document.getElementById('btnBurg');

btnBurg.addEventListener('click', ()=>{
    nav.classList.toggle('see');
    bars.classList.toggle('hid');
})


//CERRAR MENU AL ELEGIR ITEM

function closeNav(){
    nav.classList.toggle('see');
    bars.classList.toggle('hid');
}

// ITEM OCULTOS ABOUT

const rmAbout = document.querySelector('.readMoreAbout');
const rlAbout = document.querySelector('.readLessAbout');
const aboutHid = document.querySelector('.aboutHid');

rmAbout.addEventListener('click', () =>{
    aboutHid.style.display = "grid";
    rmAbout.style.display = "none";
})

rlAbout.addEventListener('click', () =>{
    aboutHid.style.display = "none";
    rmAbout.style.display = "block";
})

// ITEMS OCULTOS SKILLS

const grid = document.querySelector(".skillsGrid");
const item1 = document.querySelector(".skItem2");
const item2 = document.querySelector(".skItem3");
const item3 = document.querySelector(".skItem4");
const item4 = document.querySelector(".skItem5");
const btnHid = document.getElementById("seeMore");
const arItems = [item1, item2, item3, item4];

btnHid.addEventListener('click', () =>{
    arItems.forEach(item =>{
        item.classList.toggle('hid')
        grid.classList.toggle('dis')
    })
})



// *********************************************************************************
// MODALS
// *********************************************************************************


let modal = document.querySelector(".modalWrapper");

// OPEN MODAL

const btnOpen1 = document.getElementById("btnDetails1");
const btnOpen2 = document.getElementById("btnDetails2");
const btnOpen3 = document.getElementById("btnDetails3");
const btnOpen4 = document.getElementById("btnDetails4");
const btnOpen5 = document.getElementById("btnDetails5");
const arBtn = [btnOpen1, btnOpen2, btnOpen3, btnOpen4, btnOpen5];


// INSERTAR DATA

const pImg = document.querySelector(".modalImg");
const pTitle = document.querySelector(".modalTitle");
const pInfo = document.querySelector(".modalInfo");
const pLink = document.querySelector(".projectLink");


arBtn.forEach(item =>{
    item.addEventListener('click', ()=>{
        modal.style.display = 'block';
        if(arBtn.indexOf(item) == 0){
            pImg.setAttribute("src", "layouts/img/phones.jpg");
            pTitle.innerHTML = "Proyecto 1";
            pInfo.innerHTML = "Descripcion proyecto 1";
            pLink.setAttribute("href", "#");
        }else if(arBtn.indexOf(item) == 1){
            pImg.setAttribute("src", "layouts/img/code-g32e764a34_1920.jpg");
            pTitle.innerHTML = "Proyecto 2";
            pInfo.innerHTML = "Descripcion proyecto 2";
            pLink.setAttribute("href", "#");
        }else if(arBtn.indexOf(item) == 2){
            pImg.setAttribute("src", "layouts/img/edit2.jpg");
            pTitle.innerHTML = "Proyecto 3";
            pInfo.innerHTML = "Descripcion proyecto 3";
            pLink.setAttribute("href", "#");
        }else if(arBtn.indexOf(item) == 3){    
            pImg.setAttribute("src", "layouts/img/coding-g718912481_1920.jpg");        
            pTitle.innerHTML = "Proyecto 4"
            pInfo.innerHTML = "Descripcion proyecto 4";
            pLink.setAttribute("href", "#");
        }else if(arBtn.indexOf(item) ==4){
            pImg.setAttribute("src", "layouts/img/technology-ge2f151f36_1920.jpg");
            pTitle.innerHTML = "Proyecto 5";
            pInfo.innerHTML = "Descripcion proyecto 4";
            pLink.setAttribute("href", "#");
        }else{
            alert("no es ninguno");
        }
    })
})


// CLOSE MODAL

const btnCloseModal = document.querySelector(".closeModal");

btnCloseModal.addEventListener('click', ()=>{
    modal.style.display = 'none';
})
