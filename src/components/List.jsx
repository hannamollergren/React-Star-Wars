import React, {useState, useEffect} from 'react';

const List = (props) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const handleFavorite = item => {
		let addToFavorites = {name: item.name, birth_year: item.birth_year, gender: item.gender}
		props.addFavorite(addToFavorites)
	}

	useEffect(() => {
		let list = [];
		function getData(url){
			fetch(url)
			.then((res) => res.json())
			.then(async(response) =>{
				/* console.log(list) */
				
				/* let count = 2; */
				let next = response.next;
				if(next !== null){
					await getData(next) //! kan inte hämta med next propertyn, måste vara url + count 
					
					/* await getData('https://swapi.dev/api/people/?page=' + count) */

					/* console.log(next); */

				
					response.results.forEach(item => list.push(item))
				}	
				else{
					props.setItems(list)
					setIsLoaded(true)
				}	
			})	
		}
		getData('https://swapi.dev/api/people/')
	}, []) // UseEffects slut

		let status = null;
		if (!isLoaded) {
			status = <div className="loading"><h2>Loading...</h2></div>;
		} 
		else {
			status = 
				props.items.map((item, id) =>
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
			<div className="tabs">
				<button onClick={props.toNameComp} className="tab" disabled={!isLoaded}>Name</button> / 
				<button  onClick={props.toBirthComp}  className="tab" disabled={!isLoaded}>Birth year</button> /
				<button  onClick={props.toGenderComp} className="tab" disabled={!isLoaded}>Gender</button> 
			</div>
			{status}
		</div>
	)
}
export default List;
