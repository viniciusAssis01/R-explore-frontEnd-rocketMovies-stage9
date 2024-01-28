import { StyledContainerNew, Form } from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { ArrowBack } from "../../components/ArrowBack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function New() {
	const [title, setTitle] = useState("");
	const [note, setNote] = useState("");
	const [description, setDescription] = useState("");
	const [tags, setTags] = useState([]);
	const [newTag, setNewTag] = useState("");

	const navigate = useNavigate();

	function handleAddTag() {
		setTags((prevStage) => [...prevStage, newTag]);
		setNewTag("");
	}
	function handleRemoveTag(tagDeleted) {
		setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted));
	}

	async function handleNewMovieNote() {
		if (!title) {
			return alert("Digite o título do filme");
		}
		if (!note) {
			return alert("Digite a nota do filme");
		}
		if (newTag) {
			return alert(
				`Voce deixou a tag "${newTag}" para adicionar, mas não clicou em adicionar.Clique para adicionar ou deixe o campo vazio.`
			);
		}

		await api.post("/movies", { title, rating: note, description, tags });

		alert("Filme cadastrado com sucesso!");
		navigate(-1);
	}

	async function handleRemoveNewMovieNote() {
		setTitle("");
		setNote("");
		setDescription("");
		setTags([]);
		navigate(-1);
	}

	return (
		<StyledContainerNew>
			<Header />
			<main>
				<ArrowBack />
				<Form>
					<h1>Novo Filme</h1>
					<div className="titleAndNotes">
						<Input
							placeholder="Título"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<Input
							placeholder="Sua nota (de 0 a 5)"
							value={note}
							onChange={(e) => setNote(e.target.value)}
						/>
					</div>
					<Textarea
						placeholder="Observações"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></Textarea>

					<Section title="Marcadores">
						<div className="tags">
							{tags.map((tag, index) => (
								<NoteItem
									key={index}
									value={tag}
									onClick={() => handleRemoveTag(tag)}
								/>
							))}
							<NoteItem
								isNew
								placeholder="Nova Tag"
								value={newTag}
								onChange={(e) => setNewTag(e.target.value)}
								onClick={handleAddTag}
							/>
						</div>
					</Section>

					<div className="ButtonContainer">
						<Button title="Excluir filme" onClick={handleRemoveNewMovieNote} />
						<Button title="Salvar alterações" onClick={handleNewMovieNote} />
					</div>
				</Form>
			</main>
		</StyledContainerNew>
	);
}
