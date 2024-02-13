import * as React from 'react';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MD5 from './pages/Algorithms/MD5';
import AES from './pages/Algorithms/AES';
import Layout from './pages/Layout/Layout';
import JWT from './pages/Algorithms/JWT';

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="md5" element={<MD5 />} />
            <Route path="aes" element={<AES />} />
            <Route path="jwt" element={<JWT />} />
          </Route>
          <Route path="*" element={<Navigate to="md5" />}></Route>
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;
