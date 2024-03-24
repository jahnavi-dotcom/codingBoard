import React from 'react'

export default function Searcheitems({data}) {
   console.log(data)
  return (
    <div className='searchItems'>
      <div className='searchItems_Wrapper'>
         <div className='customer_details'>
            <table className="table table-borderless  p-4">
               <thead>
                  <tr>
                     <th>VehicleNumber</th>
                     <th>CustomerName</th>
                     <th>CustomerNumber</th>
                  </tr>
               </thead>
               <tbody>
                  <tr key={data.id}>
                     <td>{data.vehiclenumber}</td>
                     <td>{data.customerName}</td>
                     <td>{data.phonenumber}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
    </div>
  )
}
