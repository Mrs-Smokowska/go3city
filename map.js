const mapContainer = document.getElementById("map");

let map;
let marker;

function initMap(lat, lng) {
    map = L.map("map", {zoomControl: false}).setView([lat, lng], 14);
    L.control.zoom({position: "bottomleft"}).addTo(map);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    marker = L.marker([lat, lng])
        .addTo(map)
        /*.bindPopup("📍 Jesteś tutaj")
        .openPopup();*/

    console.log("Mapa OSM załadowana poprawnie");
}

function geolocationError() {
    alert("Nie udało się pobrać lokalizacji. Pokazuję domyślną.");
    
    // Default Location
    initMap(54.35598618576356, 18.644314833000145);
}

function getGeolocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                console.log(`Latitude: ${lat}, Longitude: ${lng}`);
                initMap(lat, lng);
            },
            geolocationError
        );
    } else {
        geolocationError();
    }
}

document.addEventListener("DOMContentLoaded", getGeolocation);




// OLD ATTEMPT AT GEOLOCATION AND GEOFUNCTIONALITY OF THIS SITE

/*document.onload = getGeolocation();

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
}*/