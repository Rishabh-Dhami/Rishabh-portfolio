// cursor

const cursor=document.querySelector("#cursor");
const cursorBlur=document.querySelector("#cursor-blur");

window.addEventListener("mousemove",(move)=>{
    cursor.style.left=move.x+"px";
    cursor.style.top=move.y+"px";
    cursorBlur.style.left=move.x-225+"px";
    cursorBlur.style.top=move.y-225+"px"
})




// navbar 

const navbar=document.querySelectorAll("#navbar a")

const sec=document.querySelectorAll("section")

function navbarscroller(){
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

window.addEventListener('scroll',navbarscroller)



const slides=document.querySelectorAll("#banner-1 .slide");
const btn=document.querySelectorAll("#banner-1 .button button");
 
 slides.forEach((slide,index)=>{
    slide.style.left=`${index * 100}%`;
 })


btn.forEach((btn,index)=>{
btn.addEventListener("click",()=>{
    removeBtn();
    btn.classList.add("active")
slideDiv(index);
})
})

const removeBtn=()=>{
    btn.forEach((btn)=>{
        btn.classList.remove("active")
    })
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



const DEVELOPER_EMAIL = 'rishabhdhami090gmail.com';
const EMAIL_SUBJECT_LINE = "I'm Interested to work together";

const form = document.querySelector('form#contact-form');

const nameInput = form.querySelector('input#name');
const emailInput = form.querySelector('input#email');
const messageInput = form.querySelector('textarea#message');

/**
 * @TODO: handleContactFormSubmit() requires a passwordless email submittion
 * that will allow one email address to contact another email address without
 * any credentials in between. 
 */ 
const handleContactFormSubmit = (e) => {
	e.preventDefault();

	const modifiedEmailSubject = `[${nameInput.value}] ${EMAIL_SUBJECT_LINE}`;
	window.open(
		`mailto:${DEVELOPER_EMAIL}?subject=${modifiedEmailSubject}&body=${messageInput.value}`
	);
};

const submitInput = form.querySelector('button');
submitInput.addEventListener('click', handleContactFormSubmit);



// gsap section

gsap.to("#header",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#header",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:.5
    }
})