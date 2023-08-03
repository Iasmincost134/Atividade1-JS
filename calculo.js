function Chamacilindro (){
    const pi = 3.14
    let raioCilindro = Number(prompt("Qual o valor do raio da base do cilindro?"))
    let alturaCilindro = Number(prompt("Qual o valor da altura do cilindro?"))
    let valorCilindro = ((pi*(raioCilindro*raioCilindro))*alturaCilindro)
    alert(`o valor do volume do cilindro é de ${valorCilindro} m³`)
}

function Chamacone (){
    const pi = 3.14
    let raioCone = Number(prompt("Qual o valor do raio da base do cone?"))
    let alturaCone = Number(prompt("Qual o valor da altura do cilindro?"))
    let valorCone = ((pi*(raioCone*raioCone))*alturaCone/3)
    alert(`o valor do volume do cone é de ${valorCone} m³`)
}

// function Chamaesfera(){
//     const pi = 3.14
//     let raioEsfera = Number(prompt("Qual o valor do raio da base do Esfera?"))
//     let alturaEsfera = Number(prompt("Qual o valor da altura do Esfera?"))
//     let valorEsfera = ((pi*(raioCone*raioCone))*alturaCone/3)
//     alert(`o valor do volume do esfera é de ${valorEsfera} m³`)
// }