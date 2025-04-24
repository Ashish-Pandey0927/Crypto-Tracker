// src/utils/mockSocket.js

export function simulateUpdates(assets, dispatch, updateAsset) {
    setInterval(() => {
      const updatedAssets = assets.map(asset => {
        const getRandomChange = () => (Math.random() - 0.5) * 2;
  
        return {
          ...asset,
          price: asset.price + getRandomChange(),
          percent_change_1h: asset.percent_change_1h + getRandomChange(),
          percent_change_24h: asset.percent_change_24h + getRandomChange(),
          percent_change_7d: asset.percent_change_7d + getRandomChange(),
          volume_24h: asset.volume_24h + getRandomChange() * 1000,
        };
      });
  
      updatedAssets.forEach(asset => {
        dispatch(updateAsset(asset));
      });
    }, 5000);
  }
  