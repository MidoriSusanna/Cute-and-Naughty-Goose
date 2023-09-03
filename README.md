<h1>Cute and Naughty Goose</h1>
<br>
<p>"Cute and Naughty Goose” falls somewhere between a game and an aptitude test; it offers an enjoyable experience and provides some valuable insights or food for thought for your day. <br>
Primarily designed for moments of leisure, this game is suitable for both adults and children. It's a game meant for moments to share with friends, allowing you to compare the kind of 'goose profile' you feel like on a given day. Beyond its playful and amusing side, it can also serve as a source of reflection and self-awareness for when you have a free moment, like during your daily commute from home to work. <br>
The game is intentionally designed to be brief to prevent users from losing interest and abandoning the page due to the length of the process. There are five comprehensive questions, each of substantial length, spanning the duration of a day in the life of the goose. <br>
The choice of the goose as the central character is partly due to its visual appeal and mischievous nature, making it a fitting choice. Inspiration for the game also draws from the animal world, akin to an Aesop's fable, where animals represent not just themselves but various human types and qualities. <br>
The guiding principle here is simple: fun. The game is instant and intuitively structured, with the aim of leaving a smile on the faces of those who play, without burdening them with complex questions or lengthy tests. <br></p>
<image src="./assets/images/mockup.png"><br>

<h1>Features </h1>
<p> The game comprises three distinct sections: an introductory page (index.html), the game or test (game.html), and a final page presenting two profiles of geese (profile.html). Each of these pages maintains a consistent header section with title and subtitle. <br>
On the introductory page (index.html), the game is succinctly explained, allowing the user to name their goose. Upon doing so, the game provides an introductory greeting. A "Start" button facilitates direct access to the main game. On all other pages, a dedicated button is always available for returning to the index.html start page. This feature enables players to easily restart the game without the need to use the browser's 'back' button. <br>
The game section (game.html) comprises a container where questions and answers are displayed, alongside a 'Next' button and a footer that showcases the score for each question. The score section, nearly identical on both the game.html and profile.html pages, consists of two icons and a score counter that increments based on the chosen answers. Additionally, within this section, there is a button allowing users to commence the game again from the home page. <br>
The page featuring the goose profiles (profile.html) has a score container just beneath the header, ensuring the final score is prominently visible to the user. It also has a section displaying two distinct goose profiles. Towards the end of the page, a button is provided for restarting the game, encouraging users to try again on the following day.<br></p> 

<h2> Intro Page </h2>
<image src="./assets/images/intro-page-img.png"><br>
<h3>Header - Title and Subtitle</h3>
<p>Featured on all three pages, the header consists of a container with a title and subtitle that already briefly and intuitively explain the function of the proposed game.</p><br>
<image src="./assets/images/header-img.png"><br>
<h3>Introduction and game explanation</h3>
<p> The game's explanation is contained within a central container on the page. Alongside this explanation, two functions are available: "Name your goose" and "Start”.<br>
"Name your goose" is a form where users can provide a name for the game's main character, the goose. This action results in an initial greeting generated through an event listener on the submit button, using also template literals. <br>
Once the goose is named, clicking the "Start" button will direct the user to the game.html page.<br></p>
<image src="./assets/images/intro-container-img.png"><br>

