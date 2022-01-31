document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Technical Writing", "UI/UX Design", "Content Writing", "Social Media Management" ,"Graphic Designing", "Digital Marketing", "Mobile App Development"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(".home-dynamic-txt").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 70);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }


  function StartTextAnimation(i) {
            if (typeof dataText[i] == 'undefined'){
                        setTimeout(function() {
                            StartTextAnimation(0);
                        }, 2000);
            } else if (dataText[i] && i < dataText[i].length) { 
                    // text exists! start typewriter animation
                    typeWriter(dataText[i], 0, function(){
                    // after callback (and whole text has been animated), start next text
                     StartTextAnimation(i + 1);
                });
            } 
         }
   StartTextAnimation(0);

});



// topbar

let hamburger = document.querySelector('.hamburger');
let topbar = document.querySelector('.topbar');
let topbarLinks = document.querySelectorAll('.topbar li')
 
hamburger.addEventListener('click',()=>{
  topbar.classList.toggle("topbar-height")
  hamburger.classList.toggle("is-active");
})

topbarLinks.forEach(links=>{
  links.addEventListener('click',()=>{
    topbar.classList.remove("topbar-height")
    hamburger.classList.remove("is-active");
  })
})


// modal

let hireBtn = document.querySelectorAll(".hire-btn");
let modalCloseBtn = document.querySelectorAll(".modal-close-btn");

hireBtn.forEach(btn =>{
  btn.addEventListener('click', function() {
     document.querySelector(".modal").style.display = 'flex';
     document.querySelector("body").style.overflow = 'hidden';
 });
})

modalCloseBtn.forEach(btn =>{
  btn.addEventListener('click', function() {
     document.querySelector(".modal").style.display = 'none';
    document.querySelector("body").style.overflow = 'visible';
 });
})

//revel on scroll

window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 30;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }


