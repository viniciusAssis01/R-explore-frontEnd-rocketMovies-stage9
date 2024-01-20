import styled from "styled-components";
//caso ñ tenha instalado a biblioteca, abra o terminal e rode o comando: npm install --save styled-components
//se no TS, necessario tipar essa lib(biblioteca) com comando no terminal: npm i -D @types/styled-components

export const Container = styled.button`
	width: 100%;
	background-color: ${({ theme }) => theme.COLORS.PINK};
	color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

	height: 56px;
	border: 0;
	padding: 0 16px;
	/* margin-top: 16px; */
	border-radius: 10px;
	font-weight: 500;

	&:disabled {
		opacity: 0.5;
		cursor: auto;
	}
`;
