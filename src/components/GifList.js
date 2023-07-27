import React from 'react';

function GifList({ data }) {
    return (
        <ul>
            {data.map((gif, index) => (
                <li key={index}>
                    <img src={gif.url} alt="gif" />
                </li>
            ))}
        </ul>
    );
}

export default GifList;
