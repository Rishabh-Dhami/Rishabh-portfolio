const slides=document.querySelectorAll(".slide");
const navbar=document.querySelectorAll("#navbar a")

navbar[0].addEventListener('click',function(){
    navbar[0].classList.add("active")
})

navbar[1].addEventListener('click',function(){
    removeClass();
    navbar[1].classList.add("active")
})
navbar[2].addEventListener('click',function(){
    removeClass();
    navbar[2].classList.add("active")
})
navbar[3].addEventListener('click',function(){
    removeClass();
    navbar[3].classList.add("active")
})
navbar[4].addEventListener('click',function(){
    removeClass();
    navbar[4].classList.add("active")
})

navbar[5].addEventListener('click',function(){
    removeClass();
    navbar[5].classList.add("active")
})

navbar[6].addEventListener('click',function(){
    removeClass();
    navbar[6].classList.add("active")
})

const removeClass=()=>{
    navbar.forEach((nav)=>{
        if(nav.className== 'active'){
            nav.classList.remove('active')
        }
    })
}


 
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
