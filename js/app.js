let clicks1 = 0;
let clicks2 = 0;
const cat1Name = "Cutie";
const cat2Name = "Sweetie";

var onload = (function() {
	console.log("Starting up...");
	const elName1 = document.querySelector('#name1');
	const elName2 = document.querySelector('#name2');
	elName1.innerText = cat1Name;
	elName2.innerText = cat2Name;
})();

const cat1image = document.querySelector('#cat1');
cat1image.addEventListener('click', function() {
	const elClicks1 = document.querySelector('#clicks1');
	clicks1 += 1;
	elClicks1.innerText = clicks1;
});

const cat2image = document.querySelector('#cat2');
cat2image.addEventListener('click', function() {
	const elClicks2 = document.querySelector('#clicks2');
	clicks2 += 1;
	elClicks2.innerText = clicks2;
});