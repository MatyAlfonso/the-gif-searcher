import React, { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 1) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (
        <form className="add-category__layout" onSubmit={handleSubmit}>
            <input
                placeholder="Search some GIF..."
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="add-category__input"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

