const image=document.getElementById('image-change')

const heading=document.getElementById('heading')
const news_data=document.getElementById('news-data')



image.addEventListener("mouseover",mouseover);
image.addEventListener("mouseout",mouseout);

news_data.addEventListener("mouseover",mouseover);
news_data.addEventListener("mouseout",mouseout);

heading.addEventListener("mouseover", mouseover);
heading.addEventListener("mouseout",mouseout);

function mouseover(){
    heading.style.position = "absolute";
    heading.style.display= "block";
    news_data.style.display= "block";
    image.style.transitionDuration = "1s";
    image.style.background.filter = "blur(5px)";
    image.style.filter = "blur(5px)";
    image.style.width = "72vw";
    image.style.height = "57vh";
}
function mouseout(){
    heading.style.display= "none";
    news_data.style.display= "none";
    image.style.transitionDuration = "1s";
    image.style.background.filter = "blur(0px)";
    image.style.filter = "blur(0px)";
    image.style.width = "70vw";
    image.style.height = "55vh";
    
}

const body=document.getElementById('bod')
const home_hover=document.getElementById('home_hover1')
const hover_logo=document.getElementById('hover_logo')

body.addEventListener("mouseover",mouseon);
body.addEventListener("mouseout",mouseoff);

home_hover.addEventListener("mouseover",mouseon);
home_hover.addEventListener("mouseout",mouseoff);

hover_logo.addEventListener("mouseover",mouseon);
hover_logo.addEventListener("mouseout",mouseoff);


function mouseon(){
    home_hover.style.display= "block";
    hover_logo.style.transitionDuration= "3s";
    hover_logo.style.width= "55.5vw";
    hover_logo.style.heading= "15vh";
}
function mouseoff(){
    home_hover.style.display= "none";
    hover_logo.style.width= "40vw";
    hover_logo.style.heading= "15vh";
    hover_logo.style.transitionDuration= "0s";
}


