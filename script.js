function Products(){
var pro = document.querySelector("#Products")
var proCon = document.querySelector("#Products-container")

var flag=0;
pro.addEventListener("click",function(){
    if(flag==0){
        proCon.style.display='flex'
        flag=1;
    }else{
        proCon.style.display='none'
        flag=0;
    }
})
}
Products()


function UseCases(){

    var usecases = document.querySelector("#UseCases")
    var UseCasesContainer = document.querySelector("#UseCases-container")
    
    var copy=0;
    usecases.addEventListener("click",function(){
        if(copy==0){
            UseCasesContainer.style.display='flex'
            copy=1;
        }else{
            UseCasesContainer.style.display='none'
            copy=0;
        }
    })
    
}
UseCases()


function about(){
    var about = document.querySelector("#about")
    var aboutContainer = document.querySelector("#about-container")
    var temp=0;
    about.addEventListener("click",function(){
        if(temp==0){
            aboutContainer.style.display='flex'
            temp=1;
        }else{
            aboutContainer.style.display='none'
            temp=0;
        }
    })
}
about()

function learn(){

    var learn= document.querySelector("#learn")
    var learnContainer = document.querySelector("#learn-container")
    
    
    var cow=0
    learn.addEventListener("click",function(){
        if(cow==0){
            learnContainer.style.display='block'
            cow=1;
        }else{
            learnContainer.style.display='none'
            cow=0;
        }
    })
}
learn()


function featured(){
    var featuredContainer = document.querySelector("#Featured-container")
    var featured = document.querySelector("#featured");
    
    var card=0;
    featured.addEventListener("click",function(){
        if(card==0){
            featuredContainer.style.display='block'
            card=1;
        }else{
            featuredContainer.style.display='none'
            card=0;
        }
    })
}
featured();


function insights(){
    
var insights = document.querySelector("#insights")
var InsightsContainer = document.querySelector("#Insights-container")
var roop=0;
insights.addEventListener("click",function(){
    if(roop==0){
        InsightsContainer.style.display='block'
        roop=1
    }else{
        InsightsContainer.style.display='none'
        roop=0
    }
})
}
insights()


function txtScroll(){
   
gsap.to("#child-scroll",{
    transform:'translateX(-100%)',
    duration:30,
    ease:'none',
    repeat:-1
})

}
txtScroll()

function dataVideo(){

var acc = document.querySelector(".accounts");
var clea = document.querySelector(".clearing");
var embe = document.querySelector(".embedded-Banking");

var video=''
var paragraph=''
var selectedVideo = document.querySelector("#side-video")
var selectedPar = document.querySelector("#side-para")

acc.addEventListener("mouseenter",function(){
   video =  acc.getAttribute('data-video');
   selectedVideo.setAttribute('src',video)
    tikna = acc.getAttribute('data-p')
   selectedPar.setAttribute('tikna')
})


clea.addEventListener("mouseenter",function(){
   video = clea.getAttribute('data-video');
   selectedVideo.setAttribute('src',video)
   tikna = clea.getAttribute('data-p')
   selectedPar.setAttribute('tikna')
})


embe.addEventListener("mouseenter",function(){
    video = embe.getAttribute('data-video')
    selectedVideo.setAttribute('src',video)
    tikna = embe.getAttribute('data-p')
    selectedPar.setAttribute('tikna')
})

}
dataVideo()

function swip(){

var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

}
swip()