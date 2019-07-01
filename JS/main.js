//carousel
let i = 0;
let images = [];
let time = 3000;

images[0] = '/IMAGES/schoolkids_in_class.jpg';
images[1] = '/IMAGES/world-map.jpg';
images[2] = '/IMAGES/school-children.jpg';
images[3] = '/IMAGES/school-books.jpg';

function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time);
};

window.onload = changeImg;

// nav hover link color
let element = document.querySelectorAll('a');

let arr = Array.from(element);

arr.forEach((link) => {link.addEventListener("mouseover", function(){
    console.log();
    this.style.color = "#6C5359"; setTimeout( () => {this.style.color ="";}, 500);}, false)
});



//working links 
document.getElementById('svg4').onclick = function () {
    window.open("https://www.paypal.com");
}

document.getElementById('svg1').onclick = function() {
    window.alert("My academic needs have been coordinated.  Thank you Educell");
}


document.getElementById('svg5').onclick = function () {
    window.alert("Imagine the lists you can create to bring your kids the resources they need, when they need them.")
}

document.getElementById('svg2').onclick = function () { 
    window.alert("Filter through help tickets to manage your priorities");
}

document.getElementById('svg5').onclick = function () {
    window.alert("Login");
}

document.getElementById('svg6').onclick = function () {
    window.alert("Login");
}

