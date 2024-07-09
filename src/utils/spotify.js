const client_id = '7c59524e4ec64b37bba6e26d753d6c7d';
const scopes = 'playlist-read-private playlist-modify-private playlist-modify-public';
const redirect_url = 'http://localhost:3000/';
let accessToken;

const Spotify = {

    login() {
        if (accessToken) {
            return accessToken;
        } else {
        const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_url}&scope=${scopes}&show_dialog=true`
        window.location = url;
        const hash = window.location.hash;
        const accessToken = hash.substring(1).split('&')[0].split('=')[1];
        return accessToken;
        }
    },

    async search(term){
        const accessToken = Spotify.login();
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }})
        const jsonResponse = await response.json();
        return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }));
    },

    async userProfile () {
        const accessToken = Spotify.login();
        const user = await fetch('https://api.spotify.com/v1/me', {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          })
        const data = await user.json();
        return data;    
    },

    async savePlaylist(name, uri) {
        if (name && uri.length) {
            const accessToken = Spotify.login();
            const userId = await this.userProfile();
            const playlist = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,{
                headers: {'Authorization': `Bearer ${accessToken}`},
                method: 'POST',
                body: JSON.stringify({name: name})
            })
            const playlistJson = await playlist.json();
            const playlistId = playlistJson.id;

            const addTracks = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                headers: {'Authorization': `Bearer ${accessToken}`},
                method: 'POST',
                body: JSON.stringify({uris: uri})
              });
            const tracksJson = await addTracks.json();
            return tracksJson;
        }
    }
}