const Data = [
  {
    question: "What does   HTML stands for ?",
    a: "Hyper Text Markup Language ",
    b: "Hypo Text Markup Language",
    c: "Hard Test Marking Language",
    d: "High Text Marking Language",
    correct: "a",
  },
  {
    question: "What does CSS stands for ?",
    a: "Computer Style Sheet ",
    b: "Cascading Shading Sheet",
    c: "Cascading Style Sheet",
    d: "Computer Style Sheet",
    correct: "c",
  },
  {
    question: "What does  JSON stands for ?",
    a: "Java Object Notation",
    b: "JavaScript on Nation",
    c: "All of the above",
    d: "JavaScript Object Notation",
    correct: "d",
  },
  {
    question: "Is the body part of the html tag ",
    a: "NO ",
    b: "YES",
    c: "Cannot tell",
    d: "No idea",
    correct: "b",
  },
];
const grabId = (idName) => {
  const ElementId = document.getElementById(idName);
  if (ElementId) return ElementId;
  throw new Error(`cannot find the id ${idName}`);
};
const option1 = grabId("option1");
const option2 = grabId("option2");
const option3 = grabId("option3");
const option4 = grabId("option4");
let nextBtn = grabId("btn-next");
let prevBtn = grabId("btn-prev");
const quiz = grabId("quiz");
const question = document.querySelector("h3");
const answers = document.querySelectorAll(".answer");

let currentQuize = 0;
let score = 0;

loadQuize();
function loadQuize() {
  unCheckAnswer();
  let nextOption = Data[currentQuize];
  question.innerText = nextOption.question;
  option1.innerText = nextOption.a;
  option2.innerText = nextOption.b;
  option3.innerText = nextOption.c;
  option4.innerText = nextOption.d;
  nextBtn.addEventListener("click", nextQuestion);
  prevBtn.addEventListener("click", PreviousQuestion);
}
function nextQuestion() {
  const answer = getValue();
  if (answer) {
    if (answer === Data[currentQuize].correct) {
      score++;
    }
    currentQuize++;
    if (currentQuize < Data.length) {
      loadQuize();
    } else if (score === Data.length) {
      quiz.innerHTML = `<h1> Congratulations 👏👏 <br/>You scored ${score}/${Data.length}</h1>`;
    } else {
      quiz.innerHTML = `<h1> You scored ${score}/${Data.length}`;
    }
  }
}

function PreviousQuestion() {
  if (currentQuize.valueOf() === 0) {
    alert("Can't go back anymore");
  } else {
    initialQuize--;
    loadQuize();
  }
}

function getValue() {
  let value = undefined;
  answers.forEach((answer) => {
    if (answer.checked) {
      value = answer.id;
    }
  });
  return value;
}

function unCheckAnswer() {
  answers.forEach((answer) => {
    answer.checked = false;
  });
}
