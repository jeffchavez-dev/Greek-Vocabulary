const vocabulary = [
    { 
        "ἀγάπη": "love",
        "γῆ ἡ": "earth, land, ground (geology)",
        "ζωή ἡ": "life (zoo, zoology)",
        "φωνή, ἡ ": "voice sound (phonetics, phonograph, phone)"

    }            
]


const vocabKeys = Object.keys(vocabulary[0])
console.log(vocabKeys[3])

let currentVocab = 0;
//load vocabulary 

const greekVocab = document.querySelector(".greek-vocabulary")
const englishVocab = document.querySelector(".english-vocabulary")
const correct = document.querySelector(".correct-answer")

const loadVocabulary = () => {
    greekVocab.innerHTML = vocabKeys[currentVocab];
    englishVocab.innerHTML = vocabulary[0][vocabKeys[currentVocab]]
}

correct.addEventListener("click", ()  => {
    currentVocab++;
    loadVocabulary()
})

loadVocabulary()