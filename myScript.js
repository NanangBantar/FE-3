function submitIP() {
    let ip = document.getElementById('ip-address').value;
    // if (ip.length !== 0) {
        const fethcData = async () => {
            try {
                const res = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_g6rsSY1aKHzQdt7fgk2aBpODdmCMI&ipAddress=${ip}`);
                if (!res.ok) {
                    throw new Error(res.status);
                }
                const data = await res.json();
                console.log(data);
                document.getElementById('result1').innerHTML = data.ip;
                document.getElementById('result2').innerHTML = data.location.city;
                document.getElementById('result3').innerHTML = data.location.timezone;
                document.getElementById('result4').innerHTML = data.isp;
            } catch (error) {
                console.log(error);
            }
        }
        fethcData();
    // } else {
    //     alert('You must input valid IP Address');
    // }

}

var map = L.map('map').setView([106.827142, -6.175371], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([106.827142, -6.175371]).addTo(map)
    .bindPopup('IP Address Tracker')
    .openPopup();