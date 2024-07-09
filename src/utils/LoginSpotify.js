import React, { useState, useEffect } from 'react';

function LoginSpotify() {
  const [token, setToken] = useState(null);
  const [me, setMe] = useState(null);
  
  const client_id = '7c59524e4ec64b37bba6e26d753d6c7d';
  const scopes = 'user-top-read';
  const redirect_url = 'http://localhost:3000/';

  const login = () => {
    const popup = window.open(
      `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_url}&scope=${scopes}&show_dialog=true`,
      'Login with Spotify',
      'width=800,height=600'
    );

    window.spotifyCallback = (payload) => {
      popup.close();
      fetch('https://api.spotify.com/v1/me', {
        headers: {
          'Authorization': `Bearer ${payload}`
        }
      })
      .then(response => response.json())
      .then(data => setMe(data));
    };
  };

  useEffect(() => {
    const hash = window.location.hash;
    const tokenFromUrl = hash.substr(1).split('&')[0].split('=')[1];
    
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      window.opener.spotifyCallback(tokenFromUrl);
    }
  }, []);

  return (
    <div id="app">
      <button class='h-12 m-2 p-2 bg-indigo-500 hover:bg-indigo-700 shadow-md text-white text-md font-medium rounded-lg transform transition-transform duration-300 hover:scale-105' onClick={login}>Login with Spotify</button>
      {me && (
        <div>
          <h1>{me.display_name}</h1>
          <img src={me.images[0]?.url} alt="Profile" />
        </div>
      )}
    </div>
  );
}

export default LoginSpotify;
