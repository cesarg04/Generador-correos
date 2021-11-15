
const inputEmail = document.getElementById('entrada-correo');
const selectEmail = document.querySelector("#select-mail").value;
const enterButon = document.querySelector("#enter-button");
const showInfo = document.querySelector("#show-info");

// Selected the provider Email
const ShowSelected = () => {
    let combo = document.getElementById("select-mail");
    let selected = combo.options[combo.selectedIndex].text;
    return selected;
}

// Selected number fot de email
const showNumber = () => {
    let num = document.getElementById("select-numbers");
    let numSelcted = num.options[num.selectedIndex].text;
    let convertedNumber = parseInt(numSelcted);
    return convertedNumber;
}

//Fuction to generate Aliatorie numbers
const numeroAleatorio = (maximo, minimo) => {
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}


const iterationEmails = (data) => {
    let element = document.createElement(`p`)
    element.innerHTML= `${data}`;
    showInfo.append(element);
}


//Event click
const runProgram = () => {

    let convertEmail = inputEmail.value.split("");
    console.log(numeroAleatorio(convertEmail.length, 1))
        
    let resultadoAleatorio = numeroAleatorio(convertEmail.length, 1);
    let converted = convertEmail.splice(resultadoAleatorio, 0, ".");
    let stringc = convertEmail.join('');

    const unin = () => stringc+ShowSelected();
    const exportArray = () => convertEmail;

    iterationEmails(unin())
}

const reRunProgram = () => {
    
    for (let index = 0; index < showNumber(); index++) {
        runProgram()
    }
    
}

enterButon.addEventListener('click', () => {
    reRunProgram()  
})

inputEmail.addEventListener('keyup', ({key}) => {
    if (key === "Enter") {
        reRunProgram()
    }
})





