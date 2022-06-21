var sShowIndex = 0;
showSs();

function showSs() {
    var i;
    var sShow = document.getElementsByClassName("slideShow");
    for (i = 0; i < sShow.length; i++) {
        sShow[i].style.display = "none";
    }
    sShowIndex++;
    if (sShowIndex > sShow.length) {
        sShowIndex = 1;
    }

    sShow[sShowIndex - 1].style.display = "block";
    setTimeout(showSs, 4000);
}