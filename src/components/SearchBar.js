import React, { useState} from 'react';
import Lists
 from './Lists';
function SearchBar({spotify, token, selectedTracks, setSelectedTracks}) {
    
    const [currentSearch, setCurrentSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchTerm = ({target}) => {
        setCurrentSearch(target.value);
    }
    const handleSearch = async () => {
        if (currentSearch) {
        const results = await spotify.search(currentSearch, token);
        setSearchResults(results);
        }
    }

    return (
        <>
        <section class='flex justify-center items-center flex-col h-96 bg-gradient-to-r from-blue-500 via-indigo-600 to-pink-600'>
        <input value={currentSearch} onChange = {searchTerm} type="text" class="h-12 w-1/2 md:w-1/3 rounded-lg mb-4 p-2" />
        <button onClick={handleSearch} class="h-12 w-1/5 md:w-1/6 bg-indigo-500 hover:bg-indigo-700 shadow-md text-white text-2xl font-medium rounded-lg transform transition-transform duration-300 hover:scale-105">Search</button>
        </section>
        <Lists tracks={searchResults} spotify={spotify} token={token} selectedTracks={selectedTracks} setSelectedTracks={setSelectedTracks}/>
        </>
    );
}

export default SearchBar;