import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.header`
	width: 100%;
	height: 116px;
	padding: 24px 123px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 64px;

	border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

	h1 {
		color: ${({ theme }) => theme.COLORS.PINK};
		font-size: 24px;
		font-weight: 700;
	}
`;

export const Profile = styled(Link)`
	width: 198px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;

	> div {
		display: flex;
		flex-direction: column;
		line-height: 24px;
		align-self: flex-end;

		strong {
			font-size: 14px;
			color: ${({ theme }) => theme.COLORS.WHITE};
		}
		span {
			font-size: 14px;
			color: ${({ theme }) => theme.COLORS.GRAY_100};
			align-self: flex-end;
		}
	}

	> img {
		width: 56px;
		height: 56px;
		border-radius: 50%;
	}
`;
