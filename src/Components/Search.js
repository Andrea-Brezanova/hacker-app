import { useState } from "react";


function Search(props) {
    const [input, setInput] = useState('')
    
    return (
        <div className="search">
           <input type="text" placeholder="Search..." onChange={(e) => {
               setInput(e.target.value)
           }} /> 
           <button onClick={() => props.search(input)}>Search</button>
        </div>
    )
}




export default Search;