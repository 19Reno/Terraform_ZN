const btn = document.getElementById('btn');
const statusText = document.getElementById('status-text');
const healthBox = document.getElementById('health-box');

btn.addEventListener('click', () => {
    statusText.innerText = "System Online: 100%";
    healthBox.innerHTML = "<p style='color: white;'>Build Status: SUCCESS ✅</p>";
    console.log("DevOps Pipeline is working perfectly!");
});
