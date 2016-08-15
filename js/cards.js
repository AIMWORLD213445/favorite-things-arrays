$(function(){

  cardArray=["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"]
  suitArray=["clubs","spades","hearts","diamonds"]



  suitArray.forEach(function(suit){
    var suit = suit;
    cardArray.forEach(function(card){
      $("#"+suit).append("<p>" + card +" of "+ suit+"</p>");
    })
  })
})
