import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Description, StyledContainer } from "./style";
import { Note } from "../../components/Note";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {
	const [search, setSearch] = useState("");
	const [notes, setNotes] = useState([]);
	const navigate = useNavigate();

	function handleDetails(id) {
		navigate(`/details/${id}`);
	}

	useEffect(() => {
		async function fetchNotes() {
			const response = await api.get(`/movies?title=${search}`);
			setNotes(response.data);
		}
		fetchNotes();
	}, [search]);

	return (
		<StyledContainer>
			<Header>
				<Input
					placeholder="Pesquise pelo título do filme"
					icon={FiSearch}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</Header>

			<main>
				<Description>
					<h1>Meus filmes</h1>
					<Link to="/new">
						<FiPlus />
						Adicionar filme
					</Link>
				</Description>

				<section>
					{notes.map((note) => (
						<Note
							key={String(note.id)}
							data={note}
							onClick={() => handleDetails(note.id)}
						/>
					))}
				</section>
			</main>
		</StyledContainer>
	);
}
