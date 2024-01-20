import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Description, StyledContainer } from "./style";
import { Note } from "../../components/Note";
import { Link } from "react-router-dom";

export function Home() {
	return (
		<StyledContainer>
			<Header />

			<main>
				<Description>
					<h1>Meus filmes</h1>
					<Link to="/new">
						<FiPlus />
						Adicionar filme
					</Link>
				</Description>

				<section>
					<Note
						data={{
							title: "Meu filme",
							description:
								"Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se",
							tags: [
								{ id: "1", name: "Ficção científica" },
								{ id: "2", name: "Drama" },
								{ id: "3", name: "Familía" },
							],
						}}
					/>
				</section>
			</main>
		</StyledContainer>
	);
}
