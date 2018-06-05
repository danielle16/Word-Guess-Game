$(document).ready(function(){
    
    var words = ["charles barkley", "maria sharapova", ];
    var keyboard = document.getElementsByClassName("currentLetter");
    var word = words[Math.floor(Math.random() * words.length)]; 
    var userText = document.getElementById("display");
    
    var userWord = "";
    
    //Dashes 
    for(var i = 0; i < word.length; i++) {
        userWord += "-";  
    }
  
    console.log(userWord);
        for(var j = 0; j < word.length; j++) {
         document.onkeyup = function(event) {
             var input1 =  userText.textContent = event.key;

         if(word.includes(input1)) {
             var letter = input1;
            userWord =  userWord.substring(0, letter) + word.charAt(letter);
           console.log(letter);
            
     }
        else 
        console.log("no");
    }

   }


});







