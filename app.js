let clouds = document.getElementById("clouds");
let sun = document.getElementById("sun");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountains_sunset2 = document.getElementById("mountains_sunset2");
let mountains_sunset1 = document.getElementById("mountains_sunset1");
let header = document.querySelector("header");
let back_color = document.querySelector("body");

    window.addEventListener("scroll", function(){
        let value = window.scrollY;
            clouds.style.left = value * 0.25 + "px";
            sun.style.top = value * 1.05 + "px";
            mountains_sunset2.style.top = value * 0.5 + "px";
            mountains_sunset1.style.top = value * 0 + "px";
            text.style.marginRight = value * 4 + "px";
            btn.style.marginTop = value * 1.5 + "px";
            header.style.top = value * 0.5 + "px";
            if (value > 300) {
                back_color.style.background = "#1c0522";
            } else {
                back_color.style.background = "linear-gradient(#e7694c, #deb975)"; // Restablecer el color de fondo original si el usuario retrocede
            }
});