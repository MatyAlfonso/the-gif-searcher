import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data : images, loading } = useFetchGifs(category);
    

    return (
        <>
            <h3 className="gif-grid__center animate__animated animate__zoomIn">{`Results for "${category}"`}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="gif-grid__card-grid">

                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
}
