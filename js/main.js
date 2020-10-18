$(document).ready(function(){
    $(".navbar-toggler, .overlay2").on("click", function(){
        $(".sidenavBar, .overlay2").toggleClass("open");
    })
});


function openNav() {
  document.getElementById("sidenavBar").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidenavBar").style.width = "0";
}