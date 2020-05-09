import React, {useState} from 'react';

const Birthyear = (props) => {
	const [filter, setFilter] = useState('')
	
	function handleSearch(event){
		setFilter(event.target.value)
	}

	let status = null;
	status = 
		props.items
		.filter(item =>{
			return item.birth_year.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
		})
		.map((item, id) =>
			<div key={id} className="container-list">
				<p>{item.name}</p>
				<p>{item.birth_year}</p>
				<p>{item.gender}</p>
			</div>
		)
	return(
		<div className="App">
			<div className="tabs">
				<button onClick={props.toNameComp} className="tab">Name</button> / 
				<button  onClick={props.toBirthComp}  className="tab">Birth year</button> /
				<button  onClick={props.toGenderComp} className="tab">Gender</button> 
			</div>
			<input type="text" placeholder="Search" onKeyUp={handleSearch}/>
			{status}

		</div>
	)
}
export default Birthyear;