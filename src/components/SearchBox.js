import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
  return (
    //Always a good idea to wrap everything in a div in case you want to add things to your components
    <div className='pa2'>
      <input
        className= 'pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
  </div>
  );
}

export default SearchBox;
