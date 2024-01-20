import styled from "styled-components";

export const StyledStars = styled.div`
	display: flex;
	gap: 6px;

	svg {
		font-size: 16px;
		color: ${({ theme }) => theme.COLORS.PINK};
	}
`;
