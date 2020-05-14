import React, {useState} from 'react';

const Add = (props) => {
	const [name, setName] = useState('')
	const [birth_year, setBirthYear] = useState('')
	const [gender, setGender] = useState('')

	const handleAdd = () => {
		props.addFavorite(character)		
	}

	let character = {
		name: name,
		birth_year: birth_year,
		gender: gender,
		own_favorite: 'Own favo'
	}
	
	return(
		<div className="Add">
			<div id="form-group">
				<label>Name</label>
				<input className="input-add" type="text" placeholder="Enter the name of the character" value={name} onChange={e=>setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))} onClick={()=>setName('')}/>
				<label>Birth year</label>
				<input className="input-add" type="text" placeholder="The characters birthyear" value={birth_year} onChange={e=>setBirthYear(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))} onClick={()=>setBirthYear('')}/>
				<label>Gender</label>
				<input className="input-add" type="text" placeholder="Enter the characters gender" value={gender} onChange={e=>setGender(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))} onClick={()=>setGender('')}/>
				<button className="btn-add" onClick={handleAdd}>Add character</button>
			</div>
		</div>
	)
}
export default Add;