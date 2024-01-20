import styled from "styled-components";

export const StyledContainer = styled.div`
	width: 100%;
	height: 100vh;

	main {
		width: 100%;
		padding-inline: 123px;

		section {
			margin-top: 30px;
			margin-bottom: 10px;
			height: 460px;
			overflow-y: auto;
			padding-right: 8px;
			display: flex;
			flex-direction: column;
			gap: 20px;

			&::-webkit-scrollbar {
				//o trilho da barra
				width: 8px;
				background-color: transparent;
			}
			&::-webkit-scrollbar-thumb {
				//a barra em si
				background-color: ${({ theme }) => theme.COLORS.PINK};
				border-radius: 8px;
			}
		}
	}
`;

export const Description = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	a {
		padding: 13px 32px;
		background-color: ${({ theme }) => theme.COLORS.PINK};
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		border-radius: 8px;
		color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
	}
`;
