const form = document.getElementById("feedbackForm");  const ratingText = document.getElementById("ratingValue"); const ratingStars = document.querySelectorAll('input[name="rating"]'); 
 
 
ratingStars.forEach(star => { star.addEventListener("change", function () { ratingText.textContent = "Rating: " + this.value + " / 5"; 
}); 
}); 
 
 
form.addEventListener("submit", function (event) { event.preventDefault(); 
 
 
const name = document.getElementById("name").value;  const email = document.getElementById("email").value; const comments = document.getElementById("comments").value; 
 
let selectedRating = ""; ratingStars.forEach(star => { if (star.checked) { 
selectedRating = star.value; 	 
} 
}); 
  
if (selectedRating === "") { 
alert("Please select a rating before submitting."); return; 
} 
alert("Feedback submitted successfully!"); 
 
console.log("---- Customer Feedback Data 	"); 
console.log("Name:", name); console.log("Email:", email);  console.log("Rating:", selectedRating);  console.log("Comments:", comments); 
 console.log("-------------------------------------------------------------------------- "); }); 
  
form.reset(); 
ratingText.textContent = "Rating: 0 / 5"; 
