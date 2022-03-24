// import SearchBar from "../Components/SearchBar.css";
// import SearchIcon from "
import DataFetching from "../posts/DataFetching";
import React, { useState } from "react";

export default function Header({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
  }); 

  if (searchWord === "") {
    setFilteredData = ([]);
  } else {
    setFilteredData(newFilter);
  }
};

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} data={DataFetching}/>
        <div item="searchIcon">
          Search Icon
          {/* <SearchIcon /> */}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
