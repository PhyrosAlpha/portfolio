const firstnameInput = document.querySelector("#firstname-input");
const inputsValidation = document.querySelectorAll(".form-input");
const messageBox = document.querySelector(".message-box");
const messageBoxCloseBtn = messageBox.querySelector(".message-box-footer")

messageBoxCloseBtn.addEventListener("click", () => {
    closeMessage();
})

function showMessage() {
    messageBox.classList.add("show")
}

function closeMessage() {
    messageBox.classList.remove("show")
}

function cleanForm() {
    inputsValidation.forEach((input) => {
        let inputTarget = input.querySelector("input, textarea");
        //console.log(inputTarget);
        inputTarget.value = "";
        inputTarget.checked = false;
    })
}

function successfulSend() {
    cleanForm();
    showMessage();
}

function validarInput() {
    let isFormValid = true;

    inputsValidation.forEach((input) => {
        let inputTarget = input.querySelector("input, textarea");
        let spanError = input.querySelector(".form-input-error");
        isValid = inputTarget.checkValidity();

        //console.log(inputTarget);

        if(isFormValid){
            isFormValid = isValid;
        }

        if(isValid){
            if(spanError){
                spanError.style.display = "none";
                inputTarget.classList.remove("input-error");
            }
        }else {
            if(spanError){
                spanError.style.display = "block";
                inputTarget.classList.add("input-error");

                if(inputTarget.getAttribute("custom-message") == null){
                    spanError.innerHTML = "Esse campo é obrigatório";
                }
            }
        }
    })

    return isFormValid;
}

const enviarBtn = document.querySelector("#enviar-btn");
enviarBtn.addEventListener("click", (event) => {
    let result = validarInput();
    if(!result) {
        event.preventDefault();
    } else {
        event.preventDefault();
        successfulSend();
    }
})

