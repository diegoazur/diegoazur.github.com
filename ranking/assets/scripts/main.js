let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");
let elementList = document.querySelectorAll(".fa-hand-peace");

elementList.forEach(function(element){
    element.addEventListener('click',function(){
        element.classList.remove("far");
        element.classList.add("fas");
    })
});

closes.forEach(function(close){
    close.addEventListener('click', function(ev){
        ev.preventDefault();
        content.classList.remove('animated');
        content.classList.remove('fadeInUp');
        content.classList.add('animated');
        content.classList.add('fadeOutRight');
        setTimeout(() => {
            location.href='../index.html';
        }, 500);  
    });
})