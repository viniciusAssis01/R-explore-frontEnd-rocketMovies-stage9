import { StyledContainerNew, Form } from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { ArrowBack } from "../../components/ArrowBack";

export function New() {
	return (
		<StyledContainerNew>
			<Header />
			<main>
				<ArrowBack to="/" />
				<Form>
					<h1>Novo Filme</h1>
					<div className="titleAndNotes">
						<Input placeholder="Título" />
						<Input placeholder="Sua nota (de 0 a 5)" />
					</div>
					<Textarea placeholder="Observações" />

					<Section title="Marcadores">
						<div className="tags">
							<NoteItem value="Terror" />

							<NoteItem isNew placeholder="Nova Tag" />
						</div>
					</Section>

					<div className="ButtonContainer">
						<Button title="Excluir filme" />
						<Button title="Salvar alterações" />
					</div>
				</Form>
			</main>
		</StyledContainerNew>
	);
}
