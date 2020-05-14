import React, {useState} from 'react';

const List = (props) => {
	const [filter, setFilter] = useState('')

	function handleSearch(event){
	
		setFilter(event.target.value)
	}

	const handleFavorite = item => {
		console.log('handleFavorite');
		
		let addToFavorites = {name: item.name, birth_year: item.birth_year, gender: item.gender}
		props.addFavorite(addToFavorites)
		console.log('addTofavorites', addToFavorites);
	}

	let status = null;
	if (!props.isLoaded) {
		status = <div className="loading"><h2>Loading...</h2></div>;
	} 
	else {
		status = 
			props.items
			.filter(item =>{
				return item.name.toLowerCase().includes(filter.toLowerCase()) ||  item.birth_year.toLowerCase().includes(filter.toLowerCase()) ||  item.gender.toLowerCase().includes(filter.toLowerCase()) 
			})
			.map((item, id) =>
				<div key={id} className="container-list">
					<p>{item.name}</p>
					<p>{item.birth_year}</p>
					<p>{item.gender}</p>
					<button className="btn-favorite" onClick={() => handleFavorite(item)}>Add to favorites</button>
				</div>
			)
	}

	return(
		<div className="App">
			<input type="text" placeholder="Search" onKeyUp={handleSearch}/> 
			<div>{status}</div>
		</div>
	)
}
export default List;
