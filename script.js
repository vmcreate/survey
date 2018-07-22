//JQUERY
var send =   document.getElementsByClassName('send')[0];
$(document).ready(function(){
    $('.survey-list .item-first').click(function(){
      $('.item-first').removeClass("active");
      $(this).addClass("active");
      $('.second-survey').removeClass('disabled-first');
      $('#key').removeClass('active');
      $('#key').val('');
  });
  });
  $('#key').keyup(function() {
    // Your code here
    $('#key').addClass('active');
    $('.item-first').removeClass("active");
   $('.second-survey').removeClass('disabled-first');

});
$('.second-survey-list .survey-item').on('click', function(){
    $(this).toggleClass('active');
    if(!$(".second-survey-list").has(".active").length){
        $('.send').addClass('disabled-A');
        if(input.value.length <= 0 ){
            $('.input-second').removeClass("active");
            $('.send').addClass('disabled-A');
        }
        }
    // $('.send').toggleClass('disabled-A');
  
});

// input value change
var input = document.getElementsByClassName('input-second')[0];
$('.input-second').keyup(function() {
 
    if (input.value.length > 0){
        $('.input-second').addClass("active");
        $('.send').removeClass('disabled-A');
     
    }if(input.value.length <= 0 ){
        $('.input-second').removeClass("active");
        
    }if(input.value.length <= 0 && !$(".second-survey-list").has(".active").length){
        $('.send').addClass('disabled-A');
    }
       
});
var surveyItem = document.getElementsByClassName('sec-item');

clickerFn = function(e) {
   
    if ((e.target.classList.contains('active'))) {
        send.classList.remove("disabled-A");
    }
  
}

for(var i = 0;i<surveyItem.length;i++){
    surveyItem.item(i).onclick = clickerFn;

}
//JAVASCRIPT
var rateFirst = document.getElementsByClassName('ratefirst');//rate number
var width = document.getElementsByClassName('width')[0];
var firstList = document.getElementsByClassName('star-first');//list
var firstDisable = document.getElementsByClassName('second-survey')[1];//content

