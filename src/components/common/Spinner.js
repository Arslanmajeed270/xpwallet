import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
	return (
		<div style={{ position: 'absolute', top: '40%', left: '50%', zIndex: '999' }}>
			<img
				src={spinner}
				style={{ width: '70px', margin: 'auto', display: 'block' }}
				alt='Loading...'
			/>
		</div>
	);
};

export default Spinner;
