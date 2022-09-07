const vocabulary = [
    { 
        "ἀγάπη": "love",
        "γῆ ἡ": "earth, land, ground (geology)",
        "ζωή ἡ": "life (zoo, zoology)",
        "φωνή, ἡ ": "voice, sound (phonetics, phonograph, phone)"

    }            
]

const vocabularyTwo = [
    {"ἀγάπη": "love"},
    {"γῆ ἡ": "earth, land, ground (geology)"},
    {"ζωή ἡ": "life (zoo, zoology)"},
    {"φωνή, ἡ ": "voice, sound (phonetics, phonograph, phone)"}         
]




const greekVocab = document.querySelector(".greek-vocabulary")
const englishVocab = document.querySelector(".english-vocabulary")
const correct = document.querySelector(".correct-answer")
const showAnswer = document.querySelector(".show-answer")

const vocabKeys = Object.keys(vocabulary[0])
console.log(vocabKeys[3])


const shuffleQuiz = (arr) => {
    arr.sort(() => Math.random() - 0.5);
}

shuffleQuiz(vocabularyTwo);
console.log(shuffleQuiz(vocabularyTwo))
let currentVocab = 0;
//load vocabulary 



const loadVocabulary = () => {
    greekVocab.innerHTML = vocabKeys[currentVocab];
    englishVocab.innerHTML = vocabulary[0][vocabKeys[currentVocab]]
}

correct.addEventListener("click", ()  => {
    currentVocab++;
    loadVocabulary();
    englishVocab.classList.remove("show");
    showAnswer.classList.remove('hide');

})

loadVocabulary()

showAnswer.addEventListener("click", ()  => {
    englishVocab.classList.add("show");
    showAnswer.classList.add('hide');
   
})