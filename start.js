let name = document.querySelector ('.name')
let startBtn = document.getElementById('startBtn')
let name_error = document.querySelector('.name_error')
let form = document.querySelector('.form')

let test = document.querySelector('.test')
let questionTitle = document.getElementById('question-title')
let questionImage = document.getElementById('question-image')
let answers = document.getElementById('answers')
let nextbtn = document.getElementById('nextbtn')


let results = document.getElementById('results')
let resultsText = document.getElementById('results-text')
let restart = document.getElementById('restart-quiz')


startBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if (!name.value.trim()) {
            name_error.style.color = 'red';
            name.style.borderColor = 'red';
            name_error.textContent = 'Введите имя';
        } else {
             localStorage.setItem('userName', name.value.trim());
            btn.style.backgroundColor = '#746ea0';
              
         setTimeout(() => {
            form.style.display = 'none';
        }, 500);
        }
    
})






