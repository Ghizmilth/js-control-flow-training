console.log("security_questions.js loaded");

var petName = prompt("What is your pet name?", "Amber");
	if (petName == null || petName == "") {
var cityBorn = prompt("Which city were you born", "Maracaibo");
    } else if (cityBorn == null || cityBorn == "") {
	  var favColor = prompt("What is your favorite color", "Purple");
    }else if (favColor == null || favColor == "") {
			txt ("You answered correctly");
        } else {
			txt("try again")
        };
