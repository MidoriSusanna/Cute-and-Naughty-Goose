let questionsElement = document.getElementById('Question')
let optionButtons = document.getElementById('option-buttons')

let state = {}

function runGame() {
    state = {}
    showQuestionNode(1)

}

function showQuestionNode (QuestionNodeIndex) {

}

function selectAnswer(answer) {

}

function addScoreCute() {

}

function addScoreNaughty() {

}

let questionNodes = [
    {
        id: 1,
        question: "As you awaken in the morning, a profound weariness envelops you. However, duty calls, and you must head to the pond for work. You make your way to the kitchen to prepare your breakfast of corn and salad, only to find that your chameleon roommate has neglected the dishes, leaving you with the task. The chameleon has expertly blended into its surroundings. What do you do?",
        options: [
            { answer: "Duck the chameleon. You're going to hunt in the pond. Before leaving, you decide to play a little prank on your elusive chameleon roommate. You sneakily hide its alarm clock (hoping that it's not observing your actions from its clever hiding place).",
              nextQuestion: 2,
            },
            { answer: "I'm certain that the chameleon must have had a valid reason for not washing the dishes—perhaps it's feeling unwell or exhausted. I'll tidy up using my quills, and then I'll go to the pond for my work.",
              nextQuestion: 2,
            }

        ]
    }
]

runGame()