isRotated = false;
arrow = document.querySelector("header nav img");
menu = document.querySelector("menu");
function dropdown() {
	if (isRotated === false) {
		arrow.style.transform = "rotateX(180deg)";
		menu.style.opacity = "1";
		menu.style.transform = "translate(0, 0)";
		menu.style.pointerEvents = "auto";
		isRotated = true;
	} else {
		arrow.style.transform = "rotateX(0deg)";
		menu.style.opacity = "0";
		menu.style.transform = "translate(0,-0.7em)";
		menu.style.pointerEvents = "none";
		isRotated = false;
	}
}

let input = document.querySelector("main .kalkulator input");
let operator = false;

function tambah() {
	let lastchar = input.value.substr(input.value.length - 1);
	if (lastchar === "+" || lastchar === "-" || lastchar === "+" || lastchar === ":" || lastchar === "x") {
		operator = true;
		input.value = input.value.slice(0, -1);
		input.value += "+";
	} else {
		input.value += "+";
	}
}

function kurang() {
	let lastchar = input.value.substr(input.value.length - 1);
	if (lastchar === "+" || lastchar === "-" || lastchar === "+" || lastchar === ":" || lastchar === "x") {
		operator = true;
		input.value = input.value.slice(0, -1);
		input.value += "-";
	} else {
		input.value += "-";
	}
}

function kali() {
	let lastchar = input.value.substr(input.value.length - 1);
	if (lastchar === "+" || lastchar === "-" || lastchar === "+" || lastchar === ":" || lastchar === "x") {
		operator = true;
		input.value = input.value.slice(0, -1);
		input.value += "x";
	} else {
		input.value += "x";
	}
}

function bagi() {
	let lastchar = input.value.substr(input.value.length - 1);
	if (lastchar === "+" || lastchar === "-" || lastchar === "+" || lastchar === ":" || lastchar === "x") {
		operator = true;
		input.value = input.value.slice(0, -1);
		input.value += ":";
	} else {
		input.value += ":";
	}
}

function hapus() {
	input.value = input.value.slice(0, -1);
}

function samadengan() {
	hasil = input.value.replace(/:/g, "/").replace(/x/g, "*");
	input.value = eval(hasil);
}

function formatkal() {
	let inval = input.value;
	input.value = numeral(inval).format("0");
}

span = document.querySelector("main .zakatpenghasilan span");
penghasilan = document.querySelector("main .zakatpenghasilan .penghasilan");

function format() {
	penghasilan.value = numeral(penghasilan.value.replace(/,/g, "")).format("0,0");
}

function hitung() {
	let hasil1 = penghasilan.value.replace(/,/g, "");
	let hasil = hasil1 * (2.5 / 100);
	let myNumeral = numeral(hasil).format("0,0");
	span.innerHTML = myNumeral;
}
