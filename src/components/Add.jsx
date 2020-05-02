import React from 'react';
const Add = () => {
	return(
		<div className="Add">
			<label>Name</label>
			<input className="input-add" type="text" placeholder="Enter the name of the character"/>
			<label>Birth year</label>
			<input className="input-add" type="text" placeholder="The characters birthyear"/>
			<label>Home world</label>
			<input className="input-add" type="text" placeholder="Enter the characters homeland"/>
			<button>Add</button>
			
		</div>
	)
}
export default Add;