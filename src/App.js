import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAssets, updateAsset } from './features/crypto/cryptoSlice';
import { simulateUpdates } from './utils/mockSocket';
import CryptoTable from './features/crypto/CryptoTable';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css'; // 👈 Import your regular CSS

function App() {
  const dispatch = useDispatch();
  const assets = useSelector(selectAssets);

  useEffect(() => {
    simulateUpdates(assets, dispatch, updateAsset);
  }, [assets, dispatch]);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <CryptoTable />
      </main>
      <Footer />
    </div>
  );
}

export default App;
