import { StyledInput } from "./style";

export function Input({ icon: Icon, ...rest }) {
	return (
		<StyledInput>
			{Icon && <Icon size={20} />}
			<input {...rest} />
		</StyledInput>
	);
}
