import styled from "styled-components";

export const StyledSection = styled.section`
	/* margin: 28px 0; */
	/* display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between; */
	/* border: 1px solid red; */

	> h2 {
		font-size: 20px;
		margin-bottom: 24px;
		font-weight: 400;
		color: ${({ theme }) => theme.COLORS.GRAY_400};
	}
`;
