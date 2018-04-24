 // use "strict";
 var window_width = window.innerHeight;
 var content = document.getElementById("content");
 var footer = document.getElementById("footer");

function signup(signup) {
    var signupForm = document.getElementById("signup");
    var signinForm = document.getElementById("signin");
    if (signup == true) {
        signinForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    }
    else if (signup == false) {
        signinForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
    }
}

function set_footer(){
    var ht = window_width - 165;
    var height_content = ht+"px"
    console.log("new height: "+ ht);
    content.style.minHeight = height_content;
    footer.style.display = "block";
}


document.addEventListener("DOMContentLoaded", set_footer);