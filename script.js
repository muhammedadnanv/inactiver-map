var mapData = [
    {
        name: "Marker 1",
        latlng: [51.505, -0.09] // [latitude, longitude]
    },
    {
        name: "Marker 2",
        latlng: [51.515, -0.1]
    },
    // Add more markers as needed
];

// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (you can use different map providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers to the map based on the data
mapData.forEach(function(marker) {
    L.marker(marker.latlng).addTo(map)
        .bindPopup(marker.name);
});

