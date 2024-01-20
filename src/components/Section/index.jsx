import { StyledSection } from "./style";

export function Section({ title, children }) {
	return (
		<StyledSection>
			<h2>{title}</h2>
			{children}
		</StyledSection>
	);
}
