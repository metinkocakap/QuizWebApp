const quizData = [
    {   
        id:1,
        question: "Malatyanın plakası nedir?",
        a: "21",
        b: "34",
        c: "46",
        d: "44",
        correct: "d",
        quizscore:10,
    },
    {
        id:2,
        question: "Malatyanın ünlü meyvesi nedir?",
        a: "Karpuz",
        b: "Kayısı",
        c: "Üzüm",
        d: "Elma",
        correct: "b",
        quizscore:10,
    },
    {
        id:3,
        question: "Malatyanın ünlü yazılımcısı kimdir?",
        a: "Gül Ali ÇELİK",
        b: "Ahmet Ata",
        c: "Mehmet Emin",
        d: "Recep Kaya",
        correct: "a",
        quizscore:20,
    },
    {   
        id:4,
        question: "Malatya hangi bölgededir?",
        a: "Güney Doğu Anadolu",
        b: "Doğu Anadolu",
        c: "Karadeniz",
        d: "Akdeniz",
        correct: "b",
        quizscore:15,
    },
    {
        id:5,
        question: "Malatya kaç ilçesi vardır?",
        a: "18",
        b: "13",
        c: "11",
        d: "22",
        correct: "b",
        quizscore:45,
    },


];




const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const prevBtn= document.getElementById('prev')


let currentQuiz = 0
let score = 0
let topscore=[];
loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
prevBtn.addEventListener('click', ()=>{
  
})

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++         
       }
       currentQuiz++
       const  answerLocal=[];
       localStorage.setItem("answerLocal",answer)
       answerLocal.push(answer);
       console.log(answerLocal);
       console.log(topscore)
       
      

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Sorulan sorulardan ${score}/${quizData.length} yaptınız. Toplam skorunuz: ${topscore}</h2>

           <button onclick="location.reload()">Reload</button>
           `
    
       }
    }
})


