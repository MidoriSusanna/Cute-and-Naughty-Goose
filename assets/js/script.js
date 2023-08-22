// Tag the Start Button and add event listener on the click of the user to start the game
let startButton = document.getElementById('start-btn');
startButton.addEventListener('click', runGame);

let nextButton = document.getElementById('next-btn');

let questionContainerElement = document.getElementById('question-answers-container');

// Will be defined in the setNextQuestion function
let currentQuestionIndex;

let questionElement = document.getElementById('questions');
let answerButtonsElement = document.getElementById('answer-buttons');

// When the game starts, the start button needs to be hidden, questions and options displayed
function runGame() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    currentQuestionIndex = 0;
    setNextQuestion();

}

function setNextQuestion () {
    if (currentQuestionIndex < questions.length) {
        let question = questions[currentQuestionIndex];
        showQuestion(question);
        currentQuestionIndex++;
    } else {
        // Go to profile according to the score
    }
}

function showQuestion() {
    questionElement.innerText = currentQuestion.question;
    // Clear previous answer buttons
    answerButtonsElement.innerHTML = '';

    // Iterates through the array of answer choices associated with the current question
    currentQuestion.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        // Adds an event listener to the button
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

// Reset state after answering the question
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild);
    }
}

function selectAnswer() {


}

function addScoreCute() {

}

function addScoreNaughty() {

}

function selectProfile() {

}

// Array of questions
let questions = [
    {
        question: "As you awaken in the morning, a profound weariness envelops you. However, duty calls, and you must head to the pond for work. You make your way to the kitchen to prepare your breakfast of corn and salad, only to find that your chameleon roommate has neglected the dishes, leaving you with the task. The chameleon has expertly blended into its surroundings. What do you do?",
        answers: [
            { text: "Duck the chameleon. You're going to hunt in the pond. Before leaving, you decide to play a little prank on your elusive chameleon roommate. You sneakily hide its alarm clock (hoping that it's not observing your actions from its clever hiding place).",
              cute: false,
            },
            { text: "I'm certain that the chameleon must have had a valid reason for not washing the dishes—perhaps it's feeling unwell or exhausted. I'll tidy up using my quills, and then I'll go to the pond for my work.",
              cute: true,
            }
        ]
    }
];

runGame();