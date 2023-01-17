import React, { useState } from "react";

const Search = () => {
  const [sraechTerm, setSearchTerm] = useState("");

  const onHandleClick = () => {
    console.log("Click");
  };

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input onChange={onInputChange} value={setSearchTerm} />
      <button onClick={onHandleClick}>Submit</button>
    </div>
  );
};

export default Search;
