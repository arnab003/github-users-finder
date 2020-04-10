import React from 'react'

export default function Sort(props) {
  const { users } = props;
  const content = (users.length && users.length) > 1 ? (
    <div className="dropdown-cont">
      <label>Sort Users by Score:</label>
      <select className="browser-default" onChange={(e) => props.handleSelect(e.target.value)}>
        <option defaultValue value="-1">High to Low</option>
        <option value="1">Low to High</option>
      </select>
    </div>
  ) : null;
  return (
    <div className="container">
      { content }
    </div>
  );
}
