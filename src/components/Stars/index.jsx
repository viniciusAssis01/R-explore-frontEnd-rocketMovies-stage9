import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";
import { StyledStars } from "./style";
StyledStars;
export function Stars() {
	return (
		<StyledStars>
			<RiStarSFill />
			<RiStarSFill />
			<RiStarSFill />
			<RiStarSFill />
			<RiStarSLine />
		</StyledStars>
	);
}
