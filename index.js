let teamPointsHome = document.getElementById("team-points-home")
let teamPointsGuest = document.getElementById("team-points-guest")

let calHome = 0
let calGuest = 0

function addOneHome() {
    calHome += 1
    teamPointsHome.textContent = calHome
}

function addTwoHome() {
    calHome += 2
    teamPointsHome.textContent = calHome
}

function addThreeHome() {
    calHome += 3
    teamPointsHome.textContent = calHome
}

function addOneGuest() {
    calGuest += 1
    teamPointsGuest.textContent = calGuest
}

function addTwoGuest() {
    calGuest += 2
    teamPointsGuest.textContent = calGuest
}

function addThreeGuest() {
    calGuest += 3
    teamPointsGuest.textContent = calGuest
}

