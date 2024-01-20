import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from "./style";
import { ArrowBack } from "../../components/ArrowBack";

export function Profile() {
	return (
		<Container>
			<header>
				<ArrowBack to="/"></ArrowBack>
			</header>

			<Form>
				<Avatar>
					<img
						src="https://github.com/viniciusAssis01.png"
						alt="Foto do usuário"
					/>
					<label htmlFor="avatar">
						<FiCamera />
						{/* deixar um input do tipo arq */}
						<input id="avatar" type="file" />
					</label>
				</Avatar>
				<div className="containerInputs">
					<Input placeholder="Nome" type="text" icon={FiUser} />

					<Input placeholder="E-mail" type="text" icon={FiMail} />

					<Input placeholder="Senha atual" type="password" icon={FiLock} />

					<Input placeholder="Nova senha" type="password" icon={FiLock} />
				</div>

				<Button title="Salvar" />
			</Form>
		</Container>
	);
}
