// Add your functions here

function map(array, func){
    const returnArray = []
    for (let i of array){
        returnArray.push(func(i))
    }
    return returnArray
}

function reduce(array, func, memo){
    let value
    if (typeof func(array[0], value) === "number"){value = 0}
    else {value = true}
    for(let i of array){
        value = func(i, value)
    }
    if(memo){value += memo}
    return value
}