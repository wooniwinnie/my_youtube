import React from 'react';

type Props = {};

const SearchBar = (props: Props) => {
    return (
        <form>
            <input
                className=' border border-blue-900'
                type='text'
                placeholder='검색'
            />
        </form>
    );
};

export default SearchBar;
