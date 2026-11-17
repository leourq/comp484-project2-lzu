$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);

    // new Splash button for Magikarp
    $('.splash-button').click(clickedSplashButton);
  
  })
  
    // add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Magikarp", weight:20, happiness:50};
  
    function clickedTreatButton() {
      // increase pet happiness
      pet_info.happiness += 5;

      // increase pet weight
      pet_info.weight += 2;

      checkAndUpdatePetInfoInHtml();

      showPetMessage("Magikarp enjoyed the treat!");
    }
    
    function clickedPlayButton() {
      // increase pet happiness
      pet_info.happiness += 5;

      // decrease pet weight
      pet_info.weight -= 1;

      checkAndUpdatePetInfoInHtml();

      showPetMessage("Magikarp is having fun!");
    }
    
    function clickedExerciseButton() {
      // decrease pet happiness
      pet_info.happiness -= 3;

      // decrease pet weight
      pet_info.weight -= 2;

      checkAndUpdatePetInfoInHtml();

      showPetMessage("Magikarp is tired from exercising!");
    }

    // new action button: Magikarp uses Splash
    function clickedSplashButton() {
      // increase happiness
      // would have kept it the same for the lore, but instructions said to increase/decrease for each button, so I increased happiness by 1.
      pet_info.happiness += 1;
      

      checkAndUpdatePetInfoInHtml();

      showPetMessage("Magikarp used Splash! But nothing happened...");

      // Present: animate() method
      // animate() gradually changes the CSS properties of an element
      // this creates a jumping animation when splash is clicked
      // the first animate moves Magikarp upward by changing it to -40px
      // the second animate returns the Magikarp to its original spot
      // the 300 means each animation takes 300 milliseconds to complete
      
      $('.pet-image')
        .stop(true, true)
        .animate({ marginTop: '-40px' }, 300)
        .animate({ marginTop: '0px' }, 300);
    }

    // displays a message after each button click
    function showPetMessage(message) {
      // hide the previous message and update its text
      $('.pet-message').hide();
      $('.pet-message').text(message);

      // Present: fadeIn() method
      // fadeIn() shows an element with a fading in effect, instead of   instantly appearing
      // the 500 means the message appears over 500 milliseconds
      
      $('.pet-message').fadeIn(500);
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // add conditional so if weight is lower than one
      if (pet_info.weight < 1) {
        pet_info.weight = 1;
      }

      // prevent happiness from going below zero
      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }
    }
    
    // updates HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }