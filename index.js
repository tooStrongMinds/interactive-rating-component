document.addEventListener("DOMContentLoaded", function() {
    // Get all the rating buttons
    var ratingButtons = document.querySelectorAll(".numbers");

    // Add click event listeners to each rating button
    ratingButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Remove "active" class from all buttons
            ratingButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            // Add "active" class to the clicked button
            button.classList.add("active");
        });
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     // Get the submit button
//     var submitBtn = document.querySelector(".submitBtn");

//     // Add click event listener to the submit button
//     submitBtn.addEventListener("click", function() {
//         // Get the selected rating number
//         var selectedRating = document.querySelector(".numbers.active").innerText;

//         // Redirect to the thank you page with the selected rating as a parameter
//         window.location.href = "thank-you.html?rating=" + selectedRating;
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     // Get the submit button
//     var submitBtn = document.querySelector(".submitBtn");

//     // Add click event listener to the submit button
//     submitBtn.addEventListener("click", function() {
//         // Get the selected rating number
//         var selectedRating = document.querySelector(".numbers.active").innerText;

//         // Create a new element for the thank you message
//         var thankYouMessage = document.createElement("div");
//         thankYouMessage.textContent = "Thank you for your rating! You have selected " + selectedRating + " out of 5.";

//         // Append the thank you message to the body
//         document.body.appendChild(thankYouMessage);

//         // Optional: Hide the rating elements if needed
//         var ratingContainer = document.querySelector(".rating");
//         ratingContainer.style.display = "none";
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    // Get the submit button
    var submitBtn = document.querySelector(".submitBtn");

    // Add click event listener to the submit button
    submitBtn.addEventListener("click", function() {
        // Get the selected rating number
        var selectedRatingElement = document.querySelector(".numbers.active");

        // Check if a rating has been selected
        if (selectedRatingElement) {
            var selectedRating = selectedRatingElement.innerText;

            // Create a new element for the thank you message
            var thankYouMessage = document.querySelector(".thankyoumsg");
            thankYouMessage.textContent = " You selected " + selectedRating + " out of 5.";

            // Append the thank you message to the div
            document.div.appendChild(thankYouMessage);

            // Optional: Hide the rating elements if needed
            var ratingContainer = document.querySelector(".rating");
            // ratingContainer.style.display = "none";
        } else {
            // Display an error message or handle the situation in another way
            window.alert("Please select a rating before submitting.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the buttons and pages
    var showPage2Button = document.querySelector(".submitBtn");
    var page1 = document.querySelector(".page1");
    var page2 = document.querySelector(".page2");
  
    // Add click event listeners to the buttons
    // showPage1Button.addEventListener("click", function() {
    //   // Hide all pages
    //   page1.classList.add("active");
    //   page2.classList.remove("active");
    // });

   
  
    showPage2Button.addEventListener("click", function() {
      // Hide all pages
      page1.classList.add("hide");
      page2.classList.remove("hide");
    });
  });

