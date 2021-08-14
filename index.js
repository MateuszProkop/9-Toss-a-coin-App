const message = document.querySelector('.info');
const buttons = document.querySelectorAll('button');

const coinArray = [ 'Heads', 'Tails' ];

for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', (e) => {
		console.log(e.target.innerText);
		let ComputerToss = Math.floor(Math.random() * 2);
		console.log(coinArray[ComputerToss]);
	});
}
