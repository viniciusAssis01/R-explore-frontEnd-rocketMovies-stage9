import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./style";

/* esse componente vai ter 2 visuais possives */

export function NoteItem({ isNew, value, onClick, ...rest }) {
	return (
		<Container isNew={isNew}>
			{/* se ñ for uma nota nova, pode deixar somente como leitura */}
			<input type="text" value={value} readOnly={!isNew} {...rest} />

			<button
				type="button"
				onClick={onClick}
				className={isNew ? "button-add " : "button-delete"}
			>
				{isNew ? <FiPlus /> : <FiX />}
			</button>
		</Container>
	);
}
