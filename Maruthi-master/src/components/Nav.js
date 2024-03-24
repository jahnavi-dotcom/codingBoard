import React from 'react';
import { useLocation } from 'react-router-dom';
import {SearchTransactionButton,NewTransactionButton} from './Buttons/NavButtons'

export default function Nav() {
   const Path=useLocation()
   const currentPath = Path.pathname
  return (
      <div className='Nav_section my-3'>
         <div className='Maruthi_Logo p-2  d-flex justify-items-center'>
               <img src={require('../Resources/marutisuzuki.png')} alt='Logo' />
            <h1>Sri Maruthi auto care</h1>
         </div>
         <div className='right_content'>
            {
               currentPath==='/login' ? <></> :
                currentPath==="/Dashboard" ? 
                <NewTransactionButton /> : 
                <SearchTransactionButton />
            }
         </div>
      </div>
  )
}
