import * as UI from './ui';
import { Api } from './api';





function onSubmit(event) {
	const artistName = UI.artistInput.value;
	const songName = UI.songInput.value;
	if (artistName === '' || songName === '') {
			UI.messageDiv.innerHTML = 'Please, fill in all fields';
			UI.messageDiv.classList.add('error');
			clearForm();
	}
	else {
		const lyric = new Api(artistName, songName);
		lyric.queryApi()
				.then( data => {
					let result = data.liryc.lyrics;
					console.log(result)
				})
	}
	event.preventDefault();
}

function clearForm () {
		setTimeout( () => {
			UI.messageDiv.innerHTML = '';
			UI.messageDiv.classList.remove('error');
		}, 3000);
}

function subscribe() {
	UI.searchForm.addEventListener('submit', onSubmit);
}

export function init() {
	subscribe();
}