for(var i = 0; i<firstList.length;i++){
   if(firstList[0].addEventListener('click',function(){
       firstList[0].classList.add('selected-star');
       firstList[1].classList.remove('selected-star');
       firstList[2].classList.remove('selected-star');
       firstList[3].classList.remove('selected-star');
       firstList[4].classList.remove('selected-star');
       firstDisable.classList.remove('disabled');
      if(firstList[0]){
          rateFirst[0].classList.toggle('rateIn');
          rateFirst[1].classList.add('rateOut');
          rateFirst[2].classList.add('rateOut');
          rateFirst[3].classList.add('rateOut');
          rateFirst[4].classList.add('rateOut');
      }
   }));
   if(firstList[1].addEventListener('click', function(){
    firstList[0].classList.add('selected-star');
    firstList[1].classList.add('selected-star');
    firstList[2].classList.remove('selected-star');
    firstList[3].classList.remove('selected-star');
    firstList[4].classList.remove('selected-star');
    firstDisable.classList.remove('disabled');
    if(firstList[1]){
        rateFirst[0].classList.toggle('rateIn');
        rateFirst[1].classList.toggle('rateIn');
        rateFirst[1].classList.remove('rateOut');
        rateFirst[2].classList.add('rateOut');
        rateFirst[3].classList.add('rateOut');
        rateFirst[4].classList.add('rateOut');
    }

   }));
   if(firstList[2].addEventListener('click', function(){
    firstList[0].classList.add('selected-star');
    firstList[1].classList.add('selected-star');
    firstList[2].classList.add('selected-star');
    firstList[3].classList.remove('selected-star');
    firstList[4].classList.remove('selected-star');
    firstDisable.classList.remove('disabled');
    if(firstList[2]){
        rateFirst[0].classList.toggle('rateIn');
        rateFirst[1].classList.toggle('rateIn');
        rateFirst[1].classList.remove('rateOut');
        rateFirst[2].classList.remove('rateOut');
        rateFirst[2].classList.toggle('rateIn');
        rateFirst[3].classList.add('rateOut');
        rateFirst[4].classList.add('rateOut');
    }
   }));
   if(firstList[3].addEventListener('click', function(){
    firstList[0].classList.add('selected-star');
    firstList[1].classList.add('selected-star');
    firstList[2].classList.add('selected-star');
    firstList[3].classList.add('selected-star');
    firstList[4].classList.remove('selected-star');
    firstDisable.classList.remove('disabled');
    if(firstList[3]){
        rateFirst[0].classList.add('rateIn');
        rateFirst[1].classList.add('rateIn');
        rateFirst[1].classList.remove('rateOut');
        rateFirst[2].classList.remove('rateOut');
        rateFirst[2].classList.add('rateIn');
        rateFirst[3].classList.remove('rateOut');
        rateFirst[3].classList.toggle('rateIn');
        rateFirst[4].classList.add('rateOut');
    }

   }));
   if(firstList[4].addEventListener('click', function(){
    firstList[0].classList.add('selected-star');
    firstList[1].classList.add('selected-star');
    firstList[2].classList.add('selected-star');
    firstList[3].classList.add('selected-star');
    firstList[4].classList.add('selected-star');
    firstDisable.classList.remove('disabled');
    if(firstList[4]){
        rateFirst[0].classList.add('rateIn');
        rateFirst[1].classList.add('rateIn');
        rateFirst[1].classList.remove('rateOut');
        rateFirst[2].classList.remove('rateOut');
        rateFirst[2].classList.add('rateIn');
        rateFirst[3].classList.remove('rateOut');
        rateFirst[3].classList.add('rateIn');
        rateFirst[4].classList.toggle('rateIn');
        rateFirst[4].classList.remove('rateOut');
    }

   }));
  
}

var secondList = document.getElementsByClassName('star-second');
var secondDisable = document.getElementsByClassName('second-survey')[2];
var rateSecond = document.getElementsByClassName('ratesecond');//rate number

