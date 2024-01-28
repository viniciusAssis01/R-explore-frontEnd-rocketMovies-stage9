import styled from "styled-components";

export const StyledSection = styled.section`
	> h2 {
		font-size: 20px;
		margin-bottom: 24px;
		font-weight: 400;
		color: ${({ theme }) => theme.COLORS.GRAY_400};
	}
`;
