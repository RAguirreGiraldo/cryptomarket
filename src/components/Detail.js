import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Detail() {

  const { currencyId } = useParams();
  const [currency, setCurrency] = useState({});
  const [isLoading, setIsLoading] = useState({});

  const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

  useEffect(() => {
     const getCurrency = async () => {
         try {            
             const {data} = await axios.get(`${API_URL}&ids=${currencyId}`); 
             console.log(data);
             setCurrency(data[0]);              
         } 
         catch (error) {
             console.log(error);
         }
     } 
 
     if (currencyId) 
     {
        getCurrency();
        setIsLoading(false);
     }
   }, [currencyId]);

  return (
    <div>
       { !isLoading && 
        <div className="currency-data">
          <div className="currency-image">
            <img src={currency.image}></img>
          </div>  
            <div className ="currency-name">
              <h2>{currency.name}</h2>
            </div>
            <div className='currency-stats'>
              <div>
                <span>$ {currency.market_cap}</span>
                <h3>Market Cap</h3>
              </div>
              <div>
                <span>$ {currency.current_price}</span>
                <h3>Current Price</h3>
              </div>
              <div>
                <span>{currency.symbol}</span>
                <h3>Symbol</h3>
              </div>
            </div>                   
        </div>
      }
      { isLoading && <h2>Loading User data...</h2>}
      <Link className='button btn-back' to="/cryptomarket">
         Return to Catalog
      </Link>
    </div>
  )
}

export default Detail