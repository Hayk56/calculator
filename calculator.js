let x = "0"
let y = ""
let nshan = ""
let c = ""
let k = ""
let havasare = ""
let backspace = ""
let storaket = ""
let but = 0
let tokos = ""
let stora = ""

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
	if (event.code == 'NumpadDecimal') {
		inputstoraket()
	}
  });

function backspacebut() {
	if(backspace == "x") {
		x = x.substring(0, x.length - 1);
		console.log(x)
		document.getElementById('calcinput').value = x 
		if (x.length == 0) {
			deleteall()
		}
	}
	if(backspace == "y") {
		document.getElementById('calcinput').value = x +  nshan +  y
		y = y.substring(0, y.length - 1);
		document.getElementById('calcinput').value = x +  nshan +  y
		console.log(x +  nshan +  y)
	}
	if(backspace == "nshan") {
		buttonblock()
		document.getElementById('calcinput').value = x
		nshan = ""
		backspace = "x"
		console.log(x)
	}
	if(y == "" && nshan != "") {
		backspace = "nshan"
	}
	if(backspace == "storaket") {
		stora = ""
		storaket = ""
	}
}

function backspaceinput() {
	if(backspace == "x") {
		x = x.substring(0, x.length - 1);
		console.log(x)
		if (x == "" || x == "0") {
			deleteall()
		}
	}
	if(backspace == "y") {
		y = y.substring(0, y.length - 1);
		console.log(x +  nshan +  y)
	}
	if(backspace == "nshan") {
		buttonblock()
		nshan = ""
		backspace = "x"
		console.log(x)
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
		storaket = ""
		stora = ""
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
	storaket = ""
	stora = ""
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
	if(stora != "" && y != "") {
		y = "0"
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
	if(stora != "" && y != "") {
		y = "0"
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
		if(stora != "" && y != "") {
		y = "0"
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
	if(stora != "" && y != "") {
		y = "0"
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
		if(stora != "" && y != "") {
		y = "0"
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
	if(stora != "" && y != "") {
		y = "0"
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
		if(stora != "" && y != "") {
		y = "0"
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
	if(stora != "" && y != "") {
		y = "0"
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
		if(stora != "" && y != "") {
		y = "0"
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
	if(stora != "" && y != "") {
		y = "0"
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
	if(stora != "" && y != "") {
		y = "0"
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
	if(stora != "" && y != "") {
		y = "0"
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
	if(stora != "" && y != "") {
		y = "0"
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
	if(stora != "" && y != "") {
		y = "0"
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
	if(stora != "" && y != "") {
		y = "0"
	}
	backspace = "nshan"
	buttonnone()
	sizefont()
}

function inputstoraket() {
	if(x != "" && y == "") {
		inputstoraketx()
	}else if(x != "" && y != "") {
		inputstorakety()
	}
	backspace = "storaket"
	if (k == "maqrel") {
		document.getElementById('calcinput').value = "0"
		k = ""
	}
	if(y == "") {
		nshan = ""
	}
}

function inputstoraketx() {
	if(stora != "x") {
		storaket = "x,"
	} 
	document.getElementById('calcinput').value = x
	console.log(x + ".")
	stora = "x"
}

function inputstorakety() {
	if(stora != "y") {
		storaket = "y,"
	}
	console.log(x + nshan + y + ".")
	document.getElementById('calcinput').value = x + nshan + y
	stora = "y"
}

function buttonstoraket() {
	if(x != "" && y == "") {
		buttonstoraketx()
	}else if(x != "" && y != "") {
		buttonstorakety()
	}
	backspace = "storaket"
	if (k == "maqrel") {
		document.getElementById('calcinput').value = "0"
		k = ""
	}
	if(y == "") {
		nshan = ""
	}
}

function buttonstoraketx() {
	if(stora != "x") {
		storaket = "x,"
		document.getElementById('calcinput').value = x + "."
		console.log(x + ".")
	}
	stora = "x"
}

function buttonstorakety() {
	if(stora != "y") {
		storaket = "y,"
		document.getElementById('calcinput').value = x + nshan + y + "."
		console.log(x + nshan + y + ".")
	}
	stora = "y"
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
		if(x != "0" && storaket == "") {
			k = ""
			x += "0"
			document.getElementById('calcinput').value = x
			console.log(x)
		} else if (x == "0" && storaket != ""){
			x += ".0"
			storaket = ""
			document.getElementById('calcinput').value = x
			console.log(x)
		} else if (x == 0 && storaket == "" && stora != ""){
			k = ""
			x += "0"
			document.getElementById('calcinput').value = x
			console.log(x)
		} else if (x == "0") {
			document.getElementById('calcinput').value = ""
		} else if (havasare != "") {
			x += "0"
		} else if (x != "0" && storaket != "") {
			x += ".0"
			console.log(x)
			storaket = ""
		}
		k = ""
		document.getElementById('calcinput').value = x
		sizefont()
		backspace = "x"
	}

	function input0() {
		if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if(x != "0" && storaket == "") {
			k = ""
			x += "0"
			console.log(x)
		} else if (x == "0" && storaket != ""){
			x += ".0"
			storaket = ""
			console.log(x)
		} else if (x == 0 && storaket == "" && stora != ""){
			k = ""
			x += "0"
			console.log(x)
		} else if (x == "0") {
			document.getElementById('calcinput').value = ""
		} else if (havasare != "") {
			x += "0"
		} else if (x != "0" && storaket != "") {
			x += ".0"
			console.log(x)
			storaket = ""
		}
		k = ""
		sizefont()
		backspace = "x"
	}

    function button1() {
		if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x,") {
			x += ".1"
			storaket = ""
		} else {
			x += "1"
		}
		k = ""
		document.getElementById('calcinput').value = x
		backspace = "x"
		console.log(x)
		sizefont()
	}
	
	function input1() {
		if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x,") {
			x += ".1"
			storaket = ""
		} else {
			x += "1"
		}
		k = ""
		backspace = "x"
		console.log(x)
		sizefont()
    }

    function button2() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".2"
			storaket = ""
			stora = ""
		} else {
			x += "2"
		}
		k = ""
		document.getElementById('calcinput').value = x
		backspace = "x"
		console.log(x)
		sizefont()
	}
	
	function input2() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".2"
			storaket = ""
			stora = ""
		} else {
			x += "2"
		}
		k = ""
		backspace = "x"
		console.log(x)
		sizefont()
    }

    function button3() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".3"
			storaket = ""
			stora = ""
		} else {
			x += "3"
		}
		k = ""
		document.getElementById('calcinput').value = x
		backspace = "x"
		console.log(x)
		sizefont()
    }

	function input3() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".3"
			storaket = ""
			stora = ""
		} else {
			x += "3"
		}
		k = ""
		backspace = "x"
		console.log(x)
		sizefont()
	}
	
    function button4() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".4"
			storaket = ""
			stora = ""
		} else {
			x += "4"
		}
		k = ""
		document.getElementById('calcinput').value = x
		backspace = "x"
		console.log(x)
		sizefont()
	}
	
	function input4() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".4"
			storaket = ""
			stora = ""
		} else {
			x += "4"
		}
		k = ""
		backspace = "x"
		console.log(x)
		sizefont()
    }

    function button5() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".5"
			storaket = ""
			stora = ""
		} else {
			x += "5"
		}
		k = ""
		document.getElementById('calcinput').value = x
		backspace = "x"
		console.log(x)
		sizefont()
	}
	
	function input5() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".5"
			storaket = ""
			stora = ""
		} else {
			x += "5"
		}
		k = ""
		backspace = "x"
		console.log(x)
		sizefont()
    }

    function button6() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".6"
			storaket = ""
			stora = ""
		} else {
			x += "6"
		}
		k = ""
		document.getElementById('calcinput').value = x
		backspace = "x"
		console.log(x)
		sizefont()
	}
	
	function input6() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".6"
			storaket = ""
			stora = ""
		} else {
			x += "6"
		}
		k = ""
		backspace = "x"
		console.log(x)
		sizefont()
    }

    function button7() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".7"
			storaket = ""
			stora = ""
		} else {
			x += "7"
		}
		k = ""
		document.getElementById('calcinput').value = x
		backspace = "x"
		console.log(x)
		sizefont()
	}
	
	function input7() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".7"
			storaket = ""
			stora = ""
		} else {
			x += "7"
		}
		k = ""
		backspace = "x"
		console.log(x)
		sizefont()
    }

    function button8() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".8"
			storaket = ""
			stora = ""
		} else {
			x += "8"
		}
		k = ""
		document.getElementById('calcinput').value = x
		backspace = "x"
		console.log(x)
		sizefont()
	}
	
	function input8() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".8"
			storaket = ""
			stora = ""
		} else {
			x += "8"
		}
		k = ""
		backspace = "x"
		console.log(x)
		sizefont()
    }

    function button9() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".9"
			storaket = ""
			stora = ""
		} else {
			x += "9"
		}
		k = ""
		document.getElementById('calcinput').value = x
		backspace = "x"
		console.log(x)
		sizefont()
	}
	
	function input9() {
        if (k == "maqrel") {
			document.getElementById('calcinput').value = ""
		}
		if (document.getElementById('calcinput').value == 0 && stora == "") {
			document.getElementById('calcinput').value = ""
			x = ""
		}
		if(storaket == "x," && stora == "x") {
			x += ".9"
			storaket = ""
			stora = ""
		} else {
			x += "9"
		}
		k = ""
		backspace = "x"
		console.log(x)
		sizefont()
    }

	function butto0() {
		if(y != "0") {
			y += "0"
		} else if (y == "0" && storaket != ""){
			y+= ".0"
			storaket = ""
		}else if (y == "0") {
			stora = "x"
		} else if (y == "0" && storaket == "" && stora == "y"){
			y += "0"
		} else if (y != "0" && storaket != "") {
			x += ".0"
			console.log(x)
			storaket = ""
		}
		document.getElementById('calcinput').value = x + nshan + y
		console.log(x +  nshan +  y)
		backspace = "y"
		sizefont()
	}

	function inpu0() {
		if(y != "0") {
			y += "0"
		} else if (y == "0" && storaket != ""){
			y+= ".0"
			storaket = ""
		}else if (y == "0") {
			document.getElementById('calcinput').value = x + nshan
			stora = "x"
		} else if (y == "0" && storaket == "" && stora == "y"){
			y += "0"
		} else if (y != "0" && storaket != "") {
			x += ".0"
			console.log(x)
			storaket = ""
		}
		console.log(x +  nshan +  y)
		backspace = "y"
		sizefont()
	}

	function butto1() {
		if (y == "0" && stora != "y") {
			document.getElementById('calcinput').value = x + nshan + y
			y = ""
		}
		if(storaket == "y,") {
			y += ".1"
			storaket = ""
		}else {
			y += "1"
		}
		backspace = "y"
		console.log(x + nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
	}

	function inpu1() {
		if (y == "0" && stora != "y") {
			y = ""
		}
		if(storaket == "y,") {
			y += ".1"
			storaket = ""
		} else {
			y += "1"
		}
		backspace = "y"
		console.log(x +  nshan +  y)
	}

	function butto2() {
		if (y == "0" && stora != "y") {
			document.getElementById('calcinput').value = x + nshan + y
			y = ""
		}
		if(storaket == "y,") {
			y += ".2"
			storaket = ""
		}else {
			y += "2"
		}
		backspace = "y"
		console.log(x + nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
	}

	function inpu2() {
		if (y == "0" && stora != "y") {
			y = ""
		}
		if(storaket == "y,") {
			y += ".2"
			storaket = ""
		} else {
			y += "2"
		}
		backspace = "y"
		console.log(x +  nshan +  y)
	}

	function butto3() {
		if (y == "0" && stora != "y") {
			document.getElementById('calcinput').value = x + nshan + y
			y = ""
		}
		if(storaket == "y,") {
			y += ".3"
			storaket = ""
		}else {
			y += "3"
		}
		backspace = "y"
		console.log(x + nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
	}

	function inpu3() {
		if (y == "0" && stora != "y") {
			y = ""
		}
		if(storaket == "y,") {
			y += ".3"
			storaket = ""
		} else {
			y += "3"
		}
		backspace = "y"
		console.log(x +  nshan +  y)
	}

	function butto4() {
		if (y == "0" && stora != "y") {
			document.getElementById('calcinput').value = x + nshan + y
			y = ""
		}
		if(storaket == "y,") {
			y += ".4"
			storaket = ""
		}else {
			y += "4"
		}
		backspace = "y"
		console.log(x + nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
	}

	function inpu4() {
		if (y == "0" && stora != "y") {
			y = ""
		}
		if(storaket == "y,") {
			y += ".4"
			storaket = ""
		} else {
			y += "4"
		}
		backspace = "y"
		console.log(x +  nshan +  y)
	}

	function butto5() {
		if (y == "0" && stora != "y") {
			document.getElementById('calcinput').value = x + nshan + y
			y = ""
		}
		if(storaket == "y,") {
			y += ".5"
			storaket = ""
		}else {
			y += "5"
		}
		backspace = "y"
		console.log(x + nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
	}

	function inpu5() {
		if (y == "0" && stora != "y") {
			y = ""
		}
		if(storaket == "y,") {
			y += ".5"
			storaket = ""
		} else {
			y += "5"
		}
		backspace = "y"
		console.log(x +  nshan +  y)
	}

	function butto6() {
		if (y == "0" && stora != "y") {
			document.getElementById('calcinput').value = x + nshan + y
			y = ""
		}
		if(storaket == "y,") {
			y += ".6"
			storaket = ""
		}else {
			y += "6"
		}
		backspace = "y"
		console.log(x + nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
	}

	function inpu6() {
		if (y == "0" && stora != "y") {
			y = ""
		}
		if(storaket == "y,") {
			y += ".6"
			storaket = ""
		} else {
			y += "6"
		}
		backspace = "y"
		console.log(x +  nshan +  y)
	}

	function butto7() {
		if (y == "0" && stora != "y") {
			document.getElementById('calcinput').value = x + nshan + y
			y = ""
		}
		if(storaket == "y,") {
			y += ".7"
			storaket = ""
		}else {
			y += "7"
		}
		backspace = "y"
		console.log(x + nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
	}

	function inpu7() {
		if (y == "0" && stora != "y") {
			y = ""
		}
		if(storaket == "y,") {
			y += ".7"
			storaket = ""
		} else {
			y += "7"
		}
		backspace = "y"
		console.log(x +  nshan +  y)
	}

	function butto8() {
		if (y == "0" && stora != "y") {
			document.getElementById('calcinput').value = x + nshan + y
			y = ""
		}
		if(storaket == "y,") {
			y += ".8"
			storaket = ""
		}else {
			y += "8"
		}
		backspace = "y"
		console.log(x + nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
	}

	function inpu8() {
		if (y == "0" && stora != "y") {
			y = ""
		}
		if(storaket == "y,") {
			y += ".8"
			storaket = ""
		} else {
			y += "8"
		}
		backspace = "y"
		console.log(x +  nshan +  y)
	}

	function butto9() {
		if (y == "0" && stora != "y") {
			document.getElementById('calcinput').value = x + nshan + y
			y = ""
		}
		if(storaket == "y,") {
			y += ".9"
			storaket = ""
		}else {
			y += "9"
		}
		backspace = "y"
		console.log(x + nshan +  y)
		document.getElementById('calcinput').value = x +  nshan +  y
	}

	function inpu9() {
		if (y == "0" && stora != "y") {
			y = ""
		}
		if(storaket == "y,") {
			y += ".9"
			storaket = ""
		} else {
			y += "9"
		}
		backspace = "y"
		console.log(x +  nshan +  y)
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
		storaket = ""
		stora = ""
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
		console.log(c + (x * x))
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
	}else if(nshan == "" && y == "") {
		console.log(x)
		havasare = x
	}
	if(nshan != "") {
		x = "0"
		y = ""
		nshan = ""
		storaket = ""
		but = 0
		backspace = "delete"
		stora = ""
		buttonblock()
	}
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