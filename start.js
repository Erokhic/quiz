

let name = document.querySelector('.name')
let startBtn = document.getElementById('startBtn')
let name_error = document.querySelector('.name_error')


const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score-text');

const questions = [
    {
        question: "Какая планета Солнечной системы самая горячая?",
        answers: [
            { text: "Венера", correct: true },
            { text: "Меркурий", correct: false },
            { text: "Марс", correct: false },
            { text: "Юпитер", correct: false }
        ],
        explanation: "Венера - самая горячая планета из-за плотной атмосферы, создающей сильный парниковый эффект. Температура достигает 470°C."
    },
    {
        question: "Как называется наша галактика?",
        answers: [
            { text: "Туманность Андромеды", correct: false },
            { text: "Млечный Путь", correct: true },
            { text: "Галактика Сомбреро", correct: false },
            { text: "Большое Магелланово Облако", correct: false }
        ],
        explanation: "Наша галактика называется Млечный Путь. Это спиральная галактика, в которой находится наша Солнечная система."
    },
    {
        question: "Сколько времени нужно свету, чтобы достичь Земли от Солнца?",
        answers: [
            { text: "1 секунда", correct: false },
            { text: "1 минута", correct: false },
            { text: "8 минут", correct: true },
            { text: "1 час", correct: false }
        ],
        explanation: "Свет от Солнца достигает Земли примерно за 8 минут 20 секунд, преодолевая расстояние около 150 миллионов километров."
    },
    {
        question: "Что такое черная дыра?",
        answers: [
            { text: "Облако космической пыли", correct: false },
            { text: "Потухшая звезда", correct: false },
            { text: "Область с такой сильной гравитацией, что даже свет не может ее покинуть", correct: true },
            { text: "Скопление астероидов", correct: false }
        ],
        explanation: "Черная дыра - это область пространства-времени с чрезвычайно сильным гравитационным полем, которое не позволяет никаким объектам и излучению покинуть её."
    },
    {
        question: "Какой был первый искусственный спутник Земли?",
        answers: [
            { text: "Спутник-1", correct: true },
            { text: "Аполлон-11", correct: false },
            { text: "Вояджер-1", correct: false },
            { text: "Хаббл", correct: false }
        ],
        explanation: "Спутник-1 был первым искусственным спутником Земли, запущенным Советским Союзом 4 октября 1957 года."
    },

];



let currentQuestion = 0  //тек номер вопроса
let userAnswers = [];


startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (!name.value.trim()) {
        name_error.style.color = 'red';
        name.style.borderColor = 'red';
        name_error.textContent = 'Введите имя';
    } else {
        currentQuestion = 0;
        userAnswers = [];
        showScreen(quizScreen); // Показать экран с вопросами
        showQuestion();   // Показать первый вопрос
    }

})


function showScreen(screen) {

    startScreen.classList.remove('active');  //скрыть экран
    quizScreen.classList.remove('active');
    resultsScreen.classList.remove('active');

    screen.classList.add('active');
}



function showQuestion() {
    const q = questions[currentQuestion]
    questionText.textContent = q.question

answersContainer.innerHTML = ''

q.answers.forEach(answer=>{
    let button = document.createElement('button')
    button.className = 'answer-btn'
    button.textContent  = answer.text


    button.addEventListener('click', ()=>{
       document.querySelectorAll('.answer-btn').forEach(btn=>{
        btn.style.background = 'rgba(255, 255, 255, 0.1)';
        btn.style.color = 'white';
        btn.style.borderColor = '#4fc3f7';
       })

          button.style.background = 'blue';
           button.style.color = 'white';

           nextBtn.disabled = false
           nextBtn.style.background = 'green'

           userAnswers[currentQuestion] = {
            question: q.question,
            selected: answer.text,
            correct: answer.correct,
            explanation: q.explanation
    }
    })
    answersContainer.appendChild(button)
})
nextBtn.disabled = true 
nextBtn.style.background = 'gray'
}




nextBtn.addEventListener('click', () =>{
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    showScreen(resultsScreen);

    let rightAnswers = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i].correct === true) {
            rightAnswers = rightAnswers + 1
        }
    }
    scoreText.textContent = 'Правильно: ' + rightAnswers + ' из ' + userAnswers.length

    resultsContainer.innerHTML = ''

    for (let i = 0; i < userAnswers.length; i++) {
        let answer = userAnswers[i]

        let block = document.createElement('div')
        block.className = 'result-item'

        let questionLine = document.createElement('div')
        questionLine.innerHTML = '<strong> Вопрос ' + (i + 1) + ': ' + answer.question + '</strong>'

        block.appendChild(questionLine)


        let userAnswersLine = document.createElement('div')

        if (answer.correct) {
            userAnswersLine.textContent = 'Вы ответили: ' + answer.selected
            userAnswersLine.style.color = 'green' 
        } else {
      
            userAnswersLine.textContent = 'Вы ответили: ' + answer.selected 
            userAnswersLine.style.color= 'red' 
        }
        block.appendChild(userAnswersLine)

let explanationLine = document.createElement('div');
        explanationLine.className = 'explanation';
        explanationLine.textContent = answer.explanation;
        block.appendChild(explanationLine);
        
        resultsContainer.appendChild(block)

    }
}


restartBtn.addEventListener('click', function () {
    showScreen(startScreen);
    name.value = ''
});

