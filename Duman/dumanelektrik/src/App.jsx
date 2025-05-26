import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ElektrikUygulama from './pages/ElektrikUygulama';
import MuhendislikHizmetleri from './pages/MuhendislikHizmetleri';
import MimarlikHizmetleri from './pages/MimarlikHizmetleri';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/elektrik-uygulama" element={<ElektrikUygulama />} />
      <Route path="/muhendislik-hizmetleri" element={<MuhendislikHizmetleri />} />
      <Route path="/mimarlik-hizmetleri" element={<MimarlikHizmetleri />} />
    </Routes>
  );
}

export default App;
