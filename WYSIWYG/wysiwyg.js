
//People Objects

var people = [
	{title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{title: "King",
	  name: "Geoffrey Lear",
	  bio: "According to Geoffrey's genealogy of the British dynasty, Leir's reign would have occurred around the 8th century BC, around the time of the founding of Rome. The story was modified and retold by William Shakespeare in his Elizabethan tragedy King Lear.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: '700BC',
	    death: '600BC'
	  }
	},
	{title: "President",
	  name: "Donald Trump",
	  bio: "Donald John Trump is an American businessman, television personality, politician, and the current President of the United States. He took office as the 45th President on January 20, 2017.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1946,
	    death: 'Living'
	  }
	},
	{title: "Rock God",
	  name: "Will Swan",
	  bio: "Nicknamed 'Blue Swan', William Swan most prominently known as the lead guitarist and founder of post-hardcore band Dance Gavin Dance and as the founder of his record label Blue Swan Records. He is also the guitarist for the groups Sianvar and Secret Band. He is known occasionally as a rapper.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1985,
	    death: 'Living'
	  }
	}
]


/// Printing people objects into cards

for (var i = 0; i < people.length; i++) {
	var title = people[i].title
	var name = people[i].name
	var bio = people[i].bio
	var birth = people[i].lifespan.birth
	var death = people[i].lifespan.death

	var card = "<person class='card'><header class='card-header'>"+title+" - "+name+"</header><section class='card-bio'>"+bio+"</section><br><footer class='card-lifespan'>"+birth+"-"+death+"</footer></person>"

	var cardSection = document.getElementById("card-section")
	cardSection.innerHTML += card

}





///Grabbing elements and assigning eventlisteners
var personCard = document.getElementsByClassName("card")

for (var i = 0; i < personCard.length; i++) {
	personCard.item(i).addEventListener("click", handleBorder);

}





/// Click Event 
function handleBorder (event) {
	//Removes classes from previous cards
	for (var i = 0; i < personCard.length; i++) {
		personCard[i].classList.remove("dotted");
	}
	//resets input value
	input.value = "";
	//toggels class
	this.classList.toggle("dotted");
	input.focus();
	//runs function to mirror text
	textMirror(this);
}


/// Mirroring text
var input = document.getElementById("input");

function textMirror (personCard) {
	input.addEventListener("keyup", function (event) {
		var inputText = document.getElementById("input").value;
		if (personCard.classList.contains("dotted")) {
			personCard.childNodes[1].innerHTML = inputText;
		}
	})
}





//enter key does the same as the click event
input.onkeypress=function(e){
    if(e.keyCode==13){
        e.preventDefault();
        //removes classes to save edits to card
        for (var i = 0; i < personCard.length; i++) {
		personCard[i].classList.remove("dotted");
	}
        input.value = "";
    }
}