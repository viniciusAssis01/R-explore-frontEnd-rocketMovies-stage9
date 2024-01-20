import styled from "styled-components";

export const StyledDetails = styled.div`
	width: 100%;
	height: 100vh;
	main {
		overflow-y: auto;
		padding: 40px 123px;
		display: flex;
		flex-direction: column;
		gap: 40px;

		.profile {
			display: flex;
			flex-direction: column;
			gap: 24px;
		}

		.tags {
			display: flex;
			align-items: center;

			> span {
				background-color: ${({ theme }) => theme.COLORS.PINKDARK};
			}
		}

		p {
			text-align: justify;
			font-size: 16px;
			font-weight: 400;
		}
	}
`;

export const Title = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 20px;
	h1 {
		font-size: 36px;
		font-weight: 500;
	}
`;

export const User = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;

	.by {
		display: flex;
		align-items: center;
		gap: 8px;

		img {
			width: 16px;
			height: 16px;
			border-radius: 50%;
		}
	}

	.data {
		display: flex;
		align-items: center;
		gap: 8px;

		svg {
			font-size: 16px;
			color: ${({ theme }) => theme.COLORS.PINK};
		}
	}
`;
