const message = document.querySelector('.info');
const buttons = document.querySelectorAll('button');

const coinArray = [ 'Heads', 'Tails' ];
const score = [ 0, 0 ];

for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', (e) => {
		let playerPick = e.target.innerText;
		let computerToss = Math.floor(Math.random() * 2);
		let computerPick = coinArray[computerToss];
		let output;
		if (playerPick === computerPick) {
			output = 'Player Won';
			score[0]++;
		} else {
			output = 'Computer Won';
			score[1]++;
		}
		message.innerHTML = output + '<br>Player ' + score[0] + ' Computer ' + score[1];
	});
}
