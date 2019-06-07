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
					if(data.liryc.lyrics) {
									let result = data.liryc.lyrics;
									UI.resultDiv.textContent = result;
					}
					else {
									UI.messageDiv.innerHTML = 'No lyrics found';
									UI.messageDiv.classList.add('error');
									resetForm();
						}
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

function resetForm() {
		setTimeout( () => {
			UI.messageDiv.innerHTML = '';
			UI.messageDiv.classList.remove('error');
			UI.searchForm.reset();
		}, 3000);

}

function subscribe() {
	UI.searchForm.addEventListener('submit', onSubmit);
}

export function init() {
	subscribe();
}