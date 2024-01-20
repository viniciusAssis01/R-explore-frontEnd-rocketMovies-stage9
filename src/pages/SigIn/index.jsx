import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Form, StyledDiv, Background } from "./style";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

export function SigIn() {
	return (
		<StyledDiv>
			<Form>
				<h1>RocketMovies</h1>
				<p>Aplicação para acompanhar tudo que assistir.</p>

				<h2>Faça seu login</h2>

				<Input placeholder="E-mail" type="text" icon={FiMail} />

				<Input placeholder="Senha" type="password" icon={FiLock} />

				<Button title="Entrar" />

				<Link to="/register">Criar conta</Link>
			</Form>

			<Background />
		</StyledDiv>
	);
}
