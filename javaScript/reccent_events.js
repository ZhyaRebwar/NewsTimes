const img= document.getElementById('image-change')

const previous= document.getElementById('previous')
const next=document.getElementById('next')

const one=document.getElementById('one')
const two=document.getElementById('two')
const three=document.getElementById('three')
const four=document.getElementById('four')
const five=document.getElementById('five')

let imageNumber=1
/* datuanin 2 file pekawa bakarbenin la js wata zanyaryakani hover_data.js lerash bakarden */
next.addEventListener('click', () => {
    if(imageNumber==5){
        imageNumber=1
        one.checked=true;
        heading.innerText="Ronaldo's Move"
        news_data.innerText="Manchester United have confirmed they have agreed a deal to sign Cristiano Ronaldo from Juventus."
        img.href="../newsHtml/Newest1.html";
    }else{
        imageNumber+=1;
        switch(imageNumber){
            case 2:
                 two.checked=true;
                 heading.innerText="The Last Great"
                 news_data.innerText="6th century Byzantine general instrumental in reconquest of much of the former Roman Mediterranean territories (505-565)"
                 img.href="../newsHtml/Newest2.html";
                break;
            case 3:
                three.checked=true;
                heading.innerText="The Room Where It Happend"
                news_data.innerText= "As President Trump’s National Security Advisor, John Bolton spent many of his 453 days in the room where it happened, and the facts speak for themselves."
                img.href="../newsHtml/Newest3.html";
                break;
            case 4:
                four.checked=true;
                heading.innerText="Dune Move"
                news_data.innerText="A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future."
                img.href="../newsHtml/Newest4.html";
                break;
            case 5:
                five.checked=true;
                heading.innerText="Fils de Joie"
                news_data.innerText="Being alone is not easy, And it's been years since my last time, Being judgemental is much easier, Especially when you've never tried it"
                img.href="../newsHtml/Newest5.html";
                break;
            default:
                alert("somethign went wrong!");
        }
        
    }

    img.style.backgroundImage= `url("../images/${imageNumber}.jpg")`
})

previous.addEventListener('click', () => {
    if(imageNumber==1){
        imageNumber=5
        five.checked=true;
        heading.innerText="Fils de Joie"
        news_data.innerText="Being alone is not easy, And it's been years since my last time, Being judgemental is much easier, Especially when you've never tried it"
        img.href="../newsHtml/Newest5.html";
    }else{
        imageNumber-=1
        switch(imageNumber){
            case 4:
                four.checked=true;
                heading.innerText="Dune Move"
                news_data.innerText="A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future."
                img.href="../newsHtml/Newest4.html";
                break;
            case 3:
                three.checked=true;
                heading.innerText="The Room Where It Happend"
                news_data.innerText= "As President Trump’s National Security Advisor, John Bolton spent many of his 453 days in the room where it happened, and the facts speak for themselves."
                img.href="../newsHtml/Newest3.html";
                break;
            case 2: 
                two.checked=true;
                heading.innerText="The Last Great"
                news_data.innerText="6th century Byzantine general instrumental in reconquest of much of the former Roman Mediterranean territories (505-565)"
                img.href="../newsHtml/Newest2.html";
                break;
            case 1:
                one.checked=true;
                heading.innerText="Ronaldo's Move"
                news_data.innerText="Manchester United have confirmed they have agreed a deal to sign Cristiano Ronaldo from Juventus."
                img.href="../newsHtml/Newest1.html";
                break;
            default:
                alert("something went wrong!")
        }
    }


    img.style.backgroundImage = `url("../images/${imageNumber}.jpg")`
})