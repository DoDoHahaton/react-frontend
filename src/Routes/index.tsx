import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout/Layout";

import HomePage from "../pages/HomePage";

import { Footer } from "../components/UI/Footer";
import AuthPage from "../pages/AuthPage";


export function RoutesComponent() {
	return (
		<Router>
			<Routes>
				<Route path='/auth' element={ <AuthPage /> } />

				<Route path='/' element={ <Layout /> }>
					<Route index path='/homepage' element={ <HomePage /> } />
					<Route path='/account' element={ <Footer /> } />
				</Route>
			</Routes>
		</Router>
	)
}