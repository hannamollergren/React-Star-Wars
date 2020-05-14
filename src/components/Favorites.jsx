import React from 'react';


const Favorites = (props) => {
	let favoritesList = [];
	// FavoriteList
	console.log('favoritesList1', favoritesList)
	// favorites
	console.log('faveorite från list', props.favorites);
	
	
	favoritesList = favoritesList.concat(props.favorites)
	console.log('favoritesList2', favoritesList);
	
		
	let content = null;
	if(favoritesList.length === 0){
		console.log("empty list")
		content = <h2 className="no-favorites">No favorites</h2>
	}
	else{
		console.log('do something')
		content = 
			favoritesList.map((item, id) => 
				<div key={id} className="container-list">
					<p>{item.name}</p>
					<p>{item.birth_year}</p>
					<p>{item.gender}</p>
					<h3 className="own-favorite">{item.own_favorite}</h3>
				</div>
		)
	}

	return(
		<div className="App">
			<div>{content}</div>	
		</div>
	)
	

}
export default Favorites;