import React from 'react';

function Playlist({tracks}) {
    return (
        <>
        <input type='text' class='w-10/12 h-12 m-3 mt-4 rounded-lg z-10 text-lg p-2 font-medium' placeholder='Playlist Name'/>
        <button class="h-12 w-1/3 bg-indigo-500 hover:bg-indigo-700 shadow-md text-white text-lg font-medium rounded-3xl transform transition-transform duration-300 hover:scale-105">Save to Spotify</button>
        </>
    );
}

export default Playlist;