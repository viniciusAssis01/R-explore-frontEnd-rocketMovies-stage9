import styled from "styled-components";

export const StyledStars = styled.div`
	display: flex;
	gap: 6px;

	svg {
		width: 16px;
		height: 16px;
		/* 		font-size: 16px; */
	}

	svg:nth-child(-n + 4) {
		/* color: ${({ theme }) => theme.COLORS.PINK}; */
		/* stroke: ${({ theme }) => theme.COLORS.PINK}; */
		fill: ${({ theme }) => theme.COLORS.PINK};
	}
`;
