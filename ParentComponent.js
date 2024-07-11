import React from 'react';
import FilterComponent from './FilterComponent';

const ParentComponent = () => {
    const filterOptions = [
        'Date of registration',
        'Vendor score',
        'Rating',
        'Status',
        'Type of business',
        'Location',
        'Assign to'
    ];

    return (
        <div>
            <FilterComponent filterOptions={filterOptions} />
        </div>
    );
};

export default ParentComponent;
