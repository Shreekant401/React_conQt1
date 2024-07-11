import React, { useState } from 'react';
import './FilterComponent.css'; // Import CSS for styling

const FilterComponent = ({ filterOptions }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="filter-component">
            <button onClick={toggleDropdown} className="filter-button">
                Filters
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdown-header">
                        <span>Refine by</span>
                        <span className="clear-button">Clear</span>
                    </div>
                    <ul>
                        {filterOptions.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FilterComponent;
