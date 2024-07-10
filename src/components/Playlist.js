import React, { useState } from 'react';

function Playlist({spotify, token, selectedTracks, setSelectedTracks}) {
    const [playlistName, setPlaylistName] = useState('');

    const handleRemove = (track) => {
         setSelectedTracks(prev=> prev.filter(prevTrack=> prevTrack.id !== track.id))
     }
    const handlePlaylistName = ({target}) => {
        setPlaylistName(target.value);
    }
    const addPlaylist = async (list) => {
        if (playlistName !== '' && list.length>0){
            const user = await spotify.userProfile(token);
            console.log(user);
            const userId = user.id;
            console.log('user ID: ', userId); 

            const uri = list.map(track=> track.uri);
            const result = await spotify.savePlaylist(playlistName, uri, token, userId);
            console.log('Save Playlist:', result);

        } else if (playlistName === ''){
            alert('Insert a name for the Playlist')
        } else if (list.length === 0){
            alert('Add songs to the playlist')
        }
    }
    
    return (
        <div class='w-full flex flex-col'>
        <input name='playlist' value={playlistName} onChange={handlePlaylistName} type='text' class='self-center w-10/12 h-12 m-3 mt-4 rounded-lg z-10 text-lg p-2 font-medium' placeholder='Playlist Name'/>
        {selectedTracks.map(track=> {
        return (
            <div class="p-2 bg-slate-50 hover:bg-slate-200 rounded-lg shadow-md m-2 mx-4 flex flex-row justify-between">
                <div>
                <p class="text-xl font-bold">{track.name}</p>
                <p class="text-sm">{track.artist}</p>
                <p class="text-sm italic">{track.album}</p>
                </div>
                <button onClick = {()=> handleRemove(track)}class='text-2xl text-blue-500 hover:text-blue-700 pr-4 transform transition-transform duration-300 hover:scale-150'>-</button>
            </div>
        );
        }
        )}
        <button onClick={()=> addPlaylist(selectedTracks)} class="self-center mt-3 h-12 w-1/3 bg-indigo-500 hover:bg-indigo-700 shadow-md text-white text-lg font-medium rounded-3xl transform transition-transform duration-300 hover:scale-105">Save to Spotify</button>
        </div>
    );
}

export default Playlist;