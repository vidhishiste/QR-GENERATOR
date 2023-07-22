const wrapper = document.querySelector(".wrapper");
const qrInput = document.querySelector(".form input");
const generatebtn = document.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");
let result = document.getElementsByClassName("qr-code");

generatebtn.addEventListener("click",()=> {
    let qrValue = qrInput.value;
    // generatebtn.innerText = "Generating QR code....";
    if(qrValue.length == 0){
        return;                    // if input is empty return nothing
    } // getting a qr code of user entered value using the qrserver
    // api and passing the api returned img src to qrimg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load" , () => {
        wrapper.classList.add("active");
        generatebtn.innerText = "Generate QR code";
    });
    console.log(qrValue);
});

qrInput.addEventListener("keyup" , () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});
