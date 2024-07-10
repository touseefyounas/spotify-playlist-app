import React, { useState, useEffect } from 'react';

function Header({spotify, token, setToken, user, setUser}) {
    
    const [loggedIn, setLoggedIn] = useState(false);
    
    const handleLogin = () => {
        const tokenFromUrl = spotify.login();
        console.log('Token From URL: ', tokenFromUrl)
        if (tokenFromUrl){
            setToken(tokenFromUrl)
        }
    }

    useEffect(()=> {
        if (token){
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    },[token]);

    return (
    <>
    <header class='flex flex-row justify-between bg-gradient-to-r from-blue-500 via-indigo-600 to-pink-600 text-center'>
        <h2 class=' text-white font-sans text-3xl p-2 pb-3 font-semibold tracking-wider'>Jamming</h2>
        <div>
       {loggedIn ? 
       <section class='h-12 m-2 p-2 bg-indigo-500 hover:bg-indigo-700 shadow-md text-white text-md font-medium rounded-lg'>Logged In</section>: 
       <button class='h-12 m-2 p-2 bg-indigo-500 hover:bg-indigo-700 shadow-md text-white text-md font-medium rounded-lg' onClick={handleLogin}>Login with Spotify</button>}
        </div>
    </header>
    </>
    );
}

export default Header;