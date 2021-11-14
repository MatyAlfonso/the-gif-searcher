import React, { useState } from 'react';

import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

import weCanFoundLogo from '../styles/images/we-can-found.png';
import goToTop from '../styles/images/go-to-top.png';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories); //Hook

    /*const handleAdd = () => {
        //setCategories(categories => [...categories, 'Spiderman']);
        setCategories([...categories, 'Spiderman']);
    }*/

    const handleClick = () => {
        window.scrollTo(0, 0,);
    }

    return (
        <div id="top" className="gif-expert-app__main">
            <img className="gif-expert-app__we-can-found-logo" src={weCanFoundLogo} alt="We can found the gif you were looking for - logo" />
            <AddCategory setCategories={setCategories} />

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

            <img
                onClick={() => handleClick()}
                className="gif-expert-app__back-to-top-btn"
                src={goToTop}
                alt="Button to return to the top of the page"
            />


        </div>
    )
}
