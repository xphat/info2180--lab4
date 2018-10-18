window.onload = function(){
   var b = document.querySelectorAll(".boundary");
   var haslost = false;
   var stts = document.getElementById("status");
   var e = document.getElementById("end");
   var s = document.getElementById("start");
   
   for (var i = 0; i < b.length; i++)
   {
	   b[i].addEventListener("mouseover", function() { this.classList.add("youlose"); haslost = true;}, false);
   }

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
   
   function resetGame()
   {
		for (var i = 0; i < b.length; i++)
		{
		   b[i].classList.remove("youlose");
		   haslost = false;
		   stts.innerHTML = "Move your mouse over the \"S\" to begin."
		}
   }

   };




