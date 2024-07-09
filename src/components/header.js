import React from 'react';
import LoginSpotify from '../utils/LoginSpotify';

function Header() {
    return (
    <>
    <header class='flex flex-row justify-between bg-gradient-to-r from-blue-500 via-indigo-600 to-pink-600 text-center'>
        <h2 class=' text-white font-sans text-3xl p-2 pb-3 font-semibold tracking-wider'>Jamming</h2>
        <LoginSpotify />
    </header>
    </>
    );
}

export default Header;