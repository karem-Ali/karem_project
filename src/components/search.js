import React from 'react'

  const Search=({search})=> {
        return (
            <div>
               <input type="search"  onChange={search}placeholder="Search robots" className="pa3 ba b--green bg-lightest-blue"/> 
            </div>
        )
    
}
export default Search
