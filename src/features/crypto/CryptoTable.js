import React from 'react';
import { useSelector } from 'react-redux';
import { selectAssets } from './cryptoSlice';
import Chart7D from '../../components/Chart7D';
import classNames from 'classnames';

import './CryptoTable.css'; // 👈 Import the CSS

const CryptoTable = () => {
  const assets = useSelector(selectAssets);

  return (
    <div className="table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating</th>
            <th>Max</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.symbol}>
              <td>{index + 1}</td>
              <td><img src={`/crypto-logos/${asset.logo}`} alt={asset.symbol} className="logo-img" /></td>
              <td>{asset.name}</td>
              <td>{asset.symbol}</td>
              <td>${asset.price.toLocaleString()}</td>
              <td className={classNames(asset.percent_change_1h >= 0 ? 'text-green' : 'text-red')}>
                {asset.percent_change_1h}%
              </td>
              <td className={classNames(asset.percent_change_24h >= 0 ? 'text-green' : 'text-red')}>
                {asset.percent_change_24h}%
              </td>
              <td className={classNames(asset.percent_change_7d >= 0 ? 'text-green' : 'text-red')}>
                {asset.percent_change_7d}%
              </td>
              <td>${asset.market_cap.toLocaleString()}</td>
              <td>${asset.volume_24h.toLocaleString()}</td>
              <td>{asset.circulating_supply.toLocaleString()}</td>
              <td>{asset.max_supply ? asset.max_supply.toLocaleString() : '∞'}</td>
              <td><Chart7D symbol={asset.symbol} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
