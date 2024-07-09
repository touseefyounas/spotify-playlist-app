import React from 'react';
import Header from './components/header';
import SearchBar from './components/SearchBar';
import Lists from './components/Lists';
import tracks from './ExampleTracks';

function App() {
  return (
    <>
      <Header/>
      <SearchBar/>
      <Lists tracks={tracks}/>
    </>
  );
}

export default App;
