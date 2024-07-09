import React from 'react';

function Track({tracks}) {
    return (
    <div class='w-full'>
        <h1 class='text-white text-4xl font-semibold p-2 text-center'>Results</h1>
        {tracks.map(track=> {
        return (
            <div class="p-2 bg-slate-50 hover:bg-slate-200 rounded-lg shadow-md m-2 mx-4">
                <p class="text-xl font-bold">{track.songName}</p>
                <p class="text-sm">{track.artist}</p>
                <p class="text-sm italic">{track.album}</p>
            </div>
        );
        }
        )}
    </div>
    );
}

export default Track;