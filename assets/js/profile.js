// Store and show the final score 
document.addEventListener('DOMContentLoaded', () => {
const cuteScore = JSON.parse(localStorage.getItem('cute-goose-score'));
const naughtyScore = JSON.parse(localStorage.getItem('naughty-goose-score'));

document.getElementById('cute-score').textContent = cuteScore;
document.getElementById('naughty-score').textContent = naughtyScore;
});