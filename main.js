const inputEmail = document.getElementById('entrada-correo');
const selectEmail = document.querySelector("#select-mail").value;
const enterButon = document.querySelector("#enter-button");
const clearButton = document.querySelector("#clear-button");
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
    return Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);
}


const iterationEmails = (data) => {
    let element = document.createElement(`p`);
    element.className = 'lista-email';
    element.innerHTML = `${data}`;
    showInfo.append(element);
}

//Test input
/*
const testInput = () => {
    if (inputEmail.indexOf("") <= -1) {
        console.log('El input esta vacio');
        
    }
}
*/

//Event click
const runProgram = () => {
    let convertEmail = inputEmail.value.split("");

    let resultadoAleatorio = numeroAleatorio(convertEmail.length, 1);

    // ReRun Dop
    let usadosTest = new Array;
    usadosTest.push(resultadoAleatorio)

    let converted = convertEmail.splice(resultadoAleatorio, 0, ".");

    for (const i in usadosTest) {

        if (resultadoAleatorio === usadosTest[i]) {
            let arr = []
            arr.push(usadosTest[i]);
            let arr2 = [];
            arr2.push(resultadoAleatorio)
            console.log(resultadoAleatorio)

            let newResultado = numeroAleatorio(convertEmail.length, 1);
            convertEmail.splice(newResultado, 0, ".");
        };
        //console.log(usadosTest);
    };


    let stringc = convertEmail.join('');
    const unin = () => stringc + ShowSelected();

    iterationEmails(unin())

}

// Test of parent the emails

const reRunProgram = () => {

    for (let index = 0; index < showNumber(); index++) {
        runProgram()
    }
}

enterButon.addEventListener('click', () => {
    reRunProgram()
})

// Fuction to clear screen of emails

const clearEmail = () => {
    const listas = document.querySelector(".lista-email");
    showInfo.removeChild(listas);
}

const reClear = () => {
    for (let init = 0; init < showNumber(); init++) {
        clearEmail()
    }
}

inputEmail.addEventListener('keyup', ({ key }) => {
    if (key === "Enter") {
        reRunProgram()
    }
})

clearButton.addEventListener('click', () => {
    reClear();
});

