var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function (e) {
    e.preventDefault();
    mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function (e) {
    e.preventDefault();
    mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function (event) {
    if(event.keyCode === 27) {
        if(mapPopup.classList.contains("modal-content-show")){
            mapPopup.classList.remove("modal-content-show");
        }
    }
});