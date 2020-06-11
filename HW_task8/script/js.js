function upperCase(b) {
	let regExp = /^[A-Z]/;
	if (!regExp.test(b)) {
		console.log("String's not starts with uppercase ")
	} else {
		console.log("String's starts with uppercase character")
	}
	//return;
}

upperCase('Regexp');
  