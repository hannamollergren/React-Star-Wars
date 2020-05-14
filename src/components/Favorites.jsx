import React from 'react';


const Favorites = (props) => {
	let favoritesList = [];

	favoritesList = favoritesList.concat(props.favorites)
			
	let content = null;
	if(favoritesList.length === 0){
		content = <h2 className="no-favorites">No favorites</h2>
	}
	else{
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