import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout/Layout";


export function RoutesComp() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={ <Layout /> }>
					<Route index path='/homepage' element={} />
				</Route>
			</Routes>
		</Router>
	)
}