import React from 'react';
import Navbar from '../hoc/Navbar';

export function SearchBox(props) {
  return (
    <div>
      <input placeholder="Type here..." id="search" autoComplete="off" type="search" required onChange={(e) => props.handleSearch(e.target.value)} />
    </div>
  );
}

export default Navbar(SearchBox);
