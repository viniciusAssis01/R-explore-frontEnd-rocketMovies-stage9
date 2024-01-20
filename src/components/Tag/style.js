import styled from "styled-components";

export const StyledTag = styled.span`
	font-family: "Roboto", sans-serif;
	font-size: 12px;
	padding: 5px 16px;
	border-radius: 8px;
	margin-right: 8px;
	color: ${({ theme }) => theme.COLORS.GRAY_050};
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;
