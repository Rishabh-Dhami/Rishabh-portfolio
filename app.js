const slides=document.querySelectorAll(".slide");
const navbar=document.querySelectorAll("#navbar a")

const sec=document.querySelectorAll("section")

function myMenu(){
    let current="";
    sec.forEach(sec=>{
        sectionTop=sec.offsetTop;
        sectinHeight=sec.clientHeight;

        if(pageYOffset >= (sectionTop - sectinHeight/3)){
            current=sec.getAttribute('id')
        }
    })

    navbar.forEach((nav,index)=>{
        nav.classList.remove("active")
        if(nav.classList.contains(current)){
            nav.classList.add("active")
        }
    
    })
}

window.addEventListener('scroll',myMenu)



 
 slides.forEach((slide,index)=>{
    slide.style.left=`${index * 100}%`;
 })


const goprev=()=>{
    slideDiv(0);
}

const goNext=()=>{
    slideDiv(1)
}

    const slideDiv=(value="")=>{
            slides.forEach((slide)=>{
                slide.style.transform=`translateX(-${value*100}%)`
            })
        
     }


// dropdown

const method=document.getElementById('method');
const method2=document.getElementById('method-2');

const dropDown=()=>{
    method.classList.toggle('drop-active')
}
const dropLeft=()=>{
    method2.classList.toggle('drop-left');
}


// media query
const sideBar=document.getElementById("navbar")
const bar=document.querySelector("#header .bar");
const cross=document.querySelector("#header .cross a");

if(bar){
    bar.addEventListener('click',function(){
        sideBar.classList.add("activebar");
    })
}

if(cross){
    cross.addEventListener('click',function(){
        sideBar.classList.remove("activebar");
    })
}
