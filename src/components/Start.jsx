import React from 'react';
import Text from '../images/Text.png'

const Start = ({nextComp}) => {
	return(
		<div className="Start">
			<div className="container-start">
				<img src={Text} alt="Text" className="item"/>
				<div className="flex-start">
					<button onClick={nextComp}>Continue</button>
				</div>
			</div>	
		</div>
	)
}
export default Start;