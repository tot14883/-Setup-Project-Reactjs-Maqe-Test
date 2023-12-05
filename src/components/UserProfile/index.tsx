import '../../styles/user.css';

type UserProfileProps = {
	name: string,
	role: string,
	place: string,
	avatarUrl: string,
	customClassName?: string,
}

const UserProfile = ({name, role, place, avatarUrl, customClassName}: UserProfileProps) => {
	return (
		<div className={`user-profile ${customClassName}`}>
			<img src={avatarUrl} width='250' height="250"/>
			<div className="user-info">
				<h3>{name}</h3>
				<label>{role}</label>
				<label>{place}</label>
			</div>
		</div>
	)
}

export default UserProfile;
