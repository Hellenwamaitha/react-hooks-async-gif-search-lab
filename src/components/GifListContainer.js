import React, { useState, useEffect } from 'react';
import GifSearch from './GifSearch';
import GifList from './GifList';

function GifListContainer() {

    const [search, setSearch] = useState('');
    const [gifs, setGifs] = useState([]);

    const handleSearch = query => {
        setSearch(query);
    }

    useEffect(() => {
        // If there's no search term, don't fetch
        if (!search) return;

        const API_KEY = 'vhzyWykycVi0E41oO7ZbMvpa32Kz1whn';
        const BASE_URL = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&rating=g`;

        fetch(BASE_URL)
            .then(r => {
                if (r.ok) {
                    return r.json();
                }
                throw new Error("Failed to fetch items.");
            })
            .then(data => {
                // Assuming the GIFs are in data.data (modify accordingly if this is not the case)
                setGifs(data.data);
            })
            .catch(error => console.error("Error fetching items:", error));
    }, [search]); // Dependency array, effect will re-run when `search` changes

    return (
        <div>
            <GifSearch onSearch={handleSearch} />
            <ul>
                {gifs.map(gif => (
                    <li key={gif.id}>
                        <img src={gif.images.fixed_height.url} alt={gif.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GifListContainer;

