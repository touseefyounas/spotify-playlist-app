import React from 'react';
import Track from './Track';
import Playlist from './Playlist';

function Lists({tracks, spotify, selectedTracks, setSelectedTracks}) {
    return (
        <>
        <section class='grid grid-cols-12 gap-4 h-lvh bg-gradient-to-r from-blue-500 via-indigo-600 to-pink-600'>
            <section class='flex col-start-2 h-lvh overflow-y-auto col-end-12 md:col-end-8 bg-stone-950 opacity-35 hover:opacity-50 rounded-lg m-2'>
                <Track tracks={tracks} spotify={spotify} selectedTracks={selectedTracks} setSelectedTracks={setSelectedTracks}/>
            </section>
            <section class='col-start-2 col-end-12 h-lvh overflow-y-auto md:col-end-12 md:col-start-8 bg-stone-950 opacity-35 hover:opacity-50 rounded-lg m-2'>
                <Playlist spotify={spotify} selectedTracks={selectedTracks} setSelectedTracks={setSelectedTracks}/>
            </section>
        </section>  
        </>
    );
}

export default Lists;