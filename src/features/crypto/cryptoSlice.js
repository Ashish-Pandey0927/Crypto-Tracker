// src/features/crypto/cryptoSlice.js
import { createSlice } from '@reduxjs/toolkit';
import sampleData from './sampleCryptoData.json';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleData
  },
  reducers: {
    updateAsset: (state, action) => {
      const index = state.assets.findIndex(a => a.id === action.payload.id);
      if (index !== -1) {
        state.assets[index] = action.payload;
      }
    }
  }
});

export const { updateAsset } = cryptoSlice.actions;
export const selectAssets = (state) => state.crypto.assets;
export default cryptoSlice.reducer;
