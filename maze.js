window.onload = function(){
   var b = document.querySelectorAll(".boundary");
   for (var i = 0; i < b.length; i++)
   {
	   b[i].addEventListener("mouseover", function() { this.classList.add("youlose");}, false);
   }

   };




