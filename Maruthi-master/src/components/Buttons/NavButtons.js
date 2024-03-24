import React from 'react'
import { Link } from 'react-router-dom'
const handleLogout=()=>{
   localStorage.removeItem('token')
}
const NewTransactionButton= ()=> {
  return (
   <>
    <Link to='/Newtransaction'>
      <button className='Button'>
         <img src={require('../../Resources/plus_white.png')} alt='Plus White' className='icon '/>
            NewTransaction
      </button>
      </Link>
      <button className='Logout-btn' onClick={handleLogout} >LogOut</button>
   </>
  )
}
const SearchTransactionButton=()=>{
   return(
      <>
      <Link to='/Dashboard'>
         <button className='Search_Button'>
            <img src={require('../../Resources/search.png')} alt='Plus White' className='icon '/>
            searchTransaction
         </button>
      </Link>
         <button className='Logout-btn' onClick={handleLogout}>LogOut</button>
      </>
    
   )
}
 export {NewTransactionButton,SearchTransactionButton}