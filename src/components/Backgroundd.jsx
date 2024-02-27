import React, { useState } from 'react';

const Backgroundd = () => {
    const [color, setColor] = useState('olive');

    const handleColorChange = (newColor) => {
        setColor(newColor);
    };

    const colors = [
        { name: 'Red', value: 'red' },
        { name: 'Green', value: 'green' },
        { name: 'Pink', value: 'pink' },
        { name: 'Lavender', value: 'lavender' },
        { name: 'Orange', value: 'orange' },
        { name: 'Purple', value: 'purple' },
        { name: 'Indigo', value: 'indigo' },
    ];

    return (
        <div className='w-full h-screen' style={{ backgroundColor: color }}>
            <div className='fixed flex justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                    {colors.map((c) => (
                        <button
                            key={c.value}
                            className='outline-none px-4 rounded-full text-white shadow-lg'
                            style={{ backgroundColor: c.value }}
                            onClick={() => handleColorChange(c.value)}
                        >
                            {c.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Backgroundd;
