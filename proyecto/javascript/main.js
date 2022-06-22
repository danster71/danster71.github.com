
let links = document.querySelectorAll(".close");

links.forEach(function (link) {
    link.addEventListener("click", function (ev) {
      ev.preventDefault();
      let content = document.querySelectorAll('.content')

        content.classList.remove("animate__backInDown");
        content.classList.remove("animate__animated");


        content.classList.add("animate__fadeInUp");
        content.classList.add("animate__animated");

        setInterval(function () {
            location.href = "/";
        },600)
        //setInterval()
        
        



    });
    
});

let iconos = document.querySelectorAll(".i")

iconos.forEach(function (icono) {
    icono. classList.remove("fa-star");

});



