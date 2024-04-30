mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

console.log(listing.geometry.coordinates);

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates) // listing.geometry.coordinate
    .setPopup(new mapboxgl.Popup({ offset: 25, })
        .setHTML(`<h5>${listing.location}</h5> <p>Exact location provided after booking</p>`)
        .setMaxWidth("300px"))
    .addTo(map);
