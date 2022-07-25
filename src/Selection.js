import content from "./content.json"


function Select(){
    let lenght = Object.keys(content.results).length
    const number = getRandomInteger(1, lenght)
    const question = getContentFromId(number)
    console.log("🚀 ~ file: Selection.js ~ line 10 ~ Select ~ question", question)
    return question
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min
}

function getContentFromId(id) {
    return content.results[id].content
}

export default Select