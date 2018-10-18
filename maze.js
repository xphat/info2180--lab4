window.onload = function(){
   var b = document.querySelectorAll(".boundary");
   var haslost = false;
   for (var i = 0; i < b.length; i++)
   {
	   b[i].addEventListener("mouseover", function() { this.classList.add("youlose"); haslost = true;}, false);
   }
   var e = document.getElementById("end");
   
   
   function checkiflost()
   {
	   if (haslost == false)
		   alert("You Win!");
   }
   
   e.addEventListener("mouseover", checkiflost, false);

   };




