document.onload = getGeolocation();

const map = document.querySelector("#map"); //Iframe where map is

function initiateMap(latitude, longitude) {
    const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=12&output=embed`;
    map.src = locationUrl;
    console.log("SUCCESS WITH GETTING THE LOCATION");
    console.log("If you see this, hi :)");
}

function geolocationError() {
    if(alert("Coś poszło nie tak! Sprawdź czy masz włączoną lokalizacje i spróbuj ponownie")){}
        else window.location.reload;
    //There will be a some graphic one day I hope
    console.log("THERE IS AN ERROR WITH LOCATION");
}

function getGeolocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude; //North - South
                const longitude = position.coords.longitude; //West - East
                console.log(`------------- Latitude: ${latitude}, Longitude: ${longitude} -------------`);
                initiateMap(latitude, longitude);
            },
            geolocationError
        );
    } else {
        geolocationError();
    }
}