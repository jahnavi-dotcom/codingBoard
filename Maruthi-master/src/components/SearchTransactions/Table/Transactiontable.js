import React from 'react';
import CollapsibleRow from './Collapisablerow';

const TransactionTable = ({data}) => {
  const tableData = [data];
  return (
    <table className="table transaction_table table-condensed ">
      <thead>
        <tr>
         <th></th>
          <th>Transaction Number</th>
          <th>Date of admit</th>
          <th>Date of delivery</th>
          <th>Mode of payment</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody className='table-group-divider'>
        {
          tableData.map((data,index)=>{
              return <CollapsibleRow key={index} data={data}/>
          })
        }
      </tbody>
    </table>
  );
};

export default TransactionTable;
