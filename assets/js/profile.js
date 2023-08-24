// Function to display the Goose name after submitting it, display as a child of the submit element
function displayGooseName(e) { 
    let form = document.querySelector('form');
    let postGooseName = document.createElement('h1');
    
    form.addEventListener('submit', (e) => {
    let getName = document.getElementById('gooseName').value;
    console.log(getName); // Check if the name is printed to the console
    e.preventDefault(); // The e.preventDefault() is to prevent the default settings of the submit EventListener: https://betterprogramming.pub/click-vs-submit-eventlisteners-536b62be9359
    postGooseName.innerText = `Hi, ${getName}!`;
    document.getElementById("displayName").appendChild(postGooseName);
})};
displayGooseName();