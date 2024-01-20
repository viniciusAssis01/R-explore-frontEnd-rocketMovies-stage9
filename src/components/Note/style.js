import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNote = styled(Link)`
	width: 100%;
	background-color: ${({ theme }) => theme.COLORS.PINKLIGHT};

	border: none;
	border-radius: 16px;

	padding: 32px;
	/* margin-bottom: 20px; */

	display: flex;
	flex-direction: column;
	gap: 15px;

	p {
		text-align: justify;
		font-family: "Roboto", sans-serif;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		color: ${({ theme }) => theme.COLORS.GRAY_400};
	}

	> footer {
		width: 100%;
		display: flex;
	}
`;

export const ContainerTitle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	> h1 {
		font-size: 24px;
		font-weight: 700;
		color: ${({ theme }) => theme.COLORS.WHITE};
		text-align: left;
	} 
	/* .stars {
		align-self: flex-start;
		display: flex;
		gap: 6px;

		svg {
			font-size: 16px;
			color: ${({ theme }) => theme.COLORS.PINK};
		} */
	}
`;
