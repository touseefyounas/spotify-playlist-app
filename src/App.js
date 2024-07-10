import React, {useState} from 'react';
import Header from './components/header';
import SearchBar from './components/SearchBar';
import Spotify from './utils/spotify';

function App() {
  const [token, setToken] = useState(null);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [user, setUser] = useState([]);

  

  return (
    <>
      <Header spotify={Spotify} token={token} setToken={setToken} user={user} setUser={setUser}/>
      <SearchBar spotify={Spotify} token={token} selectedTracks={selectedTracks} setSelectedTracks={setSelectedTracks}/>
      
    </>
  );
}

export default App;
