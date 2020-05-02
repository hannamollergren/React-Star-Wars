import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import Start from './components/Start'
import List from './components/List'
import Name from './components/Name'
import BirthYear from './components/BirthYear';
import Homeland from './components/Homeland';
import Favorites from './components/Favorites'
import Add from './components/Add'

function App() {
	const START = 'start', LIST = 'list', NAME = 'name', BIRTHYEAR = 'birthyear', HOMELAND = 'homeland', FAVORITES = 'favorites', ADD = 'add';
	const [currentComp, setCurrentComp] = useState(START);

	let content = null;
    switch (currentComp) {
        case START:
            content = ( <Start nextComp={() => setCurrentComp(LIST)}/> )
            break;
        case LIST:
            content = ( <List toNameComp={() => setCurrentComp(NAME)} toBirthComp={() => setCurrentComp(BIRTHYEAR)} toHomelandComp={() => setCurrentComp(HOMELAND)} toFavoritesComp={() => setCurrentComp(FAVORITES)} /> )
			break;
		case NAME:
			content = ( <Name/> )
			break;
		case BIRTHYEAR:
			content = ( <BirthYear/> )
			break;
		case HOMELAND:
			content = ( <Homeland/> )
			break;
		case FAVORITES:
			content = ( <Favorites/> )
			break;
		case ADD:
			content = ( <Add/> )
			break;
		default:
			content = ( <List/> )
    }


	return (
	<div className="App">
		<Header toListComp={() => setCurrentComp(LIST)} toAddComp={() =>setCurrentComp(ADD)} />
		{content}
	</div>
	);
	}

export default App;
