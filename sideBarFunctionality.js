let left = 0; //left sidebar status
let right = 1; //right sidebar status

window.addEventListener("load", () => {
    document.querySelector("#locationList").style.transform = "translateX(0)";
    document.querySelector("#map").style.transform = "translateX(-15%)";
    right = 1;
});

function sideNavOpen() {
    if(right == 1){
        document.querySelector("#locationList").style.transform = "translateX(100%)";
        document.querySelector("#map").style.transform = "translateX(0)";
        right = 0;
    }
    document.querySelector("#sideNav").style.transform = "translateX(0)";
    left = 1;
}

function sideNavOpenR() {
    if (left === 1) {
        document.querySelector("#sideNav").style.transform = "translateX(-100%)";
        left = 0;
    }
    document.querySelector("#locationList").style.transform = "translateX(0)";
    document.querySelector("#map").style.transform = "translateX(-15%)";
    right = 1;
}

function sideNavClose() {
    document.querySelector("#sideNav").style.transform = "translateX(-100%)";
    left = 0;
}

function sideNavCloseR() {
    document.querySelector("#locationList").style.transform = "translateX(100%)";
    document.querySelector("#map").style.transform = "translateX(0)";
    right = 0;
}
