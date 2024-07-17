const sports1=document.getElementById('oneCategory')
const politics1=document.getElementById('twoCategory')
const books1=document.getElementById('threeCategory')
const movie1=document.getElementById('fourCategory')
const music1=document.getElementById('fiveCategory')
const history1=document.getElementById('sixCategory')

const sports=document.getElementById('sports')
const politics=document.getElementById('politics')
const books=document.getElementById('books')
const movie=document.getElementById('movie')
const music=document.getElementById('music')
const history=document.getElementById('history')


sports1.addEventListener("mouseover",hoveron);
politics1.addEventListener("mouseover",hoveron);
books1.addEventListener("mouseover",hoveron);
movie1.addEventListener("mouseover",hoveron);
music1.addEventListener("mouseover",hoveron);
history1.addEventListener("mouseover",hoveron);




sports1.addEventListener("mouseout",hoveroff);
politics1.addEventListener("mouseover",hoveroff);
books1.addEventListener("mouseover",hoveroff);
movie1.addEventListener("mouseover",hoveroff);
music1.addEventListener("mouseover",hoveroff);
history1.addEventListener("mouseover",hoveroff);

function hoveron(){
    sports1.style.width="100%";
    politics1.style.width="1vw";
    books1.style.width="1vw";
    movie1.style.width="1vw";
    music1.style.width="1vw";
    history1.style.width="1vw";
}

function hoveroff(){
    sports1.style.width="11.6vw";
    politics1.style.width="11.6vw";
    books1.style.width="11.6vw";
    movie1.style.width="11.6vw";
    music1.style.width="11.6vw";
    history1.style.width="11.6vw";
}