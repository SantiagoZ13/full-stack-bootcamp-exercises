let hugoCoins = 0

let pacoCoins
let luisCoins
let totalCoins

for (let i = 0; i < 100; i++) {
    hugoCoins = i;
    
    pacoCoins = hugoCoins * 2
    luisCoins = pacoCoins + 10

    totalCoins = hugoCoins + pacoCoins + luisCoins
    
    if(totalCoins === 85){
        console.log(" ")
        console.log("=== RESPUESTA ===")
        console.log('|Hugo:        ' + hugoCoins + '|')
        console.log('|Paco:        ' + pacoCoins + '|')
        console.log('|Luis:        ' + luisCoins + '|')
        break
    }else{
        console.log("Hugo no tiene " + i + " monedas")
    }
}



