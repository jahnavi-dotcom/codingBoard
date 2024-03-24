import React, {useState } from 'react';

const CollapsibleRow = ({data} ) => {
  const [isOpen, setIsOpen] = useState(false);
  const [partid,setPartid]=useState('')
  const [partname,setPartname]=useState()
  const [partquantity,setPartquantity]=useState()
  const [partRate,setPartRate]=useState()
  const [partamount,setPartAmount]=useState()
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = (Id,Parts) => {
    setPartid(Id)
    setPartname(Parts.name)
    setPartquantity(Parts.quantity)
    setPartRate(Parts.rate)
    setPartAmount(Parts.amount)
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/Parts/${partid}`,
    {
      method:"PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {id: partid,
          PartName: partname,
          Quantity: partquantity,
          Rate: partRate,
          Amount: partamount}
      )
    }
    )
    .then(res => res.json(res))
    .then(res => console.log(res))
    .catch(err =>console.log(err))
    setPartid(null)
  };
  const handledetel = (id) => {
    fetch(`http://localhost:3000/Parts/${id}`,
    {
      method:"DELETE",
    }
    )
    .then(res => res.json(res))
    .then(res => console.log(res))
    .catch(err =>console.log(err))
    setPartid(null)
  };

  return (
    <>
      <tr onClick={handleToggle} className="accordion-toggle mt-5 table_rows" >
        <td>
          {isOpen ?<img src={require('../../../Resources/down arrow_small.png')} alt="arrow" className='UpArrow' /> : <img src={require('../../../Resources/down arrow_small.png')} alt="arrow" className='DownArrow' /> } 
        </td>
        <td>{data.transactionnumber}</td>
        <td>{data.dateofadmit}</td>
        <td>{data.dateofdelivery}</td>
        <td>{data.paymentmode}</td>
        <td>{data.Amount}</td>
        <td className='text-primary'>Print</td>
      </tr>
      {isOpen && (
        <tr>
          <td colSpan="6">
            <div className="accordion-body">
               <table className="table table-borderless">
                  <thead>
                     <tr>
                      <th></th>
                       <th>PartName</th>
                       <th>Quantity</th>
                       <th>Rate</th>
                       <th>Amount</th>
                     </tr>
                  </thead>
                  <tbody>
                     {data.transactiondetails.map((Parts,index)=>(
                              <tr  className="accordion-toggle" key={index}>
                                <td></td>
                                 <td>
                                  {partid === Parts.id ? (
                                       <input
                                       type="text" 
                                       className="form-control"
                                       id="InputVehiclePartName" 
                                       name='Rate'
                                       value={partname}
                                       onChange={(e)=>setPartname(e.target.value)}
                                       />
                                     ) : (
                                      Parts.name
                                   )}
                                  </td>
                                 <td>
                                 {partid === Parts.id ? (
                                       <input
                                       type="text" 
                                       className="form-control"
                                       id="InputVehicleDetails" 
                                       name='Rate'
                                       value={partquantity}
                                       onChange={(e)=>setPartquantity(e.target.value)}
                                       />
                                     ) : (
                                      Parts.quantity
                                   )}
                                  </td>
                                 <td>
                                  {partid === Parts.id? (
                                        <input
                                        type="text" 
                                        className="form-control"
                                        id="InputVehicleDetails" 
                                        name='Rate'
                                        value={partRate}
                                        onChange={(e)=>setPartRate(e.target.value)}
                                        />
                                      ) : (
                                      Parts.rate
                                    )}
                                  </td>
                                 <td>
                                  {partid === Parts.id ? (
                                         <input
                                         type="text" 
                                         className="form-control"
                                         id="InputVehicleDetails" 
                                         name='Rate'
                                         value={partamount}
                                         onChange={(e)=>setPartAmount(e.target.value)}
                                         />
                                       ) : (
                                       Parts.amount
                                     )}
                                 </td>
                                 <td>
                                    <button className='E_D_button' onClick={()=>handleEdit(Parts.id,Parts)}>
                                    <img src={require('../../../Resources/edit.png')} alt='Plus White' className='E_D_icon'/>
                                    Edit
                                    </button>
                                    <button className='E_D_button' onClick={()=>handledetel(Parts.id)}>
                                       <img src={require('../../../Resources/delete.png')} alt='Plus White' className='E_D_icon'/>
                                       Delete
                                    </button>
                                  {partid === Parts.id ?(
                                    <button className='Button Print_btn p-1 px-0 mx-1' onClick={(e)=>handleUpdate(e)}>
                                    Update
                                    </button>
                                  ):(
                                    <></>
                                  )}
                                 </td>
                              </tr>
                     ))}
                  </tbody>
               </table>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default CollapsibleRow;
