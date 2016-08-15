$(function(){
  $("#submitButton").click(function(){
    console.log("hello");
    var favoriteInput =[]
    $("#favorites input").each(function(){
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
  }); //end submitButton
  var flavors = ["vanilla", "meyer lemon", "chocolate chip mint", "molasses", "donkey", "coffee", "rainbow sherbert"];

  $(function(){
    flavors.forEach(function(flavor){
      $("#beginIceCream").append("<li>"+flavor+"</li>");
    });
  }); //end ice cream function

  $("#submitGrocery").click(function(){
    var groceryInput=[]
    $("#groceryInput input").each(function(){
      groceryInput.push($(this).val());
    })
    groceryInput.sort();
    var alphaGrocery = groceryInput.slice();

    var upperCaseArray =[];
    alphaGrocery.forEach(function(groceryItem){
      upperCaseArray.push(groceryItem.toUpperCase());
    });
    console.log(upperCaseArray)

    $(upperCaseArray).each(function(){
    $("#beginGrocery").append("<li>" + this  + "</li>");  
    })


  }); //end submit grocery function


}); // end of jquery
