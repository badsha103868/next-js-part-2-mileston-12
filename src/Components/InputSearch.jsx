"use client"



import {  useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const InputSearch = () => {
  
  const router = useRouter()
  const params = useSearchParams()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const form = e.target;
    const value = form.search.value;
    // console.log(value)
  // new search parameter make kora
    const newParams = new URLSearchParams(params.toString());
    // new params ar modde amra j search korsi sai value set
    newParams.set("search", value);

    // tarpor abar oi new params router a push kore dita hoba
    router.push(`?${newParams.toString()}`)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder='Enter Food Name' className='border  px-1 py-3 rounded w-xl md:w-2xl mr-2' />
        <button className='px-4 py-2 bg-yellow-400 rounded cursor-pointer hover:bg-yellow-600'>Search</button>
      </form>
    </div>
  );
};

export default InputSearch;