for(var i = 0; i<secondList.length;i++){
   if(secondList[0].addEventListener('click',function(){
       secondList[0].classList.add('selected-star');
       secondList[1].classList.remove('selected-star');
       secondList[2].classList.remove('selected-star');
       secondList[3].classList.remove('selected-star');
       secondList[4].classList.remove('selected-star');
       secondDisable.classList.remove('disabled');
       if(secondList[0]){
        rateSecond[0].classList.toggle('rateIn');
        rateSecond[1].classList.add('rateOut');
        rateSecond[2].classList.add('rateOut');
        rateSecond[3].classList.add('rateOut');
        rateSecond[4].classList.add('rateOut');
    }

   }));
   if(secondList[1].addEventListener('click', function(){
    secondList[0].classList.add('selected-star');
    secondList[1].classList.add('selected-star');
    secondList[2].classList.remove('selected-star');
    secondList[3].classList.remove('selected-star');
    secondList[4].classList.remove('selected-star');
    secondDisable.classList.remove('disabled');
    if(secondList[1]){
        rateSecond[0].classList.toggle('rateIn');
        rateSecond[1].classList.toggle('rateIn');
        rateSecond[1].classList.remove('rateOut');
        rateSecond[2].classList.add('rateOut');
        rateSecond[3].classList.add('rateOut');
        rateSecond[4].classList.add('rateOut');
    }

   }));
   if(secondList[2].addEventListener('click', function(){
    secondList[0].classList.add('selected-star');
    secondList[1].classList.add('selected-star');
    secondList[2].classList.add('selected-star');
    secondList[3].classList.remove('selected-star');
    secondList[4].classList.remove('selected-star');
    secondDisable.classList.remove('disabled');
    if(secondList[2]){
        rateSecond[0].classList.toggle('rateIn');
        rateSecond[1].classList.toggle('rateIn');
        rateSecond[1].classList.remove('rateOut');
        rateSecond[2].classList.remove('rateOut');
        rateSecond[2].classList.toggle('rateIn');
        rateSecond[3].classList.add('rateOut');
        rateSecond[4].classList.add('rateOut');
    }

   }));
   if(secondList[3].addEventListener('click', function(){
    secondList[0].classList.add('selected-star');
    secondList[1].classList.add('selected-star');
    secondList[2].classList.add('selected-star');
    secondList[3].classList.add('selected-star');
    secondList[4].classList.remove('selected-star');
    secondDisable.classList.remove('disabled');
    if(secondList[3]){
        rateSecond[0].classList.add('rateIn');
        rateSecond[1].classList.add('rateIn');
        rateSecond[1].classList.remove('rateOut');
        rateSecond[2].classList.remove('rateOut');
        rateSecond[2].classList.add('rateIn');
        rateSecond[3].classList.remove('rateOut');
        rateSecond[3].classList.toggle('rateIn');
        rateSecond[4].classList.add('rateOut');
    }

   }));
   if(secondList[4].addEventListener('click', function(){
    secondList[0].classList.add('selected-star');
    secondList[1].classList.add('selected-star');
    secondList[2].classList.add('selected-star');
    secondList[3].classList.add('selected-star');
    secondList[4].classList.add('selected-star');
    secondDisable.classList.remove('disabled');
    if(secondList[4]){
        rateSecond[0].classList.add('rateIn');
        rateSecond[1].classList.add('rateIn');
        rateSecond[1].classList.remove('rateOut');
        rateSecond[2].classList.remove('rateOut');
        rateSecond[2].classList.add('rateIn');
        rateSecond[3].classList.remove('rateOut');
        rateSecond[3].classList.add('rateIn');
        rateSecond[4].classList.toggle('rateIn');
        rateSecond[4].classList.remove('rateOut');
    }

   }));
}
var trdList = document.getElementsByClassName('star-trd');
var trdDisable = document.getElementsByClassName('second-survey')[3];
var rateTrd = document.getElementsByClassName('ratetrd');//rate number


for(var i = 0; i<trdList.length;i++){
   if(trdList[0].addEventListener('click',function(){
       trdList[0].classList.add('selected-star');
       trdList[1].classList.remove('selected-star');
       trdList[2].classList.remove('selected-star');
       trdList[3].classList.remove('selected-star');
       trdList[4].classList.remove('selected-star');
       trdDisable.classList.remove('disabled');
        if(trdList[0]){
        rateTrd[0].classList.toggle('rateIn');
        rateTrd[1].classList.add('rateOut');
        rateTrd[2].classList.add('rateOut');
        rateTrd[3].classList.add('rateOut');
        rateTrd[4].classList.add('rateOut');
    }
   }));
   if(trdList[1].addEventListener('click', function(){
    trdList[0].classList.add('selected-star');
    trdList[1].classList.add('selected-star');
    trdList[2].classList.remove('selected-star');
    trdList[3].classList.remove('selected-star');
    trdList[4].classList.remove('selected-star');
    trdDisable.classList.remove('disabled');
    if(trdList[1]){
        rateTrd[0].classList.toggle('rateIn');
        rateTrd[1].classList.toggle('rateIn');
        rateTrd[1].classList.remove('rateOut');
        rateTrd[2].classList.add('rateOut');
        rateTrd[3].classList.add('rateOut');
        rateTrd[4].classList.add('rateOut');
    }
   }));
   if(trdList[2].addEventListener('click', function(){
    trdList[0].classList.add('selected-star');
    trdList[1].classList.add('selected-star');
    trdList[2].classList.add('selected-star');
    trdList[3].classList.remove('selected-star');
    trdList[4].classList.remove('selected-star');
    trdDisable.classList.remove('disabled');
    if(trdList[2]){
        rateTrd[0].classList.toggle('rateIn');
        rateTrd[1].classList.toggle('rateIn');
        rateTrd[1].classList.remove('rateOut');
        rateTrd[2].classList.remove('rateOut');
        rateTrd[2].classList.toggle('rateIn');
        rateTrd[3].classList.add('rateOut');
        rateTrd[4].classList.add('rateOut');
    }
   }));
   if(trdList[3].addEventListener('click', function(){
    trdList[0].classList.add('selected-star');
    trdList[1].classList.add('selected-star');
    trdList[2].classList.add('selected-star');
    trdList[3].classList.add('selected-star');
    trdList[4].classList.remove('selected-star');
    trdDisable.classList.remove('disabled');
    if(trdList[3]){
        rateTrd[0].classList.add('rateIn');
        rateTrd[1].classList.add('rateIn');
        rateTrd[1].classList.remove('rateOut');
        rateTrd[2].classList.remove('rateOut');
        rateTrd[2].classList.add('rateIn');
        rateTrd[3].classList.remove('rateOut');
        rateTrd[3].classList.toggle('rateIn');
        rateTrd[4].classList.add('rateOut');
    }
   }));
   if(trdList[4].addEventListener('click', function(){
    trdList[0].classList.add('selected-star');
    trdList[1].classList.add('selected-star');
    trdList[2].classList.add('selected-star');
    trdList[3].classList.add('selected-star');
    trdList[4].classList.add('selected-star');
    trdDisable.classList.remove('disabled');
    if(trdList[4]){
        rateTrd[0].classList.add('rateIn');
        rateTrd[1].classList.add('rateIn');
        rateTrd[1].classList.remove('rateOut');
        rateTrd[2].classList.remove('rateOut');
        rateTrd[2].classList.add('rateIn');
        rateTrd[3].classList.remove('rateOut');
        rateTrd[3].classList.add('rateIn');
        rateTrd[4].classList.toggle('rateIn');
        rateTrd[4].classList.remove('rateOut');
    }

   }));
}
var frthList = document.getElementsByClassName('star-frth');
var frthDisable = document.getElementsByClassName('first-survey')[1];
var rateFrt = document.getElementsByClassName('ratefrt');//rate number


