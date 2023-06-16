import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Catalog() {

  const [currencyList, setCurrencyList] = useState([]);
  const [sortButtonText, setSortButtonText] = useState('Sort By Price');

  const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20';

  const toogleButton = () => {
    if (sortButtonText === 'Sort By Name'){
        setSortButtonText('Sort By Price');
    }else {
        setSortButtonText('Sort By Name');
    }

    if(sortButtonText === 'Sort By Name'){
        let sorted = [...currencyList].sort((a, b) => { return a.name.localeCompare(b.name)});
        setCurrencyList(sorted);
    } else {
        let sorted = currencyList.sort((a,b) => b.current_price - a.current_price);
        setCurrencyList(sorted);
    }
  
  };

  useEffect(() => {
   const getCurrency = async () => {
        try {
            const {data} = await axios.get(`${API_URL}`);
            console.log(data);
            setCurrencyList(data);
        } catch (error) {
            console.error("Error", error);
        }
    } 

    if(currencyList.length === 0 ) {
        getCurrency();
    }

  }, []);


  return (
    <>
        <div className= "Allcurrency">
            <div className="container">
                <div className="buttons">
                    <button name="buttonToggle" className="btn-sort toggle-button" onClick={toogleButton} >{sortButtonText}</button>
                </div> 
                <div className="curreny-list grid">
                    { currencyList.map(currency =>
                        <Link key={currency.id} className="curency-container" to={`/cryptomarket/detail/${currency.id}`}>
                            <div>                            
                                <img src={currency.image}></img>
                                <span>{currency.name}</span>
                                <span>Current Price: {currency.current_price}</span>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    </>    
  );
}

export default Catalog;



