import styled from "styled-components";

export const StyledContainerNew = styled.div`
	width: 100%;
	height: 100vh;

	main {
		overflow-y: auto;
		padding: 40px 123px;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 40px;
	margin-top: 24px;
	padding-right: 20px;
	h1 {
		font-size: 36px;
		font-weight: 500;
		color: ${({ theme }) => theme.COLORS.GRAY_100};
	}

	.titleAndNotes {
		display: flex;
		flex-direction: row;
		gap: 40px;
	}

	.tags {
		display: flex;
		padding: 16px;
		border-radius: 8px;
		flex-wrap: wrap;
		gap: 24px;
		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
	}

	.ButtonContainer {
		display: flex;
		gap: 40px;

		button:nth-child(1) {
			background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
			color: ${({ theme }) => theme.COLORS.PINK};
		}
	}
`;
