const vocabulary = [
    { 
        "ἀγάπη": "love",
        "γῆ ἡ": "earth, land, ground (geology)",
        "ζωή ἡ": "life (zoo, zoology)"
    } ,
    { 
        "φωνή, ἡ voice": "sound (phonetics, phonograph, phone)",
        "γῆ ἡ": "earth, land, ground (geology)",
        "ζωή ἡ": "life (zoo, zoology)"
    }              
]

console.log(vocabulary[0]["ἀγάπη"])

//load vocabulary 

const greekVocab = document.querySelector(".greek-vocabulary")
const englishVocab = document.querySelector(".english-vocabulary")

const loadVocabulary = () => {
    greekVocab.innerHTML = vocabulary[0]["ἀγάπη"];
}

loadVocabulary()