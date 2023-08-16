const menuButton =document.querySelector(".menu_button");
const menu = document.querySelector("header div nav");

menuButton.addEventListener("click",()=>{
    if(menu.getAttribute("class")==="menu"){
        menu.setAttribute("class", "menu_vision")
    }else{
        menu.setAttribute("class", "menu");
    }
})
document.addEventListener("click", e=>{
    const target = e.target;
    if(!menu.contains(target)&&!menuButton.contains(target)){
        menu.setAttribute('class', "menu");
    }
})




