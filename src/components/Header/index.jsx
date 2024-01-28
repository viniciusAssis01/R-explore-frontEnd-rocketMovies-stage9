import { Container, Profile } from "./style";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar.svg";

export function Header({ children }) {
	const { signOut, user } = useAuth();
	const navigate = useNavigate();

	const avatarUrl = user.avatar
		? `${api.defaults.baseURL}/files/${user.avatar}`
		: avatarPlaceholder;

	function handleSignOut() {
		signOut();
		navigate("/");
	}

	function handleProfile() {
		navigate("/profile");
	}

	return (
		<Container>
			<h1>RocketMovies</h1>

			{children}

			<Profile>
				<div>
					<strong>{user.name}</strong>
					<button onClick={handleSignOut}>
						<span>sair</span>
					</button>
				</div>
				<button onClick={handleProfile}>
					<img src={avatarUrl} alt={`Foto do usuario ${user.name}`} />
				</button>
			</Profile>
		</Container>
	);
}
