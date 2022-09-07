const vocabulary = [
    { 
        "lesson1": {
            "ἀγάπη ἡ": "love",
            "γῆ ἡ": "earth, land, ground (geology)",
            "ζωή ἡ": "life (zoo, zoology)"
        },
        "lesson1": {
            "ἀγάπη ἡ": "love",
            "γῆ ἡ": "earth, land, ground (geology)",
            "ζωή ἡ": "life (zoo, zoology)"
        }   
    }
]

console.log(vocabulary.lesson1)

//load vocabulary 

const greekVocab = document.querySelector(".greek-vocabulary")
const englishVocab = document.querySelector(".english-vocabulary")

const loadVocabulary = () => {
    greekVocab.innerHTML = vocabulary[0];
}

loadVocabulary()