import { Stars } from "../Stars";
import { Tag } from "../Tag";
import { ContainerTitle, StyledNote } from "./style";

export function Note({ data, ...rest }) {
	return (
		<StyledNote {...rest}>
			<ContainerTitle>
				<h1>{data.title}</h1>
				<Stars rating={data.rating} />
			</ContainerTitle>

			<p>{`${data.description.substring(0, 254)}...`}</p>
			{/* limitar a quantidade de caracteres */}

			{data.tags && (
				<footer>
					{data.tags.map((tag) => (
						<Tag key={tag.id} title={tag.name} />
					))}
				</footer>
			)}
		</StyledNote>
	);
}