<h2> Game Pages </h2>
<image src="./assets/images/game-page-img.png"><br>
<h3>Game Container - Unfolding the Story</h3>
<p>The game's container displays a series of questions and answers, covering a day in the life of a goose. This functionality is achieved through functions utilizing arrays of questions and answers. Two important functions are worth highlighting: <br>
⁃	The “noDoubleChoice" function ensures that users cannot select more than one answer per question, maintaining the integrity of the game. <br>
⁃	There is an essential answer validation feature in place. Users are unable to proceed in the game without providing an answer. An alert will appear if the "Next" button is clicked without selecting an answer. <br>
The "Next" button serves the purpose of allowing users to progress to the next question. This addition was made to give users the opportunity to review their scores while playing and start the game again using the "Start Again" button. Without this function, one possible functionality option could involve advancing to the next question immediately upon selecting an answer. However, it's important to note that the game is intentionally designed not to be fast-paced. The primary aim is to provide users with a narrational experience, affording them ample time to read, reflect, make decisions, and even change their minds by starting over. <br>
Upon completing all the questions, the "Next" button directs users to the final page, profiles.html. </p><br>
<image src="./assets/images/game-container-img.png"><br>
<h3>Score Section</h3>
<p>The score section provides the user with real-time feedback, enabled by the incrementCute and incrementNaughty functions. It has two counters labeled "Cuteness Overload" and "Tomorrow I'll be Less Naughty," each featuring custom-designed icons tailored specifically for the game—a cute goose for "Cuteness Overload" and a naughty goose for "Tomorrow I'll be Less Naughty." Users will witness their scores increase with each selected answer. Additionally, a "Start Again" button is available to restart the game at the user's discretion. <br>
This almost identical score section is also present on the profile.html page, albeit without the "Start Again" button. In its place, there is a "Try Again Tomorrow" button positioned at the end of the page. The primary distinction lies in the placement of the score container: in the profile.html, it is situated at the page's top to ensure users have immediate visibility of their score upon redirection to the profile page at the conclusion of the game. <br>
To store the score, the game utilizes window.localStorage. The score is then retrieved and displayed within the profile.html page through localStorage when the page is loaded.</p><br>
<image src="./assets/images/game-score-img.png"><br>

<h2> Profile Page </h2>
<image src="./assets/images/profile-page1-img.png"><br>
<image src="./assets/images/profile-page2-img.png"><br>
<p>The profile page serves as the culmination of the game. Depending on the user's achieved score, they are presented with the profiles of the Cute Goose and the Naughty Goose. Both profiles are showcased on the same page, and users are guided through a narrative to the profile that best aligns with their disposition on that particular day.
Each profile features a humorous image of a goose, followed by a descriptive narrative. Each question and the corresponding animal within the narrative symbolize distinct facets of a potential user's day and life, encompassing aspects such as home, love, friends, and more. The goal is to entertain the user while offering potential insights into their day or prompting reflection.</p><br> 
<h3>Try Again Tomorrow</h3>
The 'Try Again Tomorrow' button is placed at the end of the page so that users can easily return to the home page and play the game again. Its name is a friendly reminder to try the game again on a different day. By putting the button at the end of the story and the final page, it becomes the last thing users see and remember. <br>
<image src="./assets/images/try-again-tomorrow-img.png"><br>

<h1>Design</h1>
<h1>Testing</h1>
<h1>Deployment</h1>
<p>The site was deployed to GitHub pages. The steps to deploy are as follows: <br>
- In the GitHub repository, navigate to the Settings tab <br>
- Select Pages from the side bar <br>
- Deploy from main branch, refresh for the link <br>

The deployed website can be found at this link: <br>
https://midorisusanna.github.io/Cute-and-Naughty-Goose/
</p><br>
<h1>Credits</h1>
<p>The initial part of the game was made through this game building video: https://www.youtube.com/watch?v=f4fB9Xg2JEY <br>
Additional help understanding a quiz game with Javascript: https://www.youtube.com/watch?v=riDzcEQbX6k <br>
Use of the Query Selector: <br>
https://www.w3schools.com/jsref/met_document_queryselector.asp <br>
https://www.youtube.com/watch?v=3oOKAJTD2F8 <br>
Media Queries: https://gist.github.com/gokulkrishh/242e68d1ee94ad05f488
Use of Local Storage: <br>
https://developer.mozilla.org/en-US/docs/Web/API/Storage <br>
https://blog.logrocket.com/localstorage-javascript-complete-guide/ <br>
Duck icon to produce the background: https://www.flaticon.com/free-icon/duck_1886902
Use of the data attribute: https://www.w3schools.com/tags/att_data-.asp <br>
How to use the shadow property: https://www.w3schools.com/cssref/css3_pr_box-shadow.php <br>
Text by me and corrected (English mistakes, vocabulary) with DeepL and ChatGPT. <br>
Pictures from open source websites: <br>
https://unsplash.com <br>
https://www.pexels.com <br>
Fonts: https://fonts.google.com <br>
A big thank you to the Student Support of Code Institute who have been extremely helpful. <br>
</p>


