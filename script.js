const vocabulary = [
    { 
            "ἀγάπη": "love",
            "γῆ ἡ": "earth, land, ground (geology)",
            "ζωή ἡ": "life (zoo, zoology)",
            "φωνή, ἡ ": "voice, sound (phonetics, phonograph, phone)",
            "ἀλήθεια, ἡ": "truth",
            "ἁμαρτία, ἡ":  "sin (hamartiology—the theological study of sin)",
            "βασιλεία, ἡ" : "kingdom, reign (basilica)",
            "δόξα, ἡ" : "glory, majesty (doxology)",
            "ἐκκλησία, ἡ" : "congregation, assembly, church (ecclesiastical)",
            "ἡμέρα, ἡ" : "day (ephemeral, “for a day”)",
            "καρδία, ἡ":  "heart (cardiologist)",
            "δέ" : "and, but, now",
            "καί" : "and, even, also",
            "μέν" : "on the one hand, indeed",
            "ὁ, ἡ, τό" : "the",
            "ἀδελφός, ὁ ": "brother (and sister) ",
            "ἄνθρωπος, ὁ ": "man, human being, husband (anthropology)",
            "θεός, ὁ ": "God (theology)",
            "κόσμος, ὁ ": "world, universe; adornment (cosmos, cosmology, cosmetics)",
            "κύριος, ὁ ": "Lord, master, sir",
            "λόγος, ὁ ": "word, message, account (logic, theology,psychology)",
            "νόμος, ὁ ": "law, principle (theonomists)",
            "οὐρανός, ὁ": " heaven, sky (Uranus)",
            "υἱός, ὁ ": "son, descendant",
            "Χριστός, ὁ ": "Christ, Messiah, Anointed One (Christ)",
            "ἔργον, τό": "work, deed (ergonomic)",
            "εὐαγγέλιον, τό ": "good news, gospel (evangelistic, evangelical)",
            "ἱερόν, τό ": "temple, sanctuary",
            "σημεἱον, τό ": "sign (semiotics)",
            "τέκνον, τό": " child, son, descendant",
            "εἰμί ": "I am, exist",
            "ἀκούω": " I hear, listen to, obey (acoustics)",
            "γινώσκω ": "I know, understand, acknowledge (knowledge, Gnostics)",
            "γράφω ": "I write (graphics)",
            "ἔχω ": "I have, hold",
            "λέγω ": "I say, speak (legend)",
            "λαμβάνω ": "I take, receive",
            "λύω ": "I loose, destroy",
            "πιστεύω ": "I believe, have faith/trust in",
            "ἀποκρίνομαι ": "I answer, reply",
            "γίνομαι ": "I become, come, exist, am born",
            "ἔρχομαι ": "I come, go16",
            "πορεύομαι ": "I go, travel",
            "ἀλλά ": "18 but, yet, nevertheless",
            "ὅτι": " that, because",
            "ἄγω ": "- I lead, bring (pedagogical)",
            "βλέπω": " - I see, look at",
            "διδάσκω": " - I teach (didactic)",
            "ἐγείρω ": "- I raise up",
            "κρίνω ": "- I judge, condemn (critic)",
            "μένω": " - I remain, abide, dwell (remain)",
            "ὑπάγω": " - I go away, depart",
            "δοῦλος, -ου, ὁ ": "-  slave (doula)",
            "θάνατος, -ου, ὁ ": "-  death (“Thanatopsis,” poem by William Cullen Bryant)",
            "ψυχή, -ης, ἡ ": "- soul, life, living being (psychology)",
            "ὥρα, -ας, ἡ ": "- hour",
            "εἰ ": "if, - whether",
            "εἴτε ": "if, - whether",
            "καθώς": " - as, just as, even as",
            "ὡς ": "as, - like",
            "ὦ, τό ": "- end, Omega",
            "ὁδὸς, ἡ ": "- way",
            "βασιλεὺς, -έως, ὁ ": "- King (3rd Declension)",
            "ἄρτος, -ου, ὁ ": "-  Bread ",
            "ναός, -οῦ, ὁ ": "- temple/shrine",
            "Ἰσραήλ, ὁ ": "- Israel"
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


const shuffleQuiz = (arr) => {
    arr.sort(() => Math.random() - 0.5);
}


console.log(shuffleQuiz(vocabularyTwo))

let currentVocab = 0;
//load vocabulary 



const loadVocabulary = () => {
    greekVocab.innerHTML = vocabKeys[currentVocab];
    englishVocab.innerHTML = vocabulary[0][vocabKeys[currentVocab]]
}


console.log(vocabKeys.length)
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