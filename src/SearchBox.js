import React from 'react';

function SearchBox({ searchfield, onSearchChange }) {
	return (
		<div className="pa2">
		<input 
			className="pa3 ba b--green bg-lightest-blue"
			type="search" 
			placeholder="Search Robots" 
			onChange={e => onSearchChange(e)}
			value={searchfield}
		/>
		</div>
	)
}

export default SearchBox;