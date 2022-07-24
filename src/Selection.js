import content from "./content.json"

let lenght = Object.keys(content.results).length

function Select(){
    const number = getRandomInteger(1, lenght)
    const question = getContentFromId(number)
    return question
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min
}

function getContentFromId(id) {
    return content.results[id].content
}

export default Select