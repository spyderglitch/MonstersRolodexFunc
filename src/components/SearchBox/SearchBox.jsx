import React from "react";

import './search-box-styles.css';

const SearchBox = ({ handleSearchInput }) => {
    return(
        <div>
            <input type='search' className='search-box' onChange={handleSearchInput} placeholder='search momsters' />
        </div>
    )
};

export default SearchBox;