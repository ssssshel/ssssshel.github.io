const grid = document.querySelector(".skillsGrid");
const item1 = document.querySelector(".skItem2");
const item2 = document.querySelector(".skItem3");
const item3 = document.querySelector(".skItem4");
const item4 = document.querySelector(".skItem5");
const btnHid = document.getElementById("seeMore");
const arItems = [item1, item2, item3, item4];

btnHid.addEventListener('click', () =>{
    cont =0;
    arItems.forEach(item =>{
        //if(item.classList.contains("hid")){
        //    item.classList.remove("hid");
        //    grid.classList.remove("dis");
        //}else{
        //    item.classList.add("hid")
        //    grid.classList.add("dis")
        //}

        if(item.classList.contains("")){
            item.classList.add("hid");
            grid.classList.add("dis");
            alert("falta")
        }else{
            item.classList.remove("hid")
            grid.classList.remove("dis")
        }
        
    })
    
})

