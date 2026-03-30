
const displayInternetSpeed = async () => {
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg";
    const imageSizeInBits = 500000 * 8; // approx size (adjust if needed)

    const startTime = new Date().getTime();
    console.log(startTime, "this is time")

    try {
        await fetch(imageUrl, { cache: "no-store" });
        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000; // seconds
        const speedBps = imageSizeInBits / duration;
        const speedKbps = speedBps / 1024;
        const speedMbps = speedKbps / 1024;
        console.log(speedMbps, "internet speed")
        let count = 0;
        const timerValue = setInterval(() => {
            if (count <= speedMbps) {
                count += 1
                document.getElementById("result").innerText =
                    `${count}`;
            }
            else {
                clearInterval(timerValue); // stop when done
            }
        }, 100)
    } catch (error) {
        console.log("Error measuring speed", error);
    }
};
// showing the speed of the internet while clicking the image 
document.getElementById("speedImage").addEventListener("click",function(){      
    console.log("you clickee the image") 
    displayInternetSpeed()
       
})
//showing the device details     
document.getElementById("toggleBtn").addEventListener("click",function(){

    const info = document.getElementById("info")
    if (info.style.display === "none") {
        const connection = navigator.connection;
        console.log("this is connection", connection)
        info.innerHTML = `
      <p>Network Type: ${connection?.effectiveType || "N/A"}</p>
      <p>Downlink: ${connection?.downlink || "N/A"} Mbps</p>
      <p>Screen: ${window.innerWidth} x ${window.innerHeight}</p>
    `;
        info.style.display = "block";
    }
    else {
        info.style.display = "none"
    }
       
})
document.addEventListener("DOMContentLoaded", () => {
    displayInternetSpeed();
});

//