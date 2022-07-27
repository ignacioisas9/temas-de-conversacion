import content from "./content.json"

let length = Object.keys(content.results).length
let arrayOfIds = [...Array(length).keys()]

function Select2(){
    if (arrayOfIds.length !== 0) {
        const number = getRandomInteger(0, length)
        const question = getContentFromId(arrayOfIds[number])
        arrayOfIds.splice(number, 1)
        length = length - 1
        return question
    } else {
        length = Object.keys(content.results).length
        arrayOfIds = [...Array(length).keys()]
        const number = getRandomInteger(0, length)
        const question = getContentFromId(arrayOfIds[number])
        arrayOfIds.splice(number, 1)
        length = length - 1
        return question
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min
}

function getContentFromId(id) {
    return content.results[id].content
}

export default Select2