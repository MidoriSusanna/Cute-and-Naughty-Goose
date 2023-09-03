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
<p>Colours: The chosen color palette is inspired by the soft and natural colors of geese. It encompasses shades of yellow, variations of orange, and employs a contrasting grey for the lettering. Furthermore, the palette incorporates minor colors, including a pink tone. </p><br>
<p>Font: The font choice includes a cursive style('Itim', cursive) to add a playful and gentle touch to the game design. For the main text, a standard font is used('Montserrat', sans-serif) to ensure a user-friendly experience, avoiding confusion and maintaining page visibility.</p><br>
<p>Background: </u> The background was custom-designed specifically for this project using Adobe Illustrator. The main idea was to keep things simple while adding a touch of playfulness. The pattern is designed to be easy on the eyes and doesn't tie it to any specific image. Instead, it creates a relaxed vibe through its repetitive nature. The incorporation of goose icons, sourced from the website https://www.flaticon.com/free-icon/duck_1886902, further enhances the overall playful atmosphere. </p>
<p>Icons: Two custom icons were designed specifically for the score counting, adhering to the selected color scheme. The goal is to provide the result in the most straightforward manner possible, aided by these visual icons.</p><br>

<h1>Testing</h1>
HTML Tested with (index.html, game.html, profile.html pages):<br>
https://validator.w3.org/nu/ <br>
Fixed errors: <br>
-	Used the button html element with the a element, changed with only a element <br>
No more issues found, the code passed the validator with no errors. <br>
<image src="./assets/images/indexhtml-valid.png"><br>
There is a warning about an empty h1, but that is used in the index.js page to show the initial greeting after submitting the form. <br>
<image src="./assets/images/gamehtml-valid.png"><br>
<image src="./assets/images/profilehtml-valid.png"><br>
<br>
<br>
CSS Tested with: <br>
https://jigsaw.w3.org/css-validator/#validate_by_input <br>
The code passed the validator with no errors. <br>
<image src="./assets/images/css-valid.png"><br>
<br>
<br>
JS Tested with: <br>
https://jshint.com <br>
The code passed the validator with no errors. <br><br>
I experienced some issues implementing some functions while building the game: <br>
- At the beginning, on the game.html page I had thought of also providing a reset score button (in addition to the 'Start Again' button) and had added a dedicated function. The reset button, although it worked, complicated the game considerably (e.g. it would have required a 'previous' button in addition to 'next') and I preferred to return it to simpler functionality. <br>
- If more than one script is assigned to the same page, errors may be produced due to the fact that variables and functions may not be present on the page. In general, I have tried to have one .js page for each .html page, keeping the functions separate.<br>
- During the implementation of some functions, I used the console.log (which I later removed) to understand the elements the function was using. This proved essential in the section of the game where arrays are used. <br>
- Given the structure of my code, one of the most complex functions to build was the one called noDoubleChoice. This function prevents the user from having more than one answer (and therefore also prevents the score from increasing by more than 5 in total). The function itself was constructed through pointer events, but the crux to be understood was where to call this function. For the score counter to work as intended, the function must be called within the functions incrementCute and incrementNaughty. <br>
- In the question array, there was initially an error that caused some questions to be skipped. With the code used I was at the same time shortening the availableQuestions array AND at the same time increasing the questionsIndex. <br>
- The "Next" button was initially taken into the array and giving a value of undefined. I solved the issue by removing the class of btn from the button. <br>
- I wanted to add an alert to make the users not able to skip a question. Doing so, I was not able to proceed with the game because in my logic out of ALL question, if one was not answered, then it is not possible to proceed. The difference is: <br>
incorrect: const unansweredQuestions = document.querySelectorAll('.btn:not(.chosenChoice)'); <br>
const currentQuestionAnswered = document.querySelector('.btn[data-number="1"].chosenChoice, .btn[data-number="2"].chosenChoice'); <br>
- The use of localStorage also created some issues due to the fact this element links the game section to the final section. In this case too, the issue with the code was about placement. It needs to be located in the nextQuestion function, when there are no more available questions. <br>
<br>
<br>
Ligthouse Report: <br>
The Lighthouse Report is optimal for performance, accessibility, best practices and SEO on index.html, game.html and profile.html. <br>
The code doesn't present any error on the DevTool of Chrome. No bugs were found.<br>
<image src="./assets/images/lighthouse-index.png"><br>
<image src="./assets/images/lighthouse-game.png"><br>
<image src="./assets/images/lighthouse-profile.png"><br>
<br>
<br>
The website is responsive on different screen sizes, the layout is adapted to different media queries. <br>

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
Pointer events: https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events <br>
Mockup/Responsiveness: https://ui.dev/amiresponsive <br>
Fonts: https://fonts.google.com <br>
A big thank you to the Student Support of Code Institute who have been extremely helpful. <br>
</p>


