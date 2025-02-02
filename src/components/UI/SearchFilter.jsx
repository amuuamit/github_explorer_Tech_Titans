import React from 'react';
import './SearchFilter.css'
import { CiSearch } from "react-icons/ci";

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-filter grid-two-cols">
      
      <input
        type="text"
        placeholder="Search repositories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
  );
};

export default SearchFilter;