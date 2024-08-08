const textInput = document.querySelector("#input-text");
const sizes = document.querySelector("#sizes");
const generate = document.querySelector("#generate");
const download = document.querySelector("#download");
const qrBody = document.querySelector(".box-body");

let size = sizes.value;
generate.addEventListener("click", () => {
  emptyInput();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  emptyInput();
});

download.addEventListener("click", () => {
  let img = document.querySelector(".box-body img");
  if (img !== null) {
    let imgAttribute = img.getAttribute("src");
    download.setAttribute("href", imgAttribute);
  } else {
    download.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});

function emptyInput() {
  textInput.value.length > 0
    ? generateQRCode()
    : alert("Enter the text or URL to generate your QR code");
}

function generateQRCode() {
  qrBody.innerHTML = "";
  new QRCode(qrBody, {
    text: textInput.value,
    width: size,
    height: size,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
}
