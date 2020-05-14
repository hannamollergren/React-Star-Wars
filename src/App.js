import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import Start from './components/Start'
import List from './components/List'
import Favorites from './components/Favorites'
import Add from './components/Add'

function App() {
	const [favorites, setFavorites] = useState([])
	const [items, setItems] = useState([])
	const [isLoaded, setIsLoaded] = useState(false);

	const addFavorite = item => {
		setFavorites([...favorites, item])
	}

	const START = 'start', LIST = 'list', FAVORITES = 'favorites', ADD = 'add';
	const [currentComp, setCurrentComp] = useState(START);

	let content = null;
    switch (currentComp) {
        case START:
            content = ( <Start nextComp={() => setCurrentComp(LIST)}/> )
            break;
        case LIST:
            content = ( <List items={items} setItems={setItems} isLoaded={isLoaded} addFavorite={addFavorite} /> )
			break;
		case FAVORITES:
			content = ( <Favorites favorites={favorites} setFavorites={setFavorites}/> )
			break;
		case ADD:
			content = ( <Add addFavorite={addFavorite}/> )
			break;
		default:
			content = ( <Start/> )
	}

	useEffect(() => {
		let list = [];
		function getData(url){
			fetch(url)
			.then((res) => res.json())
			.then(async(response) =>{
	
				let next = response.next;
				if(next !== null){
					await getData(next)
					response.results.forEach(item => list.push(item))
				}	
				else{
					setItems(list)
					setIsLoaded(true)
				}	
			})	
		}
		getData('https://swapi.dev/api/people/')
	}, []) // UseEffects slut
	


	return (
	<div className="App">
		<Header toListComp={() => setCurrentComp(LIST)} toAddComp={() =>setCurrentComp(ADD)} toFavoritesComp={() => setCurrentComp(FAVORITES)}/>
		{content}
	</div>
	);
	}

export default App;
