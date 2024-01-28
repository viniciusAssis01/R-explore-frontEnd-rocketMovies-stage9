import styled from "styled-components";
import backgroundImg from "../../assets/cine.png";

export const Container = styled.div`
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

	> div {
		margin-bottom: 8px;
	}
	> button {
		margin-top: 16px;
	}

	> p {
		align-self: flex-start;
		font-size: 14px;
		color: ${({ theme }) => theme.COLORS.GRAY_100};
	}

	> a {
		margin-top: 42px;
		color: ${({ theme }) => theme.COLORS.PINK};
		display: flex;
		gap: 8px;
		align-items: center;
		justify-content: center;
	}
`;

export const Background = styled.div`
	flex: 1;
	background: url(${backgroundImg}) no-repeat center center;
	background-size: cover;
`;
