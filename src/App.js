import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import Start from './components/Start'
import List from './components/List'
import Name from './components/Name'
import BirthYear from './components/BirthYear';
import Gender from './components/Gender';
import Favorites from './components/Favorites'
import Add from './components/Add'

function App() {
	const [favorites, setFavorites] = useState([])
	const [items, setItems] = useState([])

	const START = 'start', LIST = 'list', NAME = 'name', BIRTHYEAR = 'birthyear', GENDER = 'gender', FAVORITES = 'favorites', ADD = 'add';
	const [currentComp, setCurrentComp] = useState(START);

	
	const addFavorite = item => {
		setFavorites([...favorites, item])
	}
	//array = [...array, newElement];

	let content = null;
    switch (currentComp) {
        case START:
            content = ( <Start nextComp={() => setCurrentComp(LIST)}/> )
            break;
        case LIST:
            content = ( <List toNameComp={() => setCurrentComp(NAME)} toBirthComp={() => setCurrentComp(BIRTHYEAR)} toGenderComp={() => setCurrentComp(GENDER)} items={items} setItems={setItems} addFavorite={addFavorite} /> )
			break;
		case NAME:
			content = ( <Name toNameComp={() => setCurrentComp(NAME)} toBirthComp={() => setCurrentComp(BIRTHYEAR)} toGenderComp={() => setCurrentComp(GENDER)} items={items}/> )
			break;
		case BIRTHYEAR:
			content = ( <BirthYear toNameComp={() => setCurrentComp(NAME)} toBirthComp={() => setCurrentComp(BIRTHYEAR)} toGenderComp={() => setCurrentComp(GENDER)} items={items}/> )
			break;
		case GENDER:
			content = ( <Gender toNameComp={() => setCurrentComp(NAME)} toBirthComp={() => setCurrentComp(BIRTHYEAR)} toGenderComp={() => setCurrentComp(GENDER)} items={items}/> )
			break;
		case FAVORITES:
			content = ( <Favorites favorites={favorites} setFavorites={setFavorites}/> )
			break;
		case ADD:
			content = ( <Add addFavorite={addFavorite}/> )
			break;
		default:
			content = ( <List/> )
	}
	


	return (
	<div className="App">
		<Header toListComp={() => setCurrentComp(LIST)} toAddComp={() =>setCurrentComp(ADD)} toFavoritesComp={() => setCurrentComp(FAVORITES)}/>
		{content}
	</div>
	);
	}

export default App;
