import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import AppBar from './components/AppBar';
import { Routes, Route, Link } from 'react-router-dom';
import Card from './components/Card';
import PureDnd from './components/PureDnd';
import Home from './components/Home';

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
