import React from 'react';

function SearchBar() {
    return (
        <>
        <section class='flex justify-center items-center flex-col w-screen h-96 bg-gradient-to-r from-blue-500 via-indigo-600 to-pink-600'>
        <input type="text" class="h-12 w-1/2 md:w-1/3 rounded-lg mb-4" />
        <button class="h-12 w-1/5 md:w-1/6 bg-indigo-500 hover:bg-indigo-700 shadow-md text-white text-2xl font-medium rounded-lg transform transition-transform duration-300 hover:scale-105">Search</button>
        </section>
        </>
    );
}

export default SearchBar;