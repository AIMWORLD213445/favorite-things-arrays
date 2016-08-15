$(function(){
  $("#submitButton").click(function(){
    console.log("hello");
    var favoriteInput =[]
    $("input").each(function(){
      favoriteInput.push($(this).val());
      console.log(favoriteInput);
      });
      // var newArray=favoriteInput.splice(0,2,1);
      // console.log(newArray);
    var secondFav = favoriteInput[1];
    var firstFav = favoriteInput[0];
    var thirdFav =  favoriteInput[2];
    var newFavArray = [secondFav, firstFav, thirdFav];

    newFavArray.push(favoriteInput[3]);
    newFavArray.push(favoriteInput[4]);
    newFavArray.push(favoriteInput[5]);
    newFavArray.push(favoriteInput[6]);
    newFavArray.push(favoriteInput[7]);
    console.log(newFavArray);

    $(newFavArray).each(function(){
      $("#beginning").append("<li>" + this  + "</li>");
    });
  });
});
