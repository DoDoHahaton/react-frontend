import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import RegisterPage from "../pages/RegisterPage";


export function RoutesComponent() {
	return (
		<Router>
			<Routes>
				<Route index path='/auth' element={ <AuthPage /> } />
				<Route path='/register' element={ <RegisterPage /> } />

				<Route path='/homepage' element={ <HomePage /> } />
			</Routes>
		</Router>
	)
}