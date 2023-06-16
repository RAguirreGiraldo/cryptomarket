import React from 'react'
import { useForm } from "react-hook-form";

function New() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <div>New Currency</div>
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label for="currency">Currency Name</label>
        <input name="currency" {...register("currency", { required : true})} />

        <label for="market_cap">Market Cap</label>
        <input name="market_cap" {...register("market_cap", { required : true})} />

        <label for="price">Price</label>
        <input name="price" {...register("price", { required : true})} />

        {/* errors will return when field validation fails  */}
        {errors.currencyRequired && <span>Currency name is required</span>}
        {errors.market_capRequired && <span>Market Cap is required</span>}
        {errors.priceRequired && <span>Price is required</span>}
        
        <input type="submit" value="Save" />
      </form>
    </>
    
    
  )
}

export default New
