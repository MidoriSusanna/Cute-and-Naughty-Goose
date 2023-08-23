// --- Global Variables --- //
const question = document.getElementById('questions');
const answerText = Array.from(document.querySelectorAll(`.btn`));

let currentQuestion = {};
let score = 0;
let availableQuestions = [];
let questionsIndex = 0;

//  Quiz Questions and Choices - Array
let questions = [
    {
        question: "As you awaken in the morning, a profound weariness envelops you. However, duty calls, and you must head to the pond for work. You make your way to the kitchen to prepare your breakfast of corn and salad, only to find that your chameleon roommate has neglected the dishes, leaving you with the task. The chameleon has expertly blended into its surroundings. What do you do?",
        choice1: "Lazy chameleon! You're going to hunt in the pond. Before leaving, you decide to play a little prank on your elusive chameleon roommate. You sneakily hide its alarm clock (hoping that it's not observing your actions from its clever hiding place).",
        choice2: "I'm certain that the chameleon must have had a valid reason for not washing the dishes—perhaps it's feeling unwell or exhausted. I'll tidy up using my quills, and then I'll go to the pond for my work.",
        cute: 1
    },
    {
        question: "You find yourself in a serene pond, engrossed in the simple joy of stacking colorful stones. Out of nowhere, a friendly frog emerges from behind the lush plants and, with a look of desperation, implores for your assistance because its tongue is stuck to an icicle. What do you do?",
        choice1: "I can't help but burst into laughter at the comical sight of the frog struggling to talk with its tongue stuck to the popsicle. If I help it, it might try to steal my food...",
        choice2: "My laughter seems to amuse the frog as well, and it giggles in response, its eyes sparkling with mirth. After sharing a good laugh, I decide to lend a helping hand.",
        cute: 1
    },

    {
        question: "While on your journey home, an unexpected encounter halts your steps as your friend armadillo approaches you with a gracious compliment. ‘What beautiful feathers you have, and what an interesting beak’, the armadillo admires. What do you do?",
        choice1: "‘Well, I do have a lovely beak and these beautiful feathers, indeed’, I reply with a touch of pride. ‘In fact, just yesterday, I paid a visit to the goose beautician to give my beak that extra shine’.",
        choice2: "I express my gratitude to the armadillo for the compliment and offer a warm smile in return. Receiving kindness from others is always a wonderful thing!",
        cute: 1
    },

    {
        question: "Upon arriving home and realizing that your chameleon roommate is once again masterfully concealed, leaving you with the impression of having the house to yourself, you need to decide what to do before sleeping. What do you do?",
        choice1: "Of course I’d like to organize a party! I'll extend invitations to the frog, the armadillo, and all our other animal friends. Here's hoping my chameleon roommate doesn't catch wind of our plans...",
        choice2: "I'm not entirely sure if the chameleon is home, but I'd rather not disturb it. It sounds like a perfect evening to dedicate some well-deserved self-care to myself: some well-deserved relaxation!",
        cute: 1
    },
    {
        question: "As you get ready to sleep, everything is peaceful, and the only sound you hear is the distant croaking of the frogs in the pond. What do you think about before you fall asleep?",
        choice1: "Oh, no! Tomorrow means more work on the pond... Maybe I'll consider calling in sick.",
        choice2: "Today has truly been a great day, filled with moments spent with dear friends. I feel grateful, and I hope that tomorrow will bring just as much joy as today did.",
        cute: 1
    }
        ];

// Run Game and set questions to 0 and score to 0
let runGame = () => {
    score = 0;
    availableQuestions = [...questions]; // concise way to clone or copy an array
    getNewQuestion();
};

let getNewQuestion = () => {
    // check that the questionIndex is inside the bounds of the available questions
    if (questionsIndex < availableQuestions.length) {
    currentQuestion = availableQuestions[questionsIndex]; 
    question.innerText = currentQuestion.question; // sets the text content of the HTML element with the id question

    answerText.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];

        console.log(questionsIndex); // checking available questions
        console.log(availableQuestions);
    });
}

};

// Add event listener to the next button 
document.getElementById('next-btn').addEventListener('click', () => {
    if (questionsIndex < availableQuestions.length - 1) {
        questionsIndex++; 
        getNewQuestion();
    } else {
        window.location.href = 'profile.html'; // If no more questions are found, go to profile page
    }
});
// Calling functions
runGame();
/*getNewQuestion();*/

/* Increment the score of cute if answer cute */
function incrementCute() {
    let beCute = document.querySelector('button[data-number="1"]');

    // Add event listener to the answers with data-number attribute equal to 1
    beCute.addEventListener('click', () => { 
    let oldScore = parseInt(document.getElementById('cute-goose-score').innerText);
    document.getElementById('cute-goose-score').innerText = oldScore++ 
});
}
incrementCute();
/* Increment the score of naughty if answer naughty */
function incrementNaughty() {
    let beNaughty = document.querySelector('button[data-number="2"]');

    // Add event listener to the answers with data-number attribute equal to 2
    beNaughty.addEventListener('click', () => { 
    let oldScore = parseInt(document.getElementById('naughty-goose-score').innerText);
    document.getElementById('naughty-goose-score').innerText = oldScore++ 
});
}
incrementNaughty();