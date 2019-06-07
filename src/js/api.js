export class Api {
	constructor(artist, song) {
		this.artist = artist;
		this.song = song;
	}
	async queryApi() {
		const url = await fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`)
		const liryc = await url.json();
		return {
			liryc
		}
	}
}