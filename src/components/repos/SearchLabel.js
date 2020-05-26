import React, { useState, useContext } from "react";

import GithubContext from "../../context/github/githubContext";


export const SearchLabel = () => {
  const githubContext = useContext(GithubContext);
  const [label, setLabel] = useState("");

  const onChange = (e) => setLabel(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    githubContext.searchLabels(label);
  }
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Enter a label'
          value={label}
          onChange={onChange}
        />

        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
};

export default SearchLabel;
