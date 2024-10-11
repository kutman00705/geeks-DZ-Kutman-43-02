

let capitalizeString = (str) => {
    if(typeof str !== 'string') return '';
    let result = ''
    for(let i = 0; i < str.length; i++) {
        if (i=== 0){
            result += str[i].toUpperCase()
        }else{
            result += str[i].toLowerCase()
        }
    }
    return result
}
console.log(capitalizeString('ЕВГЕНИЙ'))
console.log(capitalizeString('иВАНОВ'))


let everOddSum = (arr) => {
    let eventSum = 0
    let oddSum = 0
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
            eventSum += arr[i]
        }else {
            oddSum += arr[i]
        }
    }
    return [eventSum, oddSum]
}
console.log(everOddSum([50, 60,60,45,71]))