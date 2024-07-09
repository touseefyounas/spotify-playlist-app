import React from 'react';
import Track from './Track';
import Playlist from './Playlist';

function Lists({tracks}) {
    return (
        <>
        <section class='grid grid-cols-12 gap-4 w-screen h-auto bg-gradient-to-r from-blue-500 via-indigo-600 to-pink-600'>
            <section class='flex col-start-2 col-end-12 md:col-end-8 bg-stone-950 opacity-35 hover:opacity-50 rounded-lg m-2'>
                <Track tracks={tracks}/>
            </section>
            <section class='grid justify-items-center col-start-2 col-end-12 md:col-end-12 md:col-start-8 bg-stone-950 opacity-35 hover:opacity-50 rounded-lg m-2'>
                <Playlist tracks={tracks}/>
            </section>
        </section>
        </>
    );
}

export default Lists;