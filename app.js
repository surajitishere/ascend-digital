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
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 700);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

let sliderItems = document.querySelectorAll(".slider-content a img");

sliderItems.forEach((items)=>{
    items.addEventListener("mouseenter", (items)=>{
        items.path[0].setAttribute("src" , "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg")
    } )
})
sliderItems.forEach((items)=>{
    items.addEventListener("mouseout", (items)=>{
        items.path[0].setAttribute("src" , "https://cdn5.vectorstock.com/i/1000x1000/92/59/simple-lettering-bold-random-logo-vector-33589259.jpg")
    } )
})
