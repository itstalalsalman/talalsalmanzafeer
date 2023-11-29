$(document).ready(function() {
    
    var textArray = [".", "I'm Talal Salman", "Front-End Developer and Designer"];
    var currentIndex = 0;
    $('.me__work').hide();
    function changeText() {
      if (currentIndex < textArray.length - 1) {
        currentIndex++;
        $('.main__text').fadeOut(800, function() {
          $(this).text(textArray[currentIndex]).fadeIn(500);
            if(currentIndex === 2)
            {
                $('.main__text').css("font-size","2.5rem");
            }
            else{
                $('.main__text').css("font-size","3rem");
            }
        });
        
      } else {
        var combinedText = "Learn More about";
        $('.me__work').text('ME & MY WORK');
        $('.main__text').fadeOut(500, function() {
            $(this).css("font-size","2.5rem");
            $(this).text(combinedText).fadeIn(500);
            $('.me__work').fadeIn(500);
        });
        

        clearInterval(interval); // Stop the interval after showing the combined text
      }
    }
  
    var interval = setInterval(changeText, 2800);

});
  