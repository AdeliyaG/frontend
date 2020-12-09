// var list = document.querySelector(".possibilities__list");
// var listBtn = list.getElementsByTagName("button");
// console.log(listBtn);
//
// listBtn.onclick = function () {
//     if (listBtn.className === "active") {
//         console.log(listBtn)
//     } else {
//         listBtn.classList.add("active")
//     }
// };

var catalog = document.querySelector(".catalog-menu");
var writeUs = document.querySelector(".modal-write-us");
var map = document.querySelector(".modal-map");

//открытие меню каталога по нажатию
document.getElementById("catalog-btn").onclick = function (evt) {
    evt.preventDefault();
    catalog.classList.toggle("active")
};

document.getElementById("write-us-btn").onclick = function (evt) {
    evt.preventDefault();
    writeUs.classList.add("active")
};

document.getElementById("close-form").onclick = function (evt) {
    evt.preventDefault();
    writeUs.classList.remove("active");
};

document.getElementById("map").onclick = function (evt) {
    evt.preventDefault();
    map.classList.add("active")
};

document.getElementById("close-map").onclick = function (evt) {
    evt.preventDefault();
    map.classList.remove("active");
};
