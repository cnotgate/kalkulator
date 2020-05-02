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
