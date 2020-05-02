import React from 'react';

const List = (props) => {
	return(
		<div className="App">
			<div className="tabs">
				<button onClick={props.toNameComp} className="tab">Name</button> / 
				<button  onClick={props.toBirthComp}  className="tab">Birth year</button> /
				<button  onClick={props.toHomelandComp} className="tab">Homeland</button> /
				<button  onClick={props.toFavoritesComp} className="tab">Favorites</button>
			</div>
			<input type="text" placeholder="Search"/>
			<div className="container-list">
				<p>hejhej</p>
				<p>hejeje</p>
				<p>djdjdjdj</p>
			</div>
			
		</div>
	)
}
export default List;