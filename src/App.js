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
	const [newCharacter, setCharacter]=useState({})
	const [items, setItems] = useState([])

	const START = 'start', LIST = 'list', NAME = 'name', BIRTHYEAR = 'birthyear', GENDER = 'gender', FAVORITES = 'favorites', ADD = 'add';
	const [currentComp, setCurrentComp] = useState(START);

	let content = null;
    switch (currentComp) {
        case START:
            content = ( <Start nextComp={() => setCurrentComp(LIST)}/> )
            break;
        case LIST:
            content = ( <List toNameComp={() => setCurrentComp(NAME)} toBirthComp={() => setCurrentComp(BIRTHYEAR)} toGenderComp={() => setCurrentComp(GENDER)} setCharacter={setCharacter} items={items} setItems={setItems}/> )
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
			content = ( <Favorites newCharacter={newCharacter}/> )
			break;
		case ADD:
			content = ( <Add setCharacter={setCharacter}/> )
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
