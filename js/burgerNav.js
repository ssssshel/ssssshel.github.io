const nav = document.querySelector(".navHid");
const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");
const btnBurg = document.getElementById('btnBurg');

btnBurg.addEventListener('click', ()=>{
    
    // alert("CLICK");
    if(nav.classList.contains("see")){
        nav.classList.remove("see");
        bars.classList.remove("hid");
    }else{
        nav.classList.add("see");
        bars.classList.add("hid")
    }
})