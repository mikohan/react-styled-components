import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import AppBar from './components/AppBar';
import { Routes, Route} from 'react-router-dom';
import PureDnd from './components/PureDnd';
import Home from './components/Home';
import Beautefull from './components/Beautefull';

const box = {
  height: '700px',
  padding: '0 20px',
};

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
        <Route path="beautefull" element={<Beautefull />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}
