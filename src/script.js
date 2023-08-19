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


//scroll in section href

let heightHeader = 70;
document.querySelectorAll('a[href^="#"]').forEach(btn=>{//dlya kazdogo elementa a y kotorogo href na4inaetsya s #
    btn.addEventListener('click', function (e) {//sozdaem sobitie pri klike
        e.preventDefault();//prdotvrashyaem standartnyi perehod brayzera

        let targetId = this.getAttribute('href');//ispolbzyem this 4tobi polichitb zna4enie href na kotoriy klikaem
        let targetElement = document.querySelector(targetId);//ishem kazdiy element s danim id

        if(targetElement){//esli takoy element estb to
//let targetPosition =targetElement.getBoundingClientRect().top + window.scrollY - heightHeader;
//getBoundingClientRect().top rastoyanie ot verhney granitsi vidimiy oblasti do verhney granici elementa
//window.scrollY возвращает текущее количество пикселей, на которое страница была прокручена по вертикали от верхней границы документа.

// targetPosition = (расстояние от верхней границы видимой области браузера до верхней границы элемента)
// + (текущее количество пикселей вертикальной прокрутки страницы)
// - (высота заголовка)
//or
            let targetPosition = targetElement.offsetTop -heightHeader;
//offsetTop = rastoyanie ot verha elementa do na4ala html stranici 
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
//метод scrollTo у объекта window, чтобы выполнить плавную прокрутку до нужной позиции. behavior: 'smooth' делает прокрутку плавной.
        }
    });
});




