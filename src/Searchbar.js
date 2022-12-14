
import React from 'react';
import './Searchbar.css';

const Searchbar = (props) => {
    return (
        <div className="searchbar">
            <label htmlFor='searchInput'>Search:</label><input id='searchInput' name='searchInput' onChange={props.searchHandler} />
        </div>
    );
};

export default Searchbar;