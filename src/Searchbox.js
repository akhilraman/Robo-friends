import React from "react";

import './SearchBox.css';

const Searchbox=({searchChange})=>{


    return(
        <>
        <input
         type='search' 
         placeholder="type here"
         onChange={searchChange}></input>
        </>
    )
}

export default Searchbox;
