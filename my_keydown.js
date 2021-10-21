function my_keydown(e) {
	keyPressed = e.keycode; console.log(keyPressed);
	if ((keyPressed >= 65 && keyPressed <= 122))
		(keypressed >= 65 && keypressed <= 90); {
		aplhabetkey();
		document.getElementById("d1").innerHTML = "YOU PRESSED THE ALPHABET KEY";
		console.log("alphabet key");
	} if (keyPressed >= 48 && keyPressed <= 57) {
		numberkey();
		document.getElementById("d1").innerHTML = "you pressed numBER KEYYYYYYY";
		console.log("number key");
	} else if (keyPressed >= 37 && keyPressed <= 40) {
		arrowkey();
		document.getElementById("d1").innerHTML = "you PreSSED ARROW KEY"; console.log("Arrow Key");
	} else if ((keyPressed == 17) ||
		(keyPressed == 18 || keyPressed == 27)) {
		specialkey();
		document.getElementById("d1").innerHTML = "you presses ctrl/esc/alt";
		console.log9; "special key";
	} else {
		otherkey();
		document.getElementById("d1").innerHTML = "you pressed symbol or other key";
	}
}
