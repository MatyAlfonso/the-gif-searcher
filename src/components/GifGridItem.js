import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ( {title, url} ) => {
    //console.log(id, title, url);
    return (
        <div className="gif-grid-item__card animate__animated animate__fadeIn">
            <img className="gif-grid-item__card-img" src={url} alt={title} />
            <p className="gif-grid-item__card-text">{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title : PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
