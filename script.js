// let x = prompt("Գրեք x-ի արժեքը")
// let y = prompt("Գրեք y-ի արժեքը")
// let nshan = prompt("Գրեք գործողությունը (+,-,*,/)")

// x = parseInt(x)
// y = parseInt(y)

// if(nshan == "/" && y == 0) {
//     console.log("Bratan mi bajani 0i vra")
// } else if(nshan == "+") {
//     console.log(x + y)
// } else if(nshan == "-") {
//     console.log(x - y)
// } else if(nshan == "*") {
//     console.log(x * y)
// } else if(nshan == "/") {
//     console.log(x / y)
// }

let x = "0"
let y = ""
let nshan = ""
let c = ""
let k = ""
let havasare = ""
let backspace = ""
let but = 0
let tokos = ""

document.addEventListener('keydown', function(event) {
	if(but == 0) {
	if (event.code == 'Numpad0') {
		input0()
	}
	if (event.code == 'Numpad1') {
		input1()
	}
	if (event.code == 'Numpad2') {
		input2()
	}
	if (event.code == 'Numpad3') {
		input3()
	}
	if (event.code == 'Numpad4') {
		input4()
	}
	if (event.code == 'Numpad5') {
		input5()
	}
	if (event.code == 'Numpad6') {
		input6()
	}
	if (event.code == 'Numpad7') {
		input7()
	}
	if (event.code == 'Numpad8') {
		input8()
	}
	if (event.code == 'Numpad9') {
		input9()
	}
}else {
	if (event.code == 'Numpad0') {
		inpu0()
	}
	if (event.code == 'Numpad1') {
		inpu1()
	}
	if (event.code == 'Numpad2') {
		inpu2()
	}
	if (event.code == 'Numpad3') {
		inpu3()
	}
	if (event.code == 'Numpad4') {
		inpu4()
	}
	if (event.code == 'Numpad5') {
		inpu5()
	}
	if (event.code == 'Numpad6') {
		inpu6()
	}
	if (event.code == 'Numpad7') {
		inpu7()
	}
	if (event.code == 'Numpad8') {
		inpu8()
	}
	if (event.code == 'Numpad9') {
		inpu9()
	}
}
	if (event.code == 'NumpadAdd') {
		inputgum()
	}
	if (event.code == 'NumpadSubtract') {
		inputhan()
	}
	if (event.code == 'NumpadMultiply') {
		inputbazm()
	}
	if (event.code == 'NumpadDivide') {
		inputbaj()
	}
	if (event.code == 'NumpadEnter' || event.code == 'Enter') {
		if(y == "") {
			buttonhaverku()
		}else {
			buttonhav()
		}
	}
	if (event.code == 'Digit6' && (event.shiftKey)) {
		inputast()
	}
	if (event.code == 'Digit5' && (event.shiftKey)) {
		inputtokos()
	}
	if (event.code == 'Escape') {
		deleteall()
	}
	if (event.code == 'Backspace') {
		backspaceinput()
	}
	if (event.code == 'KeyM' && (event.ctrlKey)) {
		if(x != "" && y == "") {
			buttonnegx()
		}else if(x != "" && y != "") {
			buttonnegy()
		}
	}
	if (event.code == 'KeyC' && (event.ctrlKey)) {
		deleteall()
	}
	if (event.code == 'KeyB' && (event.ctrlKey)) {
		deletey()
	}
	if (event.code == 'KeyQ' && (event.ctrlKey)) {
		buttonarm()
	}
  });

function backspacebut() {
	if(backspace == "x") {
		x = x.substring(0, x.length - 1);
		console.log(x)
		document.getElementById('calcinput').value = x 
		if (x.length == 0) {
			x = "0"
			y = ""
			nshan = ""
			c = ""
			k = ""
			size = ""
			havasare = ""
			but = 0
			document.getElementById('calcinput').value = "0"
			buttonblock()
		}
	}
	if(backspace == "y") {
		document.getElementById('calcinput').value = x +  nshan +  y
		console.log(x +  nshan +  y)
		y = y.substring(0, y.length - 1);
		document.getElementById('calcinput').value = x +  nshan +  y
	}
	if(backspace == "nshan") {
		buttonblock()
		document.getElementById('calcinput').value = x
		console.log(x)
		nshan = ""
		backspace = "x"
	}
	if(y == "" && nshan != "") {
		backspace = "nshan"
	}
}

