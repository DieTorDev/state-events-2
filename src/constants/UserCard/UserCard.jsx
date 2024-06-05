import { USERS } from '../users';

const UserCards = ({ user }) => {
	return (
		<article key={USERS[user].userId}>
			<img src={USERS[user].profileImage} alt='' />
			<h1>Name: {USERS[user].name}</h1>
			<p>Username: {USERS[user].username}</p>
			<p>Email: {USERS[user].email}</p>
		</article>
	);
};

export default UserCards;
