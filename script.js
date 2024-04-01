window.onscroll = function () {
    scrollRotate();
}

function scrollRotate() {
    let image = document.getElementById("logoicon");
    image.style.transform = "rotate(" + window.pageYOffset/4 + "deg)";
}

function darkMode() {
    var cardList = document.querySelectorAll("#aboutuscard, #servicescard1, #servicescard2, #servicescard3");
    var cardArray=[...cardList];
    cardArray.forEach(element => {
        element.classList.toggle("darkcard");
    });

    var sectionList = document.querySelectorAll(" #services, #location");
    var sectionArray=[...sectionList];
    sectionArray.forEach(element => {
        element.classList.toggle("darksection");
    });

    var textList = document.querySelectorAll(", #servicestitle, #locationtitle, #aboutuscard, #enginetext, #gearboxtext, #othertext, #locationtext, #enginetitle, #gearboxtitle, #othertitle");
    var textArray=[...textList];
    textArray.forEach(element => {
        element.classList.toggle("darktext");
    });

    var imgList = document.querySelectorAll("#engine, #gearbox, #car");
    var imgArray=[...imgList];
    imgArray.forEach(element => {
        element.classList.toggle("invert");
    });
}
