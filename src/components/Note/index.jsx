import { Stars } from "../Stars";
import { Tag } from "../Tag";
import { ContainerTitle, StyledNote } from "./style";

export function Note({ data, ...rest }) {
	return (
		<StyledNote to="/details" {...rest}>
			<ContainerTitle>
				<h1>{data.title}</h1>
				<Stars />
				{/* <div className="stars">
					<RiStarSFill />
					<RiStarSFill />
					<RiStarSFill />
					<RiStarSFill />
					<RiStarSLine />
				</div> */}
			</ContainerTitle>

			<p>{data.description}</p>

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