function backspaceinput() {
	if(backspace == "x") {
		x = x.substring(0, x.length - 1);
		console.log(x)
		if (x == "" || x == "0") {
			x = "0"
			y = ""
			nshan = ""
			c = ""
			k = ""
			size = ""
			havasare = ""
			but = 0
			document.getElementById('calcinput').value = "0"
			buttonblock()
		}
	}
	if(backspace == "y") {
		console.log(x +  nshan +  y)
		y = y.substring(0, y.length - 1);
	}
	if(backspace == "nshan") {
		buttonblock()
		console.log(x)
		nshan = ""
		backspace = "x"
	}
	if(y == "" && nshan != "") {
		backspace = "nshan"
	}
	if(backspace == "delete") {
		deleteall()
	}
}

function havas() {
	if(y == "") {
		buttonhaverku()
	}else {
		buttonhav()
	}
}

function buttonnegx() {
	x = -x
	document.getElementById('calcinput').value = x
}

function buttonnegy() {
	y = -y
	document.getElementById('calcinput').value = x +  nshan + y 
}

function deletey() {
	if(y != "") {
		y = ""
		document.getElementById('calcinput').value = x +  nshan
	}else if(y == "" && nshan == "") {
		x = "0"
		y = ""
		nshan = ""
		c = ""
		k = ""
		size = ""
		havasare = ""
		but = 0
		document.getElementById('calcinput').value = "0"
	}
}

function deleteall() {
	x = "0"
	y = ""
	nshan = ""
	c = ""
	k = ""
	size = ""
	havasare = ""
	but = 0
	document.getElementById('calcinput').value = "0"
	buttonblock()
}

