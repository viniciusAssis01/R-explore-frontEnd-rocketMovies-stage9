import { Routes, Route, Navigate } from "react-router-dom";

import { SigIn } from "../pages/SigIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
	const user = localStorage.getItem("@rocketnotes:user");
	return (
		<Routes>
			<Route path="/" element={<SigIn />} />
			<Route path="/register" element={<SignUp />} />
			{!user && <Route path="*" element={<Navigate to="/" />} />}
		</Routes>
	);
}
