import styled from "styled-components";
import backgroundImg from "../../assets/cine.png";

export const StyledDiv = styled.div`
	height: 100vh;
	display: flex;
	align-items: stretch;
`;

export const Form = styled.form`
	padding: 0 136px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	text-align: center;

	> h1 {
		align-self: flex-start;
		font-size: 48px;
		color: ${({ theme }) => theme.COLORS.PINK};
	}

	> h2 {
		align-self: flex-start;
		font-size: 24px;
		margin: 48px 0;
	}

	> p {
		align-self: flex-start;
		font-size: 14px;
		color: ${({ theme }) => theme.COLORS.GRAY_100};
	}

	> a {
		margin-top: 42px;
		color: ${({ theme }) => theme.COLORS.PINK};
	}
`;

export const Background = styled.div`
	flex: 1;
	background: url(${backgroundImg}) no-repeat center center;
	background-size: cover;
`;
