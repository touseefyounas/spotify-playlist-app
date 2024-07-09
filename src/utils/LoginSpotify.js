import React, { useState, useEffect } from 'react';

function LoginSpotify() {
  const [token, setToken] = useState(null);

  const client_id = '';
  const scopes = 'playlist-read-private playlist-modify-private playlist-modify-public';
  const redirect_url = 'http://localhost:3000/';

  const login = () => {
    const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_url}&scope=${scopes}&show_dialog=true`
    window.location = url;
  };

  useEffect(() => {
    const hash = window.location.hash;
    console.log(window.location.href);
    const tokenFromUrl = hash.substring(1).split('&')[0].split('=')[1];
    
    if (tokenFromUrl) {
        setToken(tokenFromUrl);
        console.log(token);
    }
  }, [token]);

  return (
    <div>
       {token ? 
       <section class='h-12 m-2 p-2 bg-indigo-500 hover:bg-indigo-700 shadow-md text-white text-md font-medium rounded-lg'>Logged In</section>: 
       <button class='h-12 m-2 p-2 bg-indigo-500 hover:bg-indigo-700 shadow-md text-white text-md font-medium rounded-lg transform transition-transform duration-300 hover:scale-105' onClick={login}>Login with Spotify</button>}
    </div>
  );
}

export default LoginSpotify;
