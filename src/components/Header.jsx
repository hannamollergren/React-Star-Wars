import React from 'react';

const Header = (props) => {
	return (
		<header>
			<h2 className="logo">
				Star Wars 
			</h2>
			<nav>
				<button onClick={props.toListComp} className="button-nav">Information list</button>
				<button onClick={props.toAddComp} className="button-nav">Add favorite</button>
				<button onClick={props.toFavoritesComp} className="button-nav"> Favorites</button>
			</nav>
		</header>
	)
}
export default Header;