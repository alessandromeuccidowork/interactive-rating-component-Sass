
const ratingCard = document.querySelector('#rating-card');

const thanksCard = document.querySelector('#thanks-state')
thanksCard.classList.add('invisible');

// Hide the rating Card and Show the Thanks Card
const sumbitBtn = document.querySelector('#submit-btn').addEventListener('click', function handelClick() {

if (ratingCard.className === 'card') {
    ratingCard.className = 'invisible';
} 
if (ratingCard.className === 'invisible') { 
    thanksCard.classList.remove('invisible');
}
else {
    ratingCard.className = 'card';
}
});

// Send the Ratings 
const ratingBtn = document.querySelectorAll('#ratings-btn').length;

for (let i = 0; i < ratingBtn; i++) {
document.querySelectorAll('#ratings-btn')[i].addEventListener('click', function handelClick() {

document.querySelector('.vote').innerHTML = this.innerHTML
})
}