function buttongum() {
	if(x != "" && y != "") {
		erkrordhavasarebut()
	}
	if(k == "maqrel") {
		nshan = "+"
		x = havasare
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x +  nshan
	}else {
		havasare = x + y
		x = havasare
		nshan = "+"
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x +  nshan
	}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function inputgum() {
	if(x != "" && y != "") {
		erkrordhavasare()
	}
	if(k == "maqrel") {
		nshan = "+"
		x = havasare
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x 
	}else {
		havasare = x + y
		x = havasare
		nshan = "+"
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x 
	}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function buttonhan() {
	if(x != "" && y != "") {
		erkrordhavasarebut()
	}
	if(k == "maqrel") {
		nshan = "-"
		x = havasare
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x +  nshan
		}else {
			havasare = x - y
			x = havasare
			nshan = "-"
			console.log(x +  nshan)
			document.getElementById('calcinput').value = x +  nshan
		}
		backspace = "nshan"
	buttonnone()
	sizefont()
}

function inputhan() {
	if(x != "" && y != "") {
		erkrordhavasare()
	}
	if(k == "maqrel") {
		nshan = "-"
		x = havasare
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x 
	}else {
		havasare = x + y
		x = havasare
		nshan = "-"
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x 
	}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function buttonbazm() {
	if(x != "" && y != "") {
	erkrordhavasarebut()
	}
	if(k == "maqrel") {
		nshan = "*"
		x = havasare
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x +  nshan
		}else {
			nshan = "*"
			console.log(x +  nshan)
			document.getElementById('calcinput').value = x +  nshan
		}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function inputbazm() {
	if(x != "" && y != "" && y != 0) {
		erkrordhavasare()
	}
	if(k == "maqrel") {
		nshan = "*"
		x = havasare
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x 
	}else {
		nshan = "*"
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x 
	}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function buttonbaj() {
	if(x != "" && y != "") {
		erkrordhavasarebut()
		}
	if(k == "maqrel") {
		nshan = "/"
		x = havasare
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x +  nshan
		}else {
			nshan = "/"
			console.log(x +  nshan)
			document.getElementById('calcinput').value = x +  nshan
		}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function inputbaj() {
	if(x != "" && y != "" && y != 0) {
		erkrordhavasare()
	}
	if(k == "maqrel") {
		nshan = "/"
		x = havasare
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x 
	}else {
		nshan = "/"
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x 
	}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function buttonast() {
	if(x != "" && y != "") {
	erkrordhavasarebut()
}
	if(k == "maqrel") {
		nshan = "^"
		x = havasare
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x +  nshan
		}else {
			nshan = "^"
			console.log(x +  nshan)
			document.getElementById('calcinput').value = x +  nshan
		}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function inputast() {
	if(x != "" && y != "" && y != 0) {
		erkrordhavasare()
	}
	if(k == "maqrel") {
		nshan = "^"
		x = havasare
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x 
	}else {
		nshan = "^"
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x 
	}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function buttontokos() {
	if(k == "maqrel") {
		tokos = "%"
		x = havasare
		console.log(x + nshan + y + tokos )
		document.getElementById('calcinput').value = x + nshan + y
	}else {
		tokos = "%"
		console.log(x + nshan + y + tokos )
		document.getElementById('calcinput').value = x + nshan + y
	}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function inputtokos() {
	if(k == "maqrel") {
		tokos = "%"
		x = havasare
		console.log(x + nshan + y + tokos )
		document.getElementById('calcinput').value = x + nshan + y
	}else {
		tokos = "%"
		console.log(x + nshan + y + tokos )
		document.getElementById('calcinput').value = x + nshan + y
	}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function buttonarm() {
	if(x != "" && y != "") {
		erkrordhavasarebut()
	}
	if(k == "maqrel") {
		nshan = "√"
		x = havasare
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x +  nshan
	}else {
		havasare = x
		x = havasare
		nshan = "√"
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x +  nshan
	}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function inputarm() {
	if(x != "" && y != "") {
		erkrordhavasare()
	}
	if(k == "maqrel") {
		nshan = "√"
		x = havasare
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x 
	}else {
		havasare = x
		x = havasare
		nshan = "√"
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x 
	}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function buttonnlog() {
	if(x != "" && y != "") {
		erkrordhavasare()
	}
	if(k == "maqrel") {
		logaritm = "log"
		x = havasare
		console.log(x +  nshan)
		document.getElementById('calcinput').value = x 
	}else {
		havasare = x
		x = havasare
		logaritm = "log"
		console.log(x +  nshan)
		document.getElementById('calcinput').value = logaritm
	}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function getBaseLog(x, y) {
	return Math.log(y) / Math.log(x);
  }  

function buttonnone() {
	but = 10
	document.getElementById('button0').style.display = 'none'
	document.getElementById('button1').style.display = 'none'
	document.getElementById('button2').style.display = 'none'
	document.getElementById('button3').style.display = 'none'
	document.getElementById('button4').style.display = 'none'
	document.getElementById('button5').style.display = 'none'
	document.getElementById('button6').style.display = 'none'
	document.getElementById('button7').style.display = 'none'
	document.getElementById('button8').style.display = 'none'
	document.getElementById('button9').style.display = 'none'
	document.getElementById('buttondbx').style.display = 'none'
	document.getElementById('butto0').style.display = 'inline'
	document.getElementById('butto1').style.display = 'inline'
	document.getElementById('butto2').style.display = 'inline'
	document.getElementById('butto3').style.display = 'inline'
	document.getElementById('butto4').style.display = 'inline'
	document.getElementById('butto5').style.display = 'inline'
	document.getElementById('butto6').style.display = 'inline'
	document.getElementById('butto7').style.display = 'inline'
	document.getElementById('butto8').style.display = 'inline'
	document.getElementById('butto9').style.display = 'inline'
	document.getElementById('buttondby').style.display = 'inline'
}

function buttonblock() {
	but = 0
	document.getElementById('butto0').style.display = 'none'
	document.getElementById('butto1').style.display = 'none'
	document.getElementById('butto2').style.display = 'none'
	document.getElementById('butto3').style.display = 'none'
	document.getElementById('butto4').style.display = 'none'
	document.getElementById('butto5').style.display = 'none'
	document.getElementById('butto6').style.display = 'none'
	document.getElementById('butto7').style.display = 'none'
	document.getElementById('butto8').style.display = 'none'
	document.getElementById('butto9').style.display = 'none'
	document.getElementById('buttondby').style.display = 'none'
	document.getElementById('button0').style.display = 'inline'
	document.getElementById('button1').style.display = 'inline'
	document.getElementById('button2').style.display = 'inline'
	document.getElementById('button3').style.display = 'inline'
	document.getElementById('button4').style.display = 'inline'
	document.getElementById('button5').style.display = 'inline'
	document.getElementById('button6').style.display = 'inline'
	document.getElementById('button7').style.display = 'inline'
	document.getElementById('button8').style.display = 'inline'
	document.getElementById('button9').style.display = 'inline'
	document.getElementById('buttondbx').style.display = 'inline'
}


	function button0() {
		if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if(x != 0) {
			k = ""
			x += "0"
			document.getElementById('calcinput').value = x
			console.log(x)
		}
		sizefont()
		backspace = "x"
	}

	function input0() {
		if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if(x != 0) {
			k = ""
			x += "0"
			console.log(x)
		}else {
			document.getElementById('calcinput').value = ""
		}
		sizefont()
		backspace = "x"
	}

    function button1() {
		if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "1"
		document.getElementById('calcinput').value = x
		backspace = "x"
		console.log(x)
		sizefont()
	}
	
	function input1() {
		if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "1"
		backspace = "x"
		console.log(x)
		sizefont()
    }

    function button2() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "2"
		document.getElementById('calcinput').value = x
		console.log(x)
		sizefont()
		backspace = "x"
	}
	
	function input2() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "2"
		console.log(x)
		sizefont()
		backspace = "x"
    }

    function button3() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "3"
		document.getElementById('calcinput').value = x
		console.log(x)
		sizefont()
		backspace = "x"
    }

	function input3() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
        x += "3"
		console.log(x)
		sizefont()
		backspace = "x"
	}
	
    function button4() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "4"
		document.getElementById('calcinput').value = x
		console.log(x)
		sizefont()
		backspace = "x"
	}
	
	function input4() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "4"
		console.log(x)
		sizefont()
		backspace = "x"
    }

    function button5() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "5"
		document.getElementById('calcinput').value = x
		console.log(x)
		sizefont()
		backspace = "x"
	}
	
	function input5() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "5"
		console.log(x)
		sizefont()
		backspace = "x"
    }

    function button6() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "6"
		document.getElementById('calcinput').value = x
		console.log(x)
		sizefont()
		backspace = "x"
	}
	
	function input6() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "6"
		console.log(x)
		sizefont()
		backspace = "x"
    }

    function button7() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "7"
		document.getElementById('calcinput').value = x
		console.log(x)
		sizefont()
		backspace = "x"
	}
	
	function input7() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "7"
		console.log(x)
		sizefont()
		backspace = "x"
    }

    function button8() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "8"
		document.getElementById('calcinput').value = x
		console.log(x)
		sizefont()
		backspace = "x"
	}
	
	function input8() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "8"
		console.log(x)
		sizefont()
		backspace = "x"
    }

    function button9() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "9"
		document.getElementById('calcinput').value = x
		console.log(x)
		sizefont()
		backspace = "x"
	}
	
	function input9() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0) {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		k = ""
		x += "9"
		console.log(x)
		sizefont()
		backspace = "x"
    }

	function butto0() {
		y += "0"
		console.log(x +  nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
		backspace = "y"
	}

	function inpu0() {
		y += "0"
		console.log(x +  nshan +  y)
		backspace = "y"
	}

	function butto1() {
		y += "1"
		console.log(x +  nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
		backspace = "y"
	}

	function inpu1() {
		y += "1"
		console.log(x +  nshan +  y)
		backspace = "y"
	}

	function butto2() {
		y += "2"
		console.log(x +  nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
		backspace = "y"
	}

	function inpu2() {
		y += "2"
		console.log(x +  nshan +  y)
		backspace = "y"
	}

	function butto3() {
		y += "3"
		console.log(x +  nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
		backspace = "y"
	}

	function inpu3() {
		y += "3"
		console.log(x +  nshan +  y)
		backspace = "y"
	}

	function butto4() {
		y += "4"
		console.log(x +  nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
		backspace = "y"
	}

	function inpu4() {
		y += "4"
		console.log(x +  nshan +  y)
		backspace = "y"
	}

	function butto5() {
		y += "5"
		console.log(x +  nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
		backspace = "y"
	}

	function inpu5() {
		y += "5"
		console.log(x +  nshan +  y)
		backspace = "y"
	}

	function butto6() {
		y += "6"
		console.log(x +  nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
		backspace = "y"
	}

	function inpu6() {
		y += "6"
		console.log(x +  nshan +  y)
		backspace = "y"
	}

	function butto7() {
		y += "7"
		console.log(x +  nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
		backspace = "y"
	}

	function inpu7() {
		y += "7"
		console.log(x +  nshan +  y)
		backspace = "y"
	}

	function butto8() {
		y += "8"
		console.log(x +  nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
		backspace = "y"
	}

	function inpu8() {
		y += "8"
		console.log(x +  nshan +  y)
		backspace = "y"
	}

	function butto9() {
		y += "9"
		console.log(x +  nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
		backspace = "y"
	}

	function inpu9() {
		y += "9"
		console.log(x +  nshan +  y)
		backspace = "y"
	}

function buttonhav() {
	if(nshan != "") {
		if( y != "") {
			c = x + " " + nshan + " " + y + " = "
		}else {
			c = x + " " + nshan + " " + x + " = "
		}
		x = parseFloat(x)
		if(y != "") {
			y = parseFloat(y)
		}
		if(nshan == "+" && (y != "" || y == 0) && tokos == "") {
			console.log(c + (x + y))
			document.getElementById('calcinput').value = c + (x + y)
			k = "maqrel"
			havasare = x + y
		}else if(nshan == "-" && (y != "" || y == 0) && tokos == "") {
			console.log(c + (x - y))
			document.getElementById('calcinput').value = c + (x - y)
			k = "maqrel"
			havasare = x - y
		}else if(nshan == "*" && (y != "" || y == 0) && tokos == "") {
			console.log(c + (x * y))
			document.getElementById('calcinput').value = c + (x * y)
			k = "maqrel"
			havasare = x * y
		}else if(nshan == "/" && y != 0 && y != "" && tokos == "") {
			console.log(c + (x / y))
			document.getElementById('calcinput').value = c + (x / y)
			k = "maqrel"
			havasare = x / y
		}else if(nshan == "/" && y == 0) {
			document.getElementById('calcinput').style.fontSize = '12.8px'
			document.getElementById('calcinput').value = "Деление на ноль невозможно"
			console.log("Деление на ноль невозможно")
			k = "maqrel"
			havasare = "0"
		}else if(nshan == "^" && (y != "" || y == 0) && tokos == "") {
			console.log(c + (x ** y))
			document.getElementById('calcinput').value = c + (x ** y)
			k = "maqrel"
			havasare = x ** y
		//}else if(nshan == "%" && y != "") {
		// 	console.log(c + (x % y))
		// 	document.getElementById('calcinput').value = c + (x % y)
		// 	k = "maqrel"
		// 	havasare = x % y
		}else if(tokos == "%" && y != "" && nshan == "+") {
			c = x + " " + nshan + " " + (x*y/100) + " = "
			console.log(c + (x + x*y/100))
			document.getElementById('calcinput').value = c + (x + x*y/100)
			k = "maqrel"
			havasare = x + x*y/100
		}else if(tokos == "%" && y != "" && nshan == "-") {
			c = x + " " + nshan + " " + (x*y/100) + " = "
			console.log(c + (x - x*y/100))
			document.getElementById('calcinput').value = c + (x - x*y/100)
			k = "maqrel"
			havasare = x - x*y/100
		}else if(tokos == "%" && y != "" && nshan == "*") {
			c = x + " " + nshan + " " + (x*y/100) + " = "
			console.log(c + (x * x*y/100))
			document.getElementById('calcinput').value = c + (x * x*y/100)
			k = "maqrel"
			havasare = x * x*y/100
		}else if(tokos == "%" && y != "" && nshan == "/") {
			c = x + " " + nshan + " " + (x*y/100) + " = "
			console.log(c + (x / x*y/100))
			document.getElementById('calcinput').value = c + (x / x*y/100)
			k = "maqrel"
			havasare = x / x*y/100
		}else if(tokos == "%" && y != "" && nshan == "^") {
			c = x + " " + nshan + " " + (x*y/100) + " = "
			console.log(c + (x ** (x*y/100)))
			document.getElementById('calcinput').value = c + (x ** (x*y/100))
			k = "maqrel"
			havasare = x ** (x*y/100)
		}else if(nshan == "%" && y == 0) {
			document.getElementById('calcinput').style.fontSize = '12.8px'
			document.getElementById('calcinput').value = "Деление на ноль невозможно"
			console.log("Деление на ноль невозможно")
			k = "maqrel"
			havasare = "0"
		}    
		x = "0"
		y = ""
		nshan = ""
		but = 0
		tokos = ""
		backspace = "delete"
		buttonblock()
}
}

function sizefont() {
	document.getElementById('calcinput').style.fontSize = '20px'
}

function buttonhaverku() {
	c = x + " " + nshan + " " + x + " = "
	x = parseFloat(x)
	if(nshan == "+") {
		console.log(c + (2*x))
		document.getElementById('calcinput').value = c + (2*x)
		k = "maqrel"
		havasare = 2*x
	}else if(nshan == "-") {
		console.log(c + (x - x))
		document.getElementById('calcinput').value = c + (x - x)
		k = "maqrel"
		havasare = x - x
	}else if(nshan == "*") {
		console.log(c + (x - x))
		document.getElementById('calcinput').value = c + (x * x)
		k = "maqrel"
		havasare = x * x
	}else if(nshan == "/") {
		console.log(c + (x / x))
		document.getElementById('calcinput').value = c + (x / x)
		k = "maqrel"
		havasare = x / x
	}else if(nshan == "^") {
		console.log(c + (x ** x))
		document.getElementById('calcinput').value = c + (x ** x)
		k = "maqrel"
		havasare = x ** x
	}else if(nshan == "%") {
		console.log(c + (x % x))
		document.getElementById('calcinput').value = c + (x % x)
		k = "maqrel"
		havasare = x % x
	}else if(nshan == "√") {
		c = nshan + " " + x + " = "
		console.log(c + (Math.sqrt(x)))
		document.getElementById('calcinput').value = c + (Math.sqrt(x))
		k = "maqrel"
		havasare =  Math.sqrt(x)
	}
		x = "0"
		y = ""
		nshan = ""
		but = 0
		backspace = "delete"
		buttonblock()
}

function erkrordhavasare() {
	x = parseFloat(x)
	y = parseFloat(y)
	if(nshan == "+") {
		havasare = x + y
		x = havasare
		document.getElementById('calcinput').value = havasare + " "
		y = ""
	}else if(nshan == "-") {
		havasare = x - y
		x = havasare
		document.getElementById('calcinput').value = havasare + " "
		y = ""
	}else if(nshan == "*") {
		havasare = x * y
		x *= y
		document.getElementById('calcinput').value = havasare + " "
		y = ""
	}else if(nshan == "/") {
		havasare = x / y
		x /= y
		document.getElementById('calcinput').value = havasare + " "
		y = ""
	}else if(nshan == "^") {
		havasare = x ** y
		x **= y
		document.getElementById('calcinput').value = havasare + " "
		y = ""
	}else if(nshan == "%") {
		havasare = x % y
		x %= y
		document.getElementById('calcinput').value = havasare + " "
		y = ""
	}
}

function erkrordhavasarebut() {
	x = parseFloat(x)
	y = parseFloat(y)
	if(nshan == "+") {
		havasare = x + y
		x = havasare
		document.getElementById('calcinput').value = havasare +  nshan
		y = ""
	}else if(nshan == "-") {
		havasare = x - y
		x -= y
		document.getElementById('calcinput').value = havasare +  nshan
		y = ""
	}else if(nshan == "*") {
		havasare = x * y
		x *= y
		document.getElementById('calcinput').value = havasare +  nshan
		y = ""
	}else if(nshan == "+") {
		havasare = x + y
		x += y
		document.getElementById('calcinput').value = havasare +  nshan
		y = ""
	}else if(nshan == "/") {
		havasare = x / y
		x /= y
		document.getElementById('calcinput').value = havasare +  nshan
		y = ""
	}else if(nshan == "^") {
		havasare = x ** y
		x **= y
		document.getElementById('calcinput').value = havasare +  nshan
		y = ""
	}else if(nshan == "%") {
		havasare = x % y
		x %= y
		document.getElementById('calcinput').value = havasare +  nshan
		y = ""
	}
}