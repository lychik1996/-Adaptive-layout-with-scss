
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

//ybiraem peretaskivanie kartinok
const imgs = document.querySelectorAll("img");
imgs.forEach((img)=>{
    img.addEventListener('dragstart',(e)=>{
        e.preventDefault();
    })
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


///add slider

let slider = document.querySelector(".swiper-slider");
let indicators = document.querySelectorAll(".swiper-indicator-element");
let slides = document.querySelectorAll(".swiper-slide");
let leftClick = document.querySelectorAll(".swiper-left");
let rightClick = document.querySelectorAll(".swiper-right");
let currentIndex = 0;

// Функция для обновления индикаторов
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.setAttribute("class", "swiper-indicator-element-active");
        } else {
            indicator.setAttribute("class", "swiper-indicator-element");
        }
    });
}

// Привязываем обработчики к индикаторам
indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        showSlide(index);
    });
});

let startX = 0;
let isDragging = false;
leftClick.forEach((elem)=>{
    elem.addEventListener("click", ()=>{
        showSlide(currentIndex-1);
    });
});
rightClick.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        showSlide(currentIndex+1);
    });
});
//sensor move
let touchStartX = 0;

slider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    isDragging = true;
});
slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    let touchEndX = e.touches[0].clientX;
    let diffX = touchEndX - touchStartX;

    if (diffX > 0) {
        // Свайп вправо
        showSlide(currentIndex - 1);
    } else if (diffX < 0) {
        // Свайп влево
        showSlide(currentIndex + 1);
    }

    isDragging = false;
});
slider.addEventListener("touchend", () => {
    isDragging = false;
});
// Обработчики перемещения слайдов с помощью мыши
slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
});

slider.addEventListener("mouseup", () => {
    isDragging = false;
});

slider.addEventListener("mouseleave", () => {
    isDragging = false;
});

slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    let currentX = e.clientX;
    let diff = currentX - startX;

    if (diff > 0) {
        // Двигаем вправо
        showSlide(currentIndex - 1);
    } else if (diff < 0) {
        // Двигаем влево
        showSlide(currentIndex + 1);
    }
    isDragging = false;
});

function showSlide(index) {
    if (index < 0) {
        index = 0;
    } else if (index >= slides.length) {
        index = 0;
    } 
    
    let translateX = -index * (slides[0].offsetWidth + 150); // slides[0].offsetWidth =  ширина слайда
    slider.style.transform = `translateX(${translateX}px)`;
    currentIndex = index;
    updateIndicators();
}

showSlide(currentIndex);

//slider for certificat

let certificatList =document.querySelector(".certificat_swiper_list");
let certificatSlides =document.querySelectorAll(".certificat_swiper_slide");
let certificatIndicators =document.querySelectorAll(".certificat_swiper_indicator-element");
let certificatLeft =document.querySelectorAll(".certificat_swiper-left");
let certificatRight =document.querySelectorAll(".certificat_swiper-right");

let certificatCurrentIndex = 0;
// function updateIndicators() {
//     indicators.forEach((indicator, index) => {
//         if (index === currentIndex) {
//             indicator.setAttribute("class", "swiper-indicator-element-active");
//         } else {
//             indicator.setAttribute("class", "swiper-indicator-element");
//         }
//     });
// }
function certificatUpdateIndicators() {
    certificatIndicators.forEach((indicator, index) => {     
        if (index === certificatCurrentIndex) {
            indicator.setAttribute("class","certificat_swiper_indicator-element-active");
        } else {
            indicator.setAttribute("class","certificat_swiper_indicator-element");
        }
    });
}

certificatIndicators.forEach((indicator, index)=>{
    indicator.addEventListener("click", ()=>{
        certificatShowSlide(index);
    });
});
//slide left
certificatLeft.forEach((left)=>{
    left.addEventListener("click", ()=>{
        certificatShowSlide(certificatCurrentIndex-1);
    })
})
//slide right
certificatRight.forEach((right)=>{
    right.addEventListener("click", ()=>{
        certificatShowSlide(certificatCurrentIndex+1);
    })
})
// Пересування за допомогою миші
let certificatIsDragging = false;
let certificatStartX = 0;

certificatList.addEventListener('mousedown', (e) => {
    certificatIsDragging = true;
    certificatStartX = e.clientX;
});

certificatList.addEventListener("mouseup", () => {
    certificatIsDragging = false;
});

certificatList.addEventListener("mouseleave", () => {
    certificatIsDragging = false;
});

certificatList.addEventListener("mousemove", (e) => {
    if (!certificatIsDragging) return;
    let currentX = e.clientX;
    let diff = currentX - certificatStartX;
    if (diff < 0) {
        certificatShowSlide(certificatCurrentIndex + 1);
    } else if (diff > 0) {
        certificatShowSlide(certificatCurrentIndex - 1);
    }
    certificatIsDragging = false;
});

// Пересування за допомогою тача
let certificatTouchStartX = 0;

certificatList.addEventListener("touchstart", (e) => {
    certificatTouchStartX = e.touches[0].clientX;
    certificatIsDragging = true;
});

certificatList.addEventListener("touchmove", (e) => {
    if (!certificatIsDragging) return;
    let touchEndX = e.touches[0].clientX;
    let diffX = touchEndX - certificatTouchStartX;
    if (diffX < 0) {
        certificatShowSlide(certificatCurrentIndex + 1);
    } else if (diffX > 0) {
        certificatShowSlide(certificatCurrentIndex - 1);
    }
    certificatIsDragging = false;
});

certificatList.addEventListener("touchend", () => {
    certificatIsDragging = false;
});


function certificatShowSlide(index){
    if(index < 0){
        index = 0;
    } else if(index >= certificatSlides.length){
        index = 0;
    }
    let translateX = -index*(certificatSlides[0].offsetWidth + 20);
    certificatList.style.transform = `translateX(${translateX}px)`;
    certificatCurrentIndex = index;
    certificatUpdateIndicators();
}
certificatShowSlide(certificatCurrentIndex);

//accardion click
const accordionBtn = document.querySelectorAll(".accordion_tittle");

accordionBtn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        toggleAccordion(btn);
    })
})

function toggleAccordion(btn){
    let accordionText = btn.nextElementSibling;//получение следующего елемента после btn в html
    let img = btn.querySelector("img");

    img.classList.toggle("rotate");//dobavlyaet ili ydalyaet class v zavisimosti ot ego nalichiya

    if(accordionText){
        accordionText.style.display = (accordionText.style.display === "block") ? "none" : "block";
    }
};
document.addEventListener("click", e=>{
    const target = e.target;
    if(!menu.contains(target)&&!menuButton.contains(target)){
        menu.setAttribute('class', "menu");
    }
})

const accordion = document.querySelector(".accordion");

document.addEventListener("click", e=>{
    let target = e.target;
    let accordionText = document.querySelectorAll(".accordion_text");
    if(!accordion.contains(target)){
        accordionText.forEach(text=>{
            text.style.display = "none";
        })  
    }  
})




