import { Container, Profile } from "./style";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";

export function Header() {
	return (
		<Container>
			<h1>RocketMovies</h1>

			{/* {children} */}
			<Input placeholder="Pesquise pelo título do filme" icon={FiSearch} />

			<Profile to="/profile">
				<div>
					<strong>Vinicius</strong>
					<span>sair</span>
				</div>
				<img
					src="https://github.com/ViniciusAssis01.png"
					alt="Foto do usuario"
				/>
			</Profile>
		</Container>
	);
}
