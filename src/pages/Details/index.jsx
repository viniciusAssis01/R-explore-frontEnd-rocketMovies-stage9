import { StyledDetails, Title, User } from "./style";
import { Header } from "../../components/Header";
import { ArrowBack } from "../../components/ArrowBack";
import { Stars } from "../../components/Stars";
import { LuClock3 } from "react-icons/lu";
import { Tag } from "../../components/Tag";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar.svg";

export function Details() {
	const params = useParams();
	const [data, setData] = useState(null);
	const { user } = useAuth();
	const navigate = useNavigate();

	const avatarUrl = user.avatar
		? `${api.defaults.baseURL}/files/${user.avatar}`
		: avatarPlaceholder;

	async function handleRemove() {
		const confirm = window.confirm("Deseja realmente remover a nota?");

		if (confirm) {
			await api.delete(`/movies/${params.id}`);
			navigate(-1);
		}
	}

	useEffect(() => {
		async function fetchNote() {
			const response = await api.get(`movies/${params.id}`);
			setData(response.data);
		}

		fetchNote();
	}, [params.id]);

	return (
		<StyledDetails>
			<Header>
				<Input placeholder="Pesquise pelo título do filme" icon={FiSearch} />
			</Header>
			{data && (
				<main>
					<div className="profile">
						<ArrowBack />
						<Title>
							<div>
								<h1>{data.title}</h1>
								<Stars />
							</div>
							<button onClick={handleRemove}>Excluir Filme</button>
						</Title>
						<User>
							<div className="by">
								<img src={avatarUrl} alt={`Foto do usuário ${user.name}`} />
								<p>{`por ${user.name}`}</p>
							</div>
							<div className="data">
								<LuClock3 />
								<p>{data.created_at}</p>
							</div>
						</User>
					</div>

					<div className="tags">
						{data.tags.map((tag) => (
							<Tag key={tag.id} title={tag.name} />
						))}
					</div>

					<p>{data.description}</p>
				</main>
			)}
		</StyledDetails>
	);
}
