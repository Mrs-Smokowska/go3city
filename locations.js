const container = document.querySelector("#locations");

function initLocations() {
    fetch("./locations.json")
        .then(response => response.json())
        .then(data => {

            data.sort(() => Math.random() - 0.5);
            data.forEach(location => {
                const block = document.createElement("div");


                if (location.link != "") {
                    block.innerHTML = `
                        <div class="locationBlocks" onclick='moveLocation(${location.lat}, ${location.lng}, "${location.shortName}", "${location.mapsLink}")'>
                            <h3 class="locationName" style="color: #BC6B38">${location.name}</h3>
                            <p class="locationDesc">
                                ${location.description}
                            </p>
                            <p class="locationLink"><a class="locationWebsite" target="_blank"
                            href="${location.link}">${location.linkText}</a>
                            </p>
                        </div>
                    `;
                }
                else {
                    block.innerHTML = `
                        <div class="locationBlocks" onclick='moveLocation(${location.lat}, ${location.lng}, "${location.shortName}", "${location.mapsLink}")'>
                            <h3 class="locationName" style="color: #BC6B38">${location.name}</h3>
                            <p class="locationDesc">
                                ${location.description}
                            </p>
                        </div>
                    `;
                }

                container.appendChild(block);
            });
        });
}

document.addEventListener("DOMContentLoaded", initLocations);

function moveLocation(lat, lng, name, link) {
    map.flyTo([lat, lng], 14);
    marker.setLatLng([lat, lng]).bindPopup(`<p>📍 ${name}</p><p><a href="${link}" target="blank">Trasa</a></p>`).openPopup();
}