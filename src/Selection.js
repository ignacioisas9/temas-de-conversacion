import content from "./content.json"


function Select(){
    let length = Object.keys(content.results).length
    const number = getRandomInteger(0, length)
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