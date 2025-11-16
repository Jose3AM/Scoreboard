let numHome = document.getElementById("numhome-el");
let numGuest = document.getElementById("numguest-el");
let homePoints = 0;
let guestPoints = 0;

function onePointHome(){
    homePoints ++;
    numHome.textContent = homePoints;
}

function twoPointHome(){
    homePoints += 2;
    numHome.textContent = homePoints;
}

function threePointHome(){
    homePoints += 3;
    numHome.textContent = homePoints;
}

function onePointGuest(){
    guestPoints ++;
    numGuest.textContent = guestPoints;
}

function twoPointGuest(){
    guestPoints += 2;
    numGuest.textContent = guestPoints;
}

function threePointGuest(){
    guestPoints += 3;
    numGuest.textContent = guestPoints;
}