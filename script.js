async function capture() {
  document.getElementById("text").innerText = "Đang chụp ảnh...";
  try {
    const res = await fetch("http://172.20.10.2/capture");
    const blob = await res.blob();
    document.getElementById("image").src = URL.createObjectURL(blob);
    document.getElementById("text").innerText = "Ảnh đã được chụp!";
  } catch (err) {
    document.getElementById("text").innerText = "Không kết nối được ESP32-CAM!";
  }
}
