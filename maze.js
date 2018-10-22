window.onload = function(){
   //b matches all elements with the boundary class
   var b = document.querySelectorAll(".boundary");
   //haslost keeps track of the status of the game
   var haslost = false;
   //stts selects the status div
   var stts = document.getElementById("status");
   //e selects the end div
   var e = document.getElementById("end");
   //s selects the start div
   var s = document.getElementById("start");
   //m selects the entire maze div
   var m = document.getElementById("maze");
   
   for (var i = 0; i < b.length; i++)
   {
	   //for loop to add eventlistener to all boundaries
	   b[i].addEventListener("mouseover", function() { this.classList.add("youlose"); haslost = true;}, false);
   }
	
	//function to check if the game is lost and changes the stts div innerHTML
   function checkiflost()
   {
	   
	   if (haslost == false)
	   {
		   stts.innerHTML = "You Win!"
	   }
	   else
	   {
		   stts.innerHTML = "You Lose!"
	   }
		   
   }

   e.addEventListener("mouseover", checkiflost, false); 
   s.addEventListener("click", resetGame, false);
   
   //function to resetGame on press of the s div
   function resetGame()
   {
		for (var i = 0; i < b.length; i++)
		{
		   b[i].classList.remove("youlose");
		}
		haslost = false;
		stts.innerHTML = "Move your mouse over the \"S\" to begin."
   }
   //mouseleave actionListener for the Maze
   m.addEventListener("mouseleave", cheater, false);
   
   //function to catch the cheaters... which runs on mouseleave actionListener above...
   function cheater()
   {
	   if (stts.innerHTML == "Move your mouse over the \"S\" to begin.")
	   {
		   haslost = true;
		   stts.innerHTML = "You Lose - Cheater!!"
		   for (var i = 0; i < b.length; i++)
			{
			   b[i].classList.add("youlose");
			}
	   }
	   
   }

   };




