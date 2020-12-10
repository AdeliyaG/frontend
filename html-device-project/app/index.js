var catalog = document.querySelector(".catalog-menu");
var writeUs = document.querySelector(".modal-write-us");
var map = document.querySelector(".modal-map");
var search = document.querySelector(".header-top__search");
var searchBtn = document.getElementById("search-btn");

//открытие меню каталога по нажатию
document.getElementById("catalog-btn").onclick = function (evt) {
    evt.preventDefault();
    catalog.classList.toggle("active")
};

//форма для фидбека
document.getElementById("write-us-btn").onclick = function (evt) {
    evt.preventDefault();
    writeUs.classList.add("active")
};

//закрытие формы
document.getElementById("close-form").onclick = function (evt) {
    evt.preventDefault();
    writeUs.classList.remove("active");
};

//карта
document.getElementById("map").onclick = function (evt) {
    evt.preventDefault();
    map.classList.add("active")
};

//закрытие карты
document.getElementById("close-map").onclick = function (evt) {
    evt.preventDefault();
    map.classList.remove("active");
};

//стили для поиска
search.children[1].onfocus = function (evt) {
    search.style = "border-bottom: 2px solid black;";
    searchBtn.classList.add("active");
};

search.children[1].onblur = function (evt) {
    search.style = "border-bottom: none;";
    searchBtn.classList.remove("active");
};