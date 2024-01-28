import { FaArrowLeft } from "react-icons/fa6";
import { StyledArrowBack } from "./style";
import { useNavigate } from "react-router-dom";

export function ArrowBack() {
	const navigate = useNavigate();
	function handleBack() {
		navigate(-1);
	}

	return (
		<StyledArrowBack onClick={handleBack}>
			<FaArrowLeft />
			Voltar
		</StyledArrowBack>
	);
}
