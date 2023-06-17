import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

function New() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [currencyName, setCurrencyName] = useState("");
  const [marketCap, setMarkeCap] = useState("");

  const handleCurrencyNameChange = (e) => setCurrencyName(e.target.value);
  const handleMarketCapChange = (e) => setMarkeCap(e.target.value);
  
  const onSubmit = data => { console.log(data); }

  return (
    <>
      <Helmet>
            <title>CryptoMarket - New Currency</title>
      </Helmet>
      <section>
        <div className="form-inputs">
          <h2> New Currency </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label> Currency Name </label>
                <input 
                  type="text" id="currencyName" value={currencyName} 
                  onInput={handleCurrencyNameChange}{...register('Currency Name', {required: 'Currency name is required', 
                  maxLength: { value: 15, message: 'Please introduce less than 15 characters' } })}   
                />                    
                <div className="error-msm">
                  {errors['Currency Name'] && <p>{errors['Currency Name'].message}</p>}
                </div>
            </div>
            <div>
                <label htmlFor= "marketCap"> Market Cap </label>
                <input
                  type="text" id="marketCap" value={marketCap}
                  onInput={handleMarketCapChange}{...register('Market Cap', { required: 'Market Cap is required',
                  pattern: { value: /^[0-9]+$/, message: 'Please introduce a valid number' } })}
                />           
                <div className="error-msm">
                  {errors['Market Cap'] && <p>{errors['Market Cap'].message}</p>}
                </div>
            </div>
            <input type="submit" value="Save" />
          </form>
        </div>
      </section>
    </>   
  );
}

export default New;
