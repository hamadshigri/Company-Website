let upArrow = document.getElementById('arrowBtn');
window.onscroll = function() {scrollFunction()};

$(document).ready(function(){
    $('.carousel').carousel();
});

function openNav() {
    document.getElementById("navbar").style.height = "100%";
}
function closeNav() {
    document.getElementById("navbar").style.height = "0%";
}

function arrowOnLoad() {
    upArrow.style.display = "none";
}

function scrollFunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        upArrow.style.display = "block";
    }
    else {
        upArrow.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

