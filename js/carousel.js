var sShowIndex = 0;
var dots;
showSs();

function showSs() {
    var i;
    var sShow = document.getElementsByClassName("slideShow");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < sShow.length; i++) {
        sShow[i].style.display = "none";
    }
    sShowIndex++;
    if (sShowIndex > sShow.length) {
        sShowIndex = 1;
    }

    sShow[sShowIndex - 1].style.display = "block";
    dots[sShow - 1].className += " active";
    setTimeout(showSs, 4000);
}

function currentSlide(index) {
    var sShow = document.getElementsByClassName("slideShow");
    if (index > sShow.length) { index = 1 }
    else if (index < 1) { index = sShow.length }
    for (i = 0; i < sShow.length; i++) {
        sShow[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    sShow[index - 1].style.display = "block";
    dots[index - 1].className += " active";
}