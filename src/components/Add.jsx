import React, {useState} from 'react';
const Add = (props) => {
	const [name, setName] = useState('')
	const [birth_year, setBirthYear] = useState('')
	const [gender, setGender] = useState('')
	/* const [successMessage, setSuccessMessage] = useState(false) */

	let character={
		name:{name},
		birth_year:{birth_year},
		gender:{gender}
	}
	/* let message = null;
	if(!successMessage){
		message = <div><p>Try again</p></div>	
	}
	else{
		message = <div><p>Character added successfully!</p></div>
	} */
	
	return(
		<div className="Add">
			<div id="form-group">
				<label>Name</label>
				<input className="input-add" type="text" placeholder="Enter the name of the character" value={name} onChange={e=>setName(e.target.value)} onClick={()=>setName('')}/>
				<label>Birth year</label>
				<input className="input-add" type="text" placeholder="The characters birthyear" value={birth_year} onChange={e=>setBirthYear(e.target.value)} onClick={()=>setBirthYear('')}/>
				<label>Gender</label>
				<input className="input-add" type="text" placeholder="Enter the characters gender" value={gender} onChange={e=>setGender(e.target.value)} onClick={()=>setGender('')}/>
				<button className="btn-add" onClick={() => props.setCharacter(character)}>Add character</button>
			</div>
		</div>
	)
}
export default Add;