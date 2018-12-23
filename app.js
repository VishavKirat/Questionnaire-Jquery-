
$( document ).ready(function() {
  $(".terms").hide(); // on document load the terms and condition section is hidden by default
  // $(".testView").hide();
   $(".answerDetail").hide();
   $('.questions div').not('.active').hide();
      let score = 0;

  $('.termsButton').click(function(){      // terms and condition show method.
    $(".terms").slideDown();
    $(".enterTest").addClass('start');     // append class in start button
  });

$(document).on('click','.start',function(e){   //we need to add deprecated method
  e.preventDefault();
   if($('input:text').val().length == 0){    //without entering the name it will not continue
        window.alert('Please enter your name to proceed');
    }else{
        $('.user').hide();
        $('.testView').show();
        $('.topName').text(`Welcome, ${$('input:text').val()}`);
    }

  });

  $('.tabbed li').on("click",function(e){
    e.preventDefault();     // jdon koi uppar 1,2, 3,4,5,6,7,8 question te click kruga.
    const currentNumber = e.target.classList[0];
    const question = $(`div[data-ques="${currentNumber}"]`);

    if(this.classList.contains('active') == false){    // udon ohdi "Li" di class ch ikk hor className append ho janna.
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        question.addClass('active');
        $('.questions .active').show();
        question.siblings().removeClass('active');
        $('.questions .active').siblings().hide();
    }
  });

  // submit button pressed
  $(".submit").click(function(e){
    e.preventDefault();
  if(this.parentNode.classList.contains('quesOne') || this.parentNode.classList.contains('quesFour') ||  this.parentNode.classList.contains('quesTwo') || this.parentNode.classList.contains('quesThree') || this.parentNode.classList.contains('quesFive') ||  this.parentNode.classList.contains('quesSix')){

      var userInputOne =$('input[name="quesOne"]:checked').val();
      var userInputFour =$('input[name="quesFour"]:checked').val();
      var userInputThree =$('input[name="quesThree"]:checked').val();
      var userInputTwo =$('input[name="quesTwo"]').val();
      var userInputFive =$('input[name="quesFive"]').val();
      console.log(userInputFive);
      var userInputSix =$('input[name="quesSix"]:checked').val();
      console.log($(this).attr('data-answer'));
      if($(this).attr('data-answer') == userInputOne || $(this).attr('data-answer') == userInputFour || $(this).attr('data-answer') == userInputTwo || $(this).attr('data-answer') == userInputThree || $(this).attr('data-answer') == userInputSix ||$(this).attr('data-answer') == userInputFive){
        score = score+10;
        $('.totalHere').text(score);
        $('input[name="quesOne"]:checked').val('');
        $('input[name="quesFour"]:checked').val('');
        $('input[name="quesTwo"]').val('');
        window.alert('Bravo!! You got it right.');
      }
      else{
        window.alert('better luck next time');
      }
      $(this).css('background-color','rgba(255,255,255,0.5)');
      this.disabled = true;
      var parentDiv = $(e.target).parent();
      if(parentDiv.has('.answerDetail').length){
        $(e.target).siblings('.answerDetail').show();
      }
    }
  });

// click on logoutButton

  $('.logoutButton').click(function(e){
    e.preventDefault();
    if(confirm('Do you really want to log out?')){
    location.reload();
  }
  });

  // click on reveal answer vbuttton
  $('.reveal').click(function(e){
    e.preventDefault();
    var parentDiv = $(e.target).parent();
    if(parentDiv.has('.answerDetail').length){
      $(e.target).siblings('.answerDetail').show();
    }
   //  this.parent().$(".answerDetail").show();
   // this.disabled = true;
    $(this).nextAll('.submit').css('background-color','rgba(255,255,255,0.5)');
  });


});
