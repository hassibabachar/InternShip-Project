let tabs = document.querySelectorAll(".links li a");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll("section > div");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});