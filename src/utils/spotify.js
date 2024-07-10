const client_id = '7c59524e4ec64b37bba6e26d753d6c7d';

const scopes = 'playlist-read-private playlist-modify-private playlist-modify-public';
const redirect_url = 'http://localhost:3000/';
let accessToken;

const Spotify = {

    login() {
        if (accessToken) {
            return accessToken;
          }
      
          const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
          const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
          if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
            return accessToken;
          } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=${scopes}&redirect_uri=${redirect_url}`;
            window.location = accessUrl;
          }
    },

    async search(term, accessToken){
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

    async userProfile (accessToken) {
        const user = await fetch('https://api.spotify.com/v1/me', {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          })
        const data = await user.json();
        return data;    
    },

    async savePlaylist(name, uri, accessToken, userId) {
        if (name && uri.length) {
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

export default Spotify;