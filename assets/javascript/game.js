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

//Do not want to be graded on this one but I do want to know what I
//am missing on this step. You do not have to tell me the rest of the
//solution just helping me understand the switch of dashes and correct letter.
//Alot of people I talked to did it with an array so I wanted to try and
//do it without an array.






