let numeroCPF = `705.484.450-52`
let body = document.getElementById(`body`)
let CPFtxt = document.getElementById(`CPFtxt`)

CPFtxt.focus()

function eventos() {

button.addEventListener(`click`, (e) => {

    let CPFtxt = document.getElementById(`CPFtxt`)
    let visor = document.getElementById(`res`)
    let alvo = e.target

    if(alvo.classList.contains(`button`)) {
        visor.innerHTML = `${validarCPF(CPFtxt.value)}`
    }

})

CPFtxt.addEventListener(`keypress`, function (e) {

    let CPFtxt = document.getElementById(`CPFtxt`)
    let caractere = e.key

    console.log(caractere)

    
    if (CPFtxt.value.length == 3 || CPFtxt.value.length == 7) {CPFtxt.value += `.`}
    if (CPFtxt.value.length == 11) {CPFtxt.value += `-`}
    
})

}

eventos()

function validarCPF(cpf) {

    function filtragem(cpf) {
        let filtro1 = cpf.replace(`.`, ``)
        let filtro2 = filtro1.replace(`.`, ``)
        let filtro3 = filtro2.replace(`-`, ``)
        return filtro3
    }

    let cpfFiltrado = filtragem(cpf)

    function transformArray(cpf) {
        return Array.from(cpf)
    }

    let cpfArray = transformArray(cpfFiltrado)

    function primeiroNumero() {
        let somaDigitosM = 0
        let y = 10

        for (x = 0; x <= 8; x++) {
 
            somaDigitosM += cpfArray[x] * y
            y--
        }

        let primeiroDigito

        if (11 - (somaDigitosM % 11) > 9) {
            primeiroDigito = 0
        } else {
            primeiroDigito = 11 - (somaDigitosM % 11)
        }

        return primeiroDigito

    }

    primeiroNumero()

    function segundoNumero() {

        let somaDigitosM = 0
        let y = 11

        for (x = 0; x <= 8; x++) {

            somaDigitosM += cpfArray[x] * y
            y--
        }

        let somaDigitosM2 = somaDigitosM + (primeiroNumero() * 2)
        let segundoDigito

        if (11 - (somaDigitosM2 % 11) > 9) {
            segundoDigito = 0
        } else {
            segundoDigito = 11 - (somaDigitosM2 % 11)
        }

        return segundoDigito
    }

    segundoNumero()

    if (primeiroNumero() == cpfArray[9] && segundoNumero() == cpfArray[10]) {
        return `CPF válido`
    } else {
        return `CPF inválido`
    }

}



