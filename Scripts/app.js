/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    

    // second way to define an array
    //var paragraphs = new Array();


    // define an array of HTML elements
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    
    // define your paragraphs array;
    var paragraphs = [];


    // data for my pages
    paragraphs[0] = "<span class = 'firstSentence'>This is my first paragraph.</span> It is only visible on the first page. This next sentence is to prove that this really works!!!. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum, tellus in condimentum lacinia, nulla augue finibus nisi, quis lobortis dui lorem eu elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum neque sed lacus fringilla, ac tincidunt neque volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas eget risus aliquet, viverra dolor nec, imperdiet leo. Vivamus convallis dignissim mi. Aenean aliquet scelerisque quam a accumsan";
    paragraphs[1] = "This is my second paragraph. It is only visible on the second page. Vivamus non nisi at dolor eleifend hendrerit. Pellentesque sollicitudin felis felis, quis aliquet lorem pharetra sit amet. Fusce bibendum, libero sed pulvinar varius, neque ex faucibus quam, sed lobortis felis nunc sit amet justo. Integer pellentesque nisi nec condimentum sagittis. Aenean aliquam sem quis felis porttitor commodo. In odio nisl, sagittis in odio non, dapibus ullamcorper neque. Mauris velit leo, posuere id sollicitudin eget, viverra id lectus. Donec leo magna, iaculis id varius quis, finibus ac massa.";
    paragraphs[2] = "This is my third paragraph. It is only visible on the third page. Morbi pretium odio et dolor hendrerit, a congue dolor sodales. Nam consequat et felis vitae lacinia. Fusce id erat nunc. Cras facilisis in dui nec malesuada. Aliquam quis vehicula tellus. Curabitur massa turpis, accumsan a lacus quis, scelerisque facilisis nunc. Vivamus sit amet pellentesque purus. Phasellus nec porttitor urna. Nulla dolor libero, rutrum eget leo vitae, sollicitudin pharetra orci. Pellentesque ut purus tellus.";
   

    // check to see if paragraph one exists
    var paragraphElementsLength = paragraphElements.length-1;
    for (var index = paragraphElementsLength; index >= 0; index--) {
        console.log(index);
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
        }
    }

    //1)create a reference to the send button
    //var sendButton = document.getElementById("sendButton");

    //2)event - cancelled the default behaviour
   // sendButton.addEventListener("click", sendButtonClick);

    //3 create the sendButtonClick declared above
   // function sendButtonClick(event){
   //     console.log("clicked");
  //  }

    //5  create a reference to the first name field
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");

    //4 create a reference to the form
    //4.1
    var contactForm = document.getElementById("contactForm");
    //4.2 add event listener               //callback function
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); //prevent from my form submission
        console.log("submitted");
        showFormInput();
        contactForm.reset();
        
    });
    //6 print into the console  - display the form values and on the page
    function showFormInput(){





//display on the console
        console.log ("*******************************");
        console.log("First Name: " + firstName.value);
        console.log("Last Name: " + lastName.value);
        console.log ("*******************************");

        //display on the screen
    var column = document.getElementById("column");

    var formValues = document.createElement ("div");
    formValues.setAttribute ("id", "formValues");

    var formValuesString = " ";
         formValuesString += "<p><hr><br>";
         formValuesString += "First Name: " + firstName.value + "<br>";
         formValuesString += "Last Name: " + lastName.value + "<br>";
         formValuesString +=  "<hr><br></p>";

         formValues.innerHTML = formValuesString;

         column.appendChild(formValues);

    }
    
     
    
    
    
})();