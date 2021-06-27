import React, { ChangeEvent } from 'react';

type Search = {
	searchfield: string,
	onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

function SearchBox({ searchfield, onSearchChange }: Search) {
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