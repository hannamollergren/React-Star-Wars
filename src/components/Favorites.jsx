import React from 'react';

const Favorites = (props) => {
	let favoritesList = [];
	
	// detta ska bara hända om det finns favoriter
	// concat
	console.log('favoritesList', favoritesList)
	console.log('newChar från add', props.newCharacter)
    favoritesList.push(props.newCharacter)
	
		
	let items = null;
	if(favoritesList.length === 0){
		console.log("empty list")
		items = <h2 className="no-favorites">No favorites</h2>
	}
	else{
		console.log('do something')
		items = 
			favoritesList.map((item, id) => 
				<div key={id} className="container-list">
					<p>{item.name.name}</p>
					<p>{item.birth_year.birth_year}</p>
					<p>{item.gender.gender}</p>
				</div>
		)
	}

	return(
		<div className="App">
			<div>{items}</div>	
		</div>
	)
	

}
export default Favorites;