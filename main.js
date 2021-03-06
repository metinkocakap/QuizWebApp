const quizData = [
  {
    id: 0,
    question: "Malatyanın plakası nedir?",
    a: "21",
    b: "34",
    c: "46",
    d: "44",
    correct: "44",
    quizscore: 10,
  },
  {
    id: 1,
    question: "Malatyanın ünlü meyvesi nedir?",
    a: "Karpuz",
    b: "Kayısı",
    c: "Üzüm",
    d: "Elma",
    correct: "Kayısı",
    quizscore: 10,
  },
  {
    id: 2,
    question: "Malatyanın ünlü yazılımcısı kimdir?",
    a: "Gül Ali ÇELİK",
    b: "Ahmet Ata",
    c: "Mehmet Emin",
    d: "Recep Kaya",
    correct: "Gül Ali ÇELİK",
    quizscore: 20,
  },
  {
    id: 3,
    question: "Malatya hangi bölgededir?",
    a: "Güney Doğu Anadolu",
    b: "Doğu Anadolu",
    c: "Karadeniz",
    d: "Akdeniz",
    correct: "Doğu Anadolu",
    quizscore: 15,
  },
  {
    id: 4,
    question: "Malatya kaç ilçesi vardır?",
    a: "18",
    b: "13",
    c: "11",
    d: "22",
    correct: "13",
    quizscore: 45,
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const prevBtn = document.getElementById("prev");

let storedAnswers = {};
let currentQuiz = 0;
let score = 0;
let topscore = [];
loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  a.value = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  b.value = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  c.value = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  d.value = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function updateLocalStorage() {
  localStorage.removeItem("storedAnswers");
  localStorage.setItem("storedAnswers", JSON.stringify(storedAnswers));
}

const next = () => {
  var ans = document.querySelector('input[name="answer"]:checked').value;
  if (ans) {
    storedAnswers[currentQuiz] = ans;
    updateLocalStorage();
  }
  if (currentQuiz < quizData.length - 1) {
    currentQuiz++;
    loadQuiz();
  } else {
    let localS = JSON.parse(localStorage.getItem("storedAnswers"));
    quizData.forEach((item) => {
      if (localS[item.id] == item.correct) {
        score += item.quizscore;
      }
    });
    quiz.innerHTML = `
               <h2>toplam puan ${score} </h2>

            <button onclick="location.reload()">Reload</button>
        `;
    console.log("puan " + score);
  }
};
const prev = () => {
  if (currentQuiz != 0) {
    currentQuiz--;
    loadQuiz();
  }
};

// submitBtn.addEventListener("click", () => {
//   const answer = getSelected();

//   if (answer) {
//     if (answer === quizData[currentQuiz].correct) {
//       score++;
//     }
//     currentQuiz++;
//     const answerLocal = [];
//     localStorage.setItem("answerLocal", answer);
//     answerLocal.push(answer);
//     console.log(answerLocal);
//     console.log(topscore);

//     if (currentQuiz < quizData.length) {
//       loadQuiz();
//     } else {
//       quiz.innerHTML = `
//            <h2>Sorulan sorulardan ${score}/${quizData.length} yaptınız. Toplam skorunuz: ${topscore}</h2>

//            <button onclick="location.reload()">Reload</button>
//            `;
//     }
//   }
// });
