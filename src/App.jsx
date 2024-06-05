import { useState } from 'react';
import UserCards from './constants/UserCard/UserCard';
import { GlobalStyles } from './styles/GlobalStyles';
import { USERS } from './constants/users';

const App = () => {
	const [index, setIndex] = useState(0);

	const isDisablePrevious = index === 0;
	const isDisableNext = index === USERS.length - 1;

	return (
		<>
			<GlobalStyles />
			<UserCards user={index} />
			<button disabled={isDisablePrevious} onClick={() => setIndex(index - 1)}>
				Previous
			</button>
			<button disabled={isDisableNext} onClick={() => setIndex(index + 1)}>
				Next
			</button>
		</>
	);
};

export default App;
