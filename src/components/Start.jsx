import React from 'react';
import Image1 from '../images/Image1.svg'

const Start = ({nextComp}) => {
	return(
		<div className="Start">
			<div className="container-start">
				<img src={Image1} alt="Text" className="item"/>
				<div className="flex-start">
					<button onClick={nextComp}>Continue</button>
				</div>
			</div>	
		</div>
	)
}
export default Start;