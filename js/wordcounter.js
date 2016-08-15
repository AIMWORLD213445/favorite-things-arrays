$(function(){
  $("#counterButton").click(function(){
    var userInput = $("textarea").val();
    var space = " ";
    var userInputArray = userInput.split(space);


    var counterArray = [];
    userInputArray.forEach(function(word){
    var counter = 0;
      userInputArray.forEach(function(value){
        if(value === word){
          counter += 1;
        }
      })
      counterArray.push(counter);
    })
    console.log(counterArray);
  $(userInputArray).each(function(i){


    $("li").append("<p>"+userInputArray[i]+ " : " +counterArray[i] + "times")


    // console.log(userInputArray[i]+counterArray[i]);

  })


  })//counter button end



}); //end jquery
