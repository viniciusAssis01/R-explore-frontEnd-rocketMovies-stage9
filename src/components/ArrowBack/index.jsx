import { FaArrowLeft } from "react-icons/fa6";
import { StyledArrowBack } from "./style";

export function ArrowBack({ to }) {
	return (
		<StyledArrowBack to={to}>
			<FaArrowLeft />
			Voltar
		</StyledArrowBack>
	);
}
