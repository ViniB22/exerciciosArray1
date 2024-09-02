let res1 = document.getElementById("res1")
let res2 = document.getElementById("res2")
let res3 = document.getElementById("res3")
let res4 = document.getElementById("res4")
let vetExe1 = []
let vetExe2 = []

function gravar1(){
    let num1 = Number(document.getElementById("num1").value)
    if(vetExe1.length < 5){
        vetExe1.push(num1)
        console.table(vetExe1)
   }else{
        res1.innerHTML = "O número máximo de elementos é 5 itens!"
    }
}
function media1(){
    let media, soma = 0 
    for(i=0;i<vetExe1.length;i++){
        soma = soma + vetExe1[i]
    }
    console.log(soma)
    media = soma / vetExe1.length
    console.log(media)
    res1.innerHTML = `A média dos valores digitados é ${media.toFixed(2)}`
}
function aleatorio(){
    let valor_aleatorio = Math.floor(Math.random() * (10 - 1 + 1) ) + 1

    if(vetExe2.length < 5){
        console.log(valor_aleatorio)
        vetExe2.push(valor_aleatorio)

        res2.innerHTML = `O valor adicionado foi ${vetExe2}`
    }else{
        res2.innerHTML = "O número máximo de elementos é 5 itens!"
    }
    console.log(vetExe2)    

}
function media2(){
    let media, soma = 0 
    for(i=0;i<vetExe2.length;i++){
        soma = soma + vetExe2[i]
    }
    console.log(soma)
    media = soma / vetExe2.length
    console.log(media)
    
    res3.innerHTML = `A média dos valores é ${media.toFixed(2)}`
}

function aleatorizar(){
    let vetArray = []
    let somaPar = 0
    let somaImp = 0
    
    for(i=0;i<10;i++){
        valorAleatorio = Math.floor(Math.random() * (20 - 1 + 1) ) + 1
        vetArray.push(valorAleatorio)
    }
    res4.innerHTML = `${vetArray}<br>`

    for(i=0;i<10;i++){
        if(vetArray[i] % 2 == 0){
            somaPar += vetArray[i]
        }else{
            somaImp += vetArray[i]
        } 
    }
    res4.innerHTML += `A soma dos valores pares é ${somaPar} <br> A soma dos valores impares é ${somaImp}`

}