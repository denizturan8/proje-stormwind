function tabletmenu(){
    
    const menuBox = document.querySelector("#menuToggle");
    const list = document.querySelector(".header-area .list");
    menuBox.addEventListener("click",function(){
        menuBox.classList.toggle('open')
        list.classList.toggle('open')
    });
}


window.addEventListener('DOMContentLoaded', (event) => {

    tabletmenu()
});