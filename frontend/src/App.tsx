import * as React from 'react';
import { CssBaseline, CssVarsProvider } from '@mui/joy';
import Layout from './pages/Layout/Layout';
import Header from './pages/Layout/Header';
import Navigation from './pages/Layout/Navigation';
import MD5 from './pages/Algorithms/MD5';

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Layout.Root>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.SideNav>
          <Navigation />
        </Layout.SideNav>
        <Layout.Main>
          <MD5 />
        </Layout.Main>
      </Layout.Root>
    </CssVarsProvider>
  );
}

export default App;
