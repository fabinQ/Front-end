// alert("Cześć");

const color = "niebieski";
let age = 24;
let name = "Lisa";
console.log(`Cześć, mam na imię ${name} i mam ${age} lata.`);

// Nazwy zmiennych bez liczbt na początku, słow kluczowych, notacja Camel,

const p = document.createElement("p");
p.textContent = "Dynamiczny paragraf!";
document.body.append(p);

const a = 5 + 6;
console.log(`Wynik to ${a}`);

const b = 5 * 6;
console.log(`Wynik to ${b}`);

const c = 5 / 6;
console.log(`Wynik to ${c}`);
console.log(`Typ to ${typeof c}`);

const modulo = 9 % 4;
console.log(`Modulo ${modulo}`);

const x = 7;
const y = "7";
const z = 8;

// x==y porównóje wartość tzn. interpretuje watrość
// x===y sprawdza wartosc i typ
if (x === y) {
	console.log("👍");
} else {
	console.log("👎");
}

const score = 14;
if (score % 2) {
	console.log("nieparzyste");
} else {
	console.log("parzyste");
}

let num1 = 8;
num1++;
num1++;
console.log(num1);

let j = 5;
let k = 10;
j += k;
console.log(`Dodawanie zapis skrócony ${j}`);

const passLength = 8;

if (passLength >= 10) {
	console.log("Masz bardzo dobre hasło!");
} else if (passLength >= 5 && passLength < 10) {
	console.log("Masz dobre hasło!");
} else {
	console.log("Słabe hasło!");
}

const colors = ["red", "green", "blue"];
console.log(colors);

colors.push("gold");
console.log(colors);

for (let i = 0; i < colors.length + 1; i++) {
	console.log(colors[i]);
}

function test(q, w) {
	console.log("Funkcja modulo");
	if (q % w) {
		console.log("nieparzysta");
	} else {
		console.log("parzysta");
	}
	return q * w;
}

let multiplication = test(10, 4);
console.log(multiplication);

const arraySix = [...Array(6).keys()];
console.log(arraySix);
