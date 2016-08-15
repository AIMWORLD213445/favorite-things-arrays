var flavors = ["vanilla", "meyer lemon", "chocolate chip mint", "molasses", "donkey", "coffee", "rainbow sherbert"];

$(function(){
  flavors.forEach(function(flavor){
    $("#beginning").append("<li>"+flavor+"</li>");
  })
})
