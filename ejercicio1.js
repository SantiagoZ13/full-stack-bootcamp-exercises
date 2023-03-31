
typeOfValue(23)
typeOfValue('hello world')
typeOfValue(false)
typeOfValue(10n)
typeOfValue(undefined)
typeOfValue(Symbol(""))
typeOfValue()
typeOfValue({})

function typeOfValue(value){
    if(typeof value == 'number'){
        console.log('El tipo de dato de ' + value + ' es number')
    }else if(typeof value == 'string'){
        console.log('El tipo de dato de ' + value + ' es string')
    }else if(typeof value == 'boolean'){
        console.log('El tipo de dato de ' + value + ' es boolean')
    }else if(typeof value == 'bigint'){
        console.log('El tipo de dato de ' + value + ' es bigint')
    }else if(typeof value == 'undefined'){
        console.log('El tipo de dato de ' + value + ' es undefined')
    }else if(typeof value == 'symbol'){
        console.log('El tipo de dato de ' + value.toString + ' es symbol')
    }else{
        console.log('El tipo de dato de ' + value + ' es object')
    }
}