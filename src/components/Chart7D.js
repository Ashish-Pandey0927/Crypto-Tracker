import React from 'react';

const Chart7D = React.memo(({ symbol }) => {
    const formattedSymbol = symbol.toLowerCase();
  
    return (
      <picture>
        <source srcSet={`/crypto-logos/${formattedSymbol}-chart.webp`} type="image/webp" />
        <source srcSet={`/crypto-logos/${formattedSymbol}-chart.png`} type="image/png" />
        <img
          style={{ width: '100px'}}
          src={`/crypto-logos/${formattedSymbol}-chart.svg`}
          alt={`${symbol} 7d chart`}
          loading="lazy"
          onError={(e) => e.target.src = '/crypto-logos/default-chart.png'} // fallback if none work
        />
      </picture>
    );
});
  
export default Chart7D;