import React from "react";

function SearchBox({ onSearch }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search-robot"
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchBox;
