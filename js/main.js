// onmouseenter for pc 
if (window.screen.width > "838") {
    let mouse = document.querySelectorAll(".nav ul li");
    for (let i = 0; i < mouse.length; i++) {
        // --menui ashxatanq (hover), slaqneri animacia
        mouse[i].onmouseenter = function () {
            if (mouse[i].querySelector("ul") != null) {
                mouse[i].querySelector("ul").style.display = "block";
            }
            if (mouse[i].querySelector(".arrow-down") != null) {
                mouse[i].querySelector(".arrow-down").style = "transform: rotate(180deg);"
                    + "transition: all 0.3s ease;" + "border-top: 5px solid rgb(63,76,107);";
                mouse[i].querySelector("a").classList.add("pc__activ__menu");
            }
        }
        mouse[i].onmouseleave = function () {
            if (mouse[i].querySelector("ul") != null) {
                mouse[i].querySelector("ul").style.display = "none";
            }
            if (mouse[i].querySelector(".arrow-down") != null) {
                mouse[i].querySelector(".arrow-down").style = "transform: rotate(0deg);"
                    + "transition: all 0.3s ease;" + "border-top: 5px solid rgb(183, 183, 184);";
                mouse[i].querySelector("a").classList.remove("pc__activ__menu");
            }
        }
    }
}
// select lenguages
let checked__select = document.querySelector(".checked__select");
let select__body = document.querySelector(".select__body");
let select__item = document.querySelectorAll(".select__item");

document.querySelector(".wrapper").addEventListener("click", function (event) {
    if (event.target.parentNode.classList.contains("checked__select")) {
        select__body.classList.toggle("active__select");
    } else {
        document.querySelector(".select__body").classList.remove("active__select");
    }
})

for (let i = 0; i < select__item.length; i++) {
    if (select__item[i].classList.contains("defolt")) {
        checked__select.innerHTML = select__item[i].innerHTML;
    }
    select__item[i].addEventListener("click", function () {
        for (let i = 0; i < select__item.length; i++) {
            select__item[i].classList.remove("defolt");
        }
        checked__select.innerHTML = select__item[i].innerHTML;
        select__body.classList.remove("active__select");
    })
}
// ------------

// location
let checked__location = document.querySelector(".checked__location");
let location__body = document.querySelector(".location__body");
let location__item = document.querySelectorAll(".location__item");

document.querySelector(".wrapper").addEventListener("click", function (event) {
    if (event.target.parentNode.classList.contains("checked__location")) {
        location__body.classList.toggle("active__location");
    } else {
        location__body.classList.remove("active__location");
    }
})

for (let i = 0; i < location__item.length; i++) {
    if (location__item[i].classList.contains("defolt")) {
        checked__location.innerHTML = location__item[i].innerHTML;
    }
    location__item[i].addEventListener("click", function () {
        for (let i = 0; i < location__item.length; i++) {
            location__item[i].classList.remove("defolt");
        }
        checked__location.innerHTML = location__item[i].innerHTML;
        location__body.classList.remove("active__location");
    })
}
// --------------

// ----search----
let search = document.querySelector("#search");
let img__loupe = document.querySelector("[alt = loupe]");

document.querySelector(".wrapper").addEventListener("click", function (event) {
    if (event.target == search || event.target == img__loupe) {
        let search = document.querySelector("#search").setAttribute("style", "transform: scale(1)");
    } else {
        search.setAttribute("style", "transform: scale(0)");
    }
})
// ---------

// -------menu fixed----
window.onscroll = function () {
    let scroll = pageYOffset;
    if (scroll > 30) {
        document.querySelector(".menu").classList.add("fixed");
        document.querySelector(".main").classList.add("fixed");
    } else {
        document.querySelector(".menu").classList.remove("fixed");
        document.querySelector(".main").classList.remove("fixed");
    }
}

// ----burger----

let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

if (isMobile.any() && window.screen.width <= "838") {
    document.querySelector(".burger").onclick = function () {
        let add__class = document.querySelectorAll(".burger, .burger__list, .shadow");
        for (let i = 0; i < add__class.length; i++) {
            add__class[i].classList.toggle("active");
            // bac meui jamanak vor scroll chani
            document.body.classList.toggle("lock");
        }
    }
    let burger__list = document.querySelector(".burger__list");
    let login__content = document.querySelector(".login__content");
    let select__lenguages = document.querySelector(".select__lenguages");
    let cart = document.querySelector(".cart");
    let nav = document.querySelector(".nav");
    // ---------
    let miniMenu__header = document.createElement("div");
    miniMenu__header.className = "miniMenu__header";
    burger__list.prepend(miniMenu__header);
    miniMenu__header.prepend(login__content);
    miniMenu__header.append(select__lenguages);
    // ---------
    burger__list.append(cart);
    burger__list.append(nav);
    // ---------------------------------------------------------------------
    // ---sxmelu knopka products
    let li = document.querySelectorAll(".nav>ul>li>a");
    let menu__burger = document.querySelector(".menu__burger");
    menu__burger.onclick = function (event) {
        for (let i = 0; i < li.length; i++) {
            // ----&nox dasi erexeqin sxmeluc tanuma &nox dasi vra
            if (event.target.parentNode == li[i] || event.target == li[i]) {
                // stugel li harevan uni te che
                if (li[i].nextElementSibling != null) {
                    li[i].nextElementSibling.classList.toggle("open");
                    // li[i].querySelector(".arrow-down").classList.toggle("rotate");
                    li[i].parentElement.classList.toggle("active__color");
                }
                // ---else if paiman: petka unena harevan ev tvial harevan@ petka unena atriboot class
            } else if (li[i].nextElementSibling != null && li[i].nextElementSibling.hasAttribute("class")) {
                li[i].nextElementSibling.classList.remove("open");
                // li[i].querySelector(".arrow-down").classList.remove("rotate");
                li[i].parentElement.classList.remove("active__color");
            }
        }
    }
    // -----------------------------------------------------------------


}


