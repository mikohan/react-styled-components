import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import AppBar from './components/AppBar';
import { Routes, Route } from 'react-router-dom';
import PureDnd from './components/PureDnd';
import Home from './components/Home';
import Beautiful from './components/Beautiful';

export default function App() {
	return (
		<React.Fragment>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
			/>
			<CssBaseline />
			<AppBar />
			<Routes>
				<Route path="pure" element={<PureDnd />} />
				<Route path="beautiful" element={<Beautiful />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</React.Fragment>
	);
}
