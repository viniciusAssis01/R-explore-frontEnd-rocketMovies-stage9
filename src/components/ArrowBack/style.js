import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledArrowBack = styled(Link)`
	background-color: ${({ theme }) => theme.COLORS.ORANGE};
	color: ${({ theme }) => theme.COLORS.PINK};
	border: none;

	display: flex;
	align-items: center;
	justify-content: start;
	gap: 8px;

	font-size: 16px;
	font-weight: 400;
`;
