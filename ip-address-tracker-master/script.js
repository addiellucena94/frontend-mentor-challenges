async function serchInfo() {
    try {
        const response = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_getQqf12IW5CPcwzz1LXARinlBvTh&ipAddress=1.1.1.1");
    const data = await response.json();
    console.log(data);
    } catch(error) {
        console.log(error);
    }
}

serchInfo();