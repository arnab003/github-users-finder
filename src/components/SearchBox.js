import React from 'react'

export function SearchBox(props) {
  return (
    <div>
      <input placeholder="Type user name..." id="search" type="search" required onChange={(e) => props.handleSearch(e.target.value)} />
    </div>
  );
}

export default SearchBox
