let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


function homeAddOne(){
    homeScore.textContent = parseInt(homeScore.textContent) + 1
}
function guestAddOne(){
    guestScore.textContent = parseInt(guestScore.textContent) + 1
}

function homeAddTwo(){
    homeScore.textContent = parseInt(homeScore.textContent) + 2
}
function guestAddTwo(){
    guestScore.textContent = parseInt(guestScore.textContent) + 2
}

function homeAddThree(){
    homeScore.textContent = parseInt(homeScore.textContent) + 3
}
function guestAddThree(){
    guestScore.textContent = parseInt(guestScore.textContent) + 3
}