import React, { useEffect, useState } from 'react'
// Imported Components
import Searcheitems from './Searcheitems'
import TransactionTable from './Table/Transactiontable'

export default function SearchTransaction() {
   const [searcheddata,setSearcheddata] =useState('')
   useEffect(()=>{
      fetch("http://localhost:3000/Transactions",{
         method: 'GET',
         Headers: "application/json",
         mode:'cors'
      })
      .then((res)=>res.json())
      .then((data)=>setSearcheddata(data))
      .catch((error)=> console.error(error))
   },[])
  return (
   <div className='search_box'>
      <div className='search_Wrapper mt-4'>
            <form>
               <div className="mb-3 position-relative">
               <label htmlFor="InputTransaction" className="form-label fw-bold Input_labels trasparent_lable ">Search Transaction</label>
                  <img src={require('../../Resources/search.png')} alt='Search_Transaction' className='label_logo'/>
                  <input 
                  type="text" 
                  name="Transaction" 
                  className="form-control shadow-none"
                  placeholder='Search by vehicle number'
                  id="InputTransaction" 
                   />
               </div>
               <div className="mb-3 position-relative">
               <label htmlFor="SearchInputDate" className="form-label fw-bold Input_labels  trasparent_lable">From Date</label>
                  <img src={require('../../Resources/calendar.png')} alt='Search_Transaction' className='label_logo'/>
                  <input 
                  type="date" 
                  name="Date" 
                  className="form-control shadow-none"
                  placeholder='From Date'
                  autoComplete="off"
                  id="SearchInputDate" 
                  onChange={(e) => console.log(e.target.value)}
                   />
               </div>
               <div className="mb-3 position-relative">
               <label htmlFor="SearchInputDate" className="form-label fw-bold Input_labels trasparent_lable">To Date</label>
                  <img src={require('../../Resources/calendar.png')} alt='Search_Transaction' className='label_logo'/>
                  <input 
                  type="date" 
                  name="Date" 
                  className="form-control shadow-none"
                  placeholder='ToDate'
                  autoComplete="off"
                  id="SearchInputDate" 
                  onChange={(e) => console.log(e.target.value)}
                   />
               </div>
               <button type="submit" className="Button search_btn">Search</button>
            </form>
      </div>
      <Searcheitems  data={searcheddata}/>
      <TransactionTable data={searcheddata}/>
   </div>
  )
}