for(var i = 0; i<frthList.length;i++){
   if(frthList[0].addEventListener('click',function(){
       frthList[0].classList.add('selected-star');
       frthList[1].classList.remove('selected-star');
       frthList[2].classList.remove('selected-star');
       frthList[3].classList.remove('selected-star');
       frthList[4].classList.remove('selected-star');
       frthDisable.classList.remove('disabled');
       if(frthList[0]){
        rateFrt[0].classList.toggle('rateIn');
        rateFrt[1].classList.add('rateOut');
        rateFrt[2].classList.add('rateOut');
        rateFrt[3].classList.add('rateOut');
        rateFrt[4].classList.add('rateOut');
    }
   }));
   if(frthList[1].addEventListener('click', function(){
    frthList[0].classList.add('selected-star');
    frthList[1].classList.add('selected-star');
    frthList[2].classList.remove('selected-star');
    frthList[3].classList.remove('selected-star');
    frthList[4].classList.remove('selected-star');
    frthDisable.classList.remove('disabled');
    if(frthList[1]){
        rateFrt[0].classList.toggle('rateIn');
        rateFrt[1].classList.toggle('rateIn');
        rateFrt[1].classList.remove('rateOut');
        rateFrt[2].classList.add('rateOut');
        rateFrt[3].classList.add('rateOut');
        rateFrt[4].classList.add('rateOut');
    }

   }));
   if(frthList[2].addEventListener('click', function(){
    frthList[0].classList.add('selected-star');
    frthList[1].classList.add('selected-star');
    frthList[2].classList.add('selected-star');
    frthList[3].classList.remove('selected-star');
    frthList[4].classList.remove('selected-star');
    frthDisable.classList.remove('disabled');
    if(frthList[2]){
        rateFrt[0].classList.toggle('rateIn');
        rateFrt[1].classList.toggle('rateIn');
        rateFrt[1].classList.remove('rateOut');
        rateFrt[2].classList.remove('rateOut');
        rateFrt[2].classList.toggle('rateIn');
        rateFrt[3].classList.add('rateOut');
        rateFrt[4].classList.add('rateOut');
    }

   }));
   if(frthList[3].addEventListener('click', function(){
    frthList[0].classList.add('selected-star');
    frthList[1].classList.add('selected-star');
    frthList[2].classList.add('selected-star');
    frthList[3].classList.add('selected-star');
    frthList[4].classList.remove('selected-star');
    frthDisable.classList.remove('disabled');
    if(frthList[3]){
        rateFrt[0].classList.add('rateIn');
        rateFrt[1].classList.add('rateIn');
        rateFrt[1].classList.remove('rateOut');
        rateFrt[2].classList.remove('rateOut');
        rateFrt[2].classList.add('rateIn');
        rateFrt[3].classList.remove('rateOut');
        rateFrt[3].classList.toggle('rateIn');
        rateFrt[4].classList.add('rateOut');
    }

   }));
   if(frthList[4].addEventListener('click', function(){
    frthList[0].classList.add('selected-star');
    frthList[1].classList.add('selected-star');
    frthList[2].classList.add('selected-star');
    frthList[3].classList.add('selected-star');
    frthList[4].classList.add('selected-star');
    frthDisable.classList.remove('disabled');

    if(frthList[4]){
        rateFrt[0].classList.add('rateIn');
        rateFrt[1].classList.add('rateIn');
        rateFrt[1].classList.remove('rateOut');
        rateFrt[2].classList.remove('rateOut');
        rateFrt[2].classList.add('rateIn');
        rateFrt[3].classList.remove('rateOut');
        rateFrt[3].classList.add('rateIn');
        rateFrt[4].classList.toggle('rateIn');
        rateFrt[4].classList.remove('rateOut');
    }
   }));

}

//slider

var goback = document.getElementsByClassName('goback')[0];
var gonext = document.getElementsByClassName('gonext')[0];
var success =document.getElementsByClassName('success')[0];
var send =   document.getElementsByClassName('send')[0];
var firstWin = document.getElementsByClassName('main-content')[0];
var secondWin = document.getElementsByClassName('survey-container')[0];

gonext.addEventListener("click", function(){
    
    //treba da slide in drugi content
    firstWin.classList.add('slideout');
    secondWin.classList.add('slidein');
    document.getElementsByClassName('bottom-survey')[0].style.visibility="visible";
    setTimeout(function() {
    firstWin.style.display="none";
    secondWin.style.display="block";
    document.getElementsByClassName('send')[0].style.display="block";
    document.getElementsByClassName('goback')[0].style.display="block";
    }, 200);
});
goback.addEventListener("click", function(){

    //treba da slide in drugi content
    firstWin.classList.add('slidein');
    secondWin.classList.add('slideout');
    document.getElementsByClassName('bottom-survey')[0].style.visibility="hidden";
    setTimeout(function() {
    firstWin.style.display="block";
    secondWin.style.display="none";
    document.getElementsByClassName('send')[0].style.display="none";
    document.getElementsByClassName('goback')[0].style.display="none";
    },200);
});
send.addEventListener("click", function(){

    //treba da slide in drugi content
    secondWin.classList.add('slideout');
    document.getElementsByClassName('bottom-survey')[0].style.visibility="hidden";
    setTimeout(function() {
    firstWin.style.display="none";
    secondWin.style.display="none";
    success.style.display="flex";
    document.getElementsByClassName('container')[0].style.display="none";
    document.getElementsByClassName('send')[0].style.display="none";
    document.getElementsByClassName('goback')[0].style.display="none";
    },200);
});

