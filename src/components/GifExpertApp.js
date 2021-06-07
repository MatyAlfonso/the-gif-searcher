import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Spiderman']); //Hook

    /*const handleAdd = () => {
        //setCategories(categories => [...categories, 'Spiderman']);
        setCategories([...categories, 'Spiderman']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;