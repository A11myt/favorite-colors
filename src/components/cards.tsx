import React, { useEffect } from 'react';
import Card, { Card2 } from './card';

export default function Cards() {

    const [item, setItem] = React.useState('');


    return (
        <div className="w-full grid grid-cols-8">
            {item}

            <button className={`w-32 h-32 bg-white text-black`} onClick={() => setItem('Card2')}>Change</button>
            <button className={`w-32 h-32 bg-white text-black`} onClick={() => setItem('Card1')}>Change</button>
            <button className={`w-32 h-32 bg-white text-black`} onClick={() => setItem('Card6')}>Change</button>
        </div>
    );
}

const cardValues = [
    {
        description: 'This is a red color',
        color: '#ff0000'
    },
    {
        title: 'Green',
        description: 'This is a green color',
        color: '#00ff00'
    },
    {
        title: 'Blue',
        description: 'This is a blue color',
        color: '#0000ff'
    }
]