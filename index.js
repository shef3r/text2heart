function settext() {
    document.querySelector("body > div > p").innerText = document.querySelector("body > input").value
    if (document.querySelector("body > div > p").scrollWidth > 220) {
    const scaleFactor = 220 / document.querySelector("body > div > p").scrollWidth;
    console.log(scaleFactor);
    document.querySelector("body > div > p").style.transform = `scaleX(${scaleFactor})`;}
}

function exportElementAsPNG(elementselector) {
    // Get the HTML element to export as PNG
    const element = document.querySelector(elementselector);
    html2canvas(element, {backgroundColor: null}).then(canvas => {
        const dataUrl = canvas.toDataURL();
        saveAs(dataUrl, 'your heart.png');
    });
  }
  
function download() {
    settext();
    exportElementAsPNG(".heartcontainer");
}