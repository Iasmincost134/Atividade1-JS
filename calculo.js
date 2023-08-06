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
    let alturaCone = Number(prompt("Qual o valor da altura do cone?"))
    let valorCone = ((pi*(raioCone*raioCone))*alturaCone/3)
    alert(`o valor do volume do cone é de ${valorCone} m³`)
}
 function ChamaEsfera (){
     const pi = 3.14
     let raioEsfera = Number(prompt("Qual o valor do raio da Esfera?"))
     let valorEsfera = (4*pi*(raioEsfera*raioEsfera*raioEsfera))/3
     alert(`o valor do volume da esfera é de ${valorEsfera} m³`)
 }

 function ChamaParalelepipedo (){
    let compriParalelepipedo = Number(prompt("Qual o comprimento do Paralelepípedo?"))
    let larguraParalelepipedo = Number(prompt("Qual a largura do Paralelepípedo?"))
    let alturaParalelepipedo = Number(prompt("Qual a altura do Paralelepípedo?"))
    let valorParalelepipedo = ((compriParalelepipedo*larguraParalelepipedo)*alturaParalelepipedo)
    alert(`o volume do paralelepípedo é de ${valorParalelepipedo} m³`)
}

function ChamaPiramede (){
    let areaPiramede = Number(prompt("Qual o valor da área da base da pirâmede?"))
    let alturaPiramide = Number(prompt("Qual a altura da pirâmede?"))
    let valorPiramede = ((areaPiramede*areaPiramede)*alturaPiramide)/3
    alert(`o volume da pirâmede é de ${valorPiramede} m³`)
}