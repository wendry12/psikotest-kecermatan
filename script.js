let currentColumn = 1;
const maxColumns = 10;
const maxQuestionsPerColumn = 50;
let questionCount = 0;
let timer = 60;
let countdownInterval;
let correctAnswer;
let score = 0;
let currentSymbols = [];
let isGameOver = false;

function startTest() {
    let countdown = 3;
    const startScreen = document.getElementById("start-screen");
    
    startScreen.innerHTML = `<h1>${countdown}</h1>`;
    
    const interval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            startScreen.innerHTML = `<h1>${countdown}</h1>`;
        } else {
            clearInterval(interval);
            startScreen.style.display = "none";
            document.getElementById("test-container").style.display = "block";
            document.querySelector(".content-wrapper").style.display = "flex";
            startTimer();
        }
    }, 1000);
}

function startTimer() {
    countdownInterval = setInterval(() => {
        let minutes = String(Math.floor(timer / 60)).padStart(2, '0');
        let seconds = String(timer % 60).padStart(2, '0');
        document.getElementById('countdown').textContent = `${minutes}:${seconds}`;

        if (timer === 0) {
            if (currentColumn < maxColumns) {
                updateColumn();
                timer = 60;
            } else {
                clearInterval(countdownInterval);
                isGameOver = true;
                alert(`Skor Akhir: ${score}/500`);
            }
        }
        timer--;
    }, 1000);
}

function updateColumn() {
    if (currentColumn < maxColumns) {
        currentColumn++;
        questionCount = 0;
        document.getElementById("column-title").textContent = "Kolom " + currentColumn;
        updateSymbols();
    } else {
        clearInterval(countdownInterval);
        isGameOver = true;
        alert(`Skor Akhir: ${score}/500`);
    }
}

function updateSymbols() {
    let symbols = new Set();
    while (symbols.size < 5) {
        symbols.add(currentColumn % 2 === 0 ? getRandomLetter() : getRandomNumber());
    }
    currentSymbols = Array.from(symbols);

    let symbolRow = document.getElementById("symbol-row");
    symbolRow.innerHTML = currentSymbols.map(sym => `<td>${sym}</td>`).join('');

    generateQuestion();
}

function generateQuestion() {
    if (questionCount >= maxQuestionsPerColumn) {
        updateColumn();
        return;
    }
    questionCount++;

    let missingIndex = Math.floor(Math.random() * currentSymbols.length);
    correctAnswer = ['A', 'B', 'C', 'D', 'E'][missingIndex];
    let shuffled = [...currentSymbols];
    shuffled.splice(missingIndex, 1);

    let questionRow = document.getElementById("question-row");
    questionRow.innerHTML = shuffled.map(sym => `<td>${sym}</td>`).join('');
}

function selectOption(element, selectedAnswer) {
    if (isGameOver) return; 
    
    document.querySelectorAll('.answer-table td').forEach(td => td.classList.remove('selected'));
    element.classList.add('selected');
    
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    generateQuestion();
}

function getRandomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}

window.onload = function () {
    updateSymbols();
};
