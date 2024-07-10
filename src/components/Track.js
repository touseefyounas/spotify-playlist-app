import React, { useEffect } from 'react';

function Track({tracks, spotify, token, selectedTracks, setSelectedTracks}) {

    const handleAdd = (track) => {
        setSelectedTracks(prev => [...prev, track])
    }

    useEffect(()=>{
        console.log('Selected Tracks: ', selectedTracks)
      },[selectedTracks])

    return (
    <div class='w-full'>
        <h1 class='text-white text-4xl font-semibold p-2 text-center'>Results</h1>
        {tracks.map(track=> {
        return (
            <div class="p-2 bg-slate-50 hover:bg-slate-200 rounded-lg shadow-md m-2 mx-4 flex flex-row justify-between">
                <div>
                <p class="text-xl font-bold">{track.name}</p>
                <p class="text-sm">{track.artist}</p>
                <p class="text-sm italic">{track.album}</p>
                </div>
                <button onClick={()=> handleAdd(track)} class='text-2xl text-blue-500 hover:text-blue-700 pr-4 transform transition-transform duration-300 hover:scale-150'>+</button>
            </div>
        );
        }
        )}
    </div>
    );
}

export default Track;