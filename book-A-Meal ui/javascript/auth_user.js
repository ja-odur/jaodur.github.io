
function ToggleMenu(catererId, imgId, menuId) {
    var caterer = document.getElementById(catererId);
    var image = document.getElementById(imgId);
    var menu = document.getElementById(menuId);

    var class_hidden = menu.classList[1];
    console.log(menu.classList[1]);
    if (class_hidden == "hidden") {
        image.src = "icons/minus.png";
        menu.classList.remove("hidden");
    }
    else if(class_hidden == undefined){
        image.src = "icons/plus.png"
        menu.classList.add("hidden");
    }

}



