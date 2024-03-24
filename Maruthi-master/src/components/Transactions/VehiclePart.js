import React, { useState } from 'react'

export default function VehiclePart({ondata}) {

   const [vparts,setVparts]=useState(
      [{
         PartName:"",
         Quantity:"",
         Rate:"",
         Amount:"",
      }])
   const [total,setTotal]=useState()
   const handleClick=(e)=>{
      e.preventDefault()
      setVparts([...vparts,{PartName:"",Quantity:"",Rate:"",Amount:"",}])
   }
   const handleChange=(e,i)=>{
      const name=e.target.name
      const value=e.target.value
      const onchangevalues=[...vparts]
      onchangevalues[i][name]=value
      const sum = onchangevalues.reduce((accumulator, currentValue) => parseInt(accumulator ) + parseInt(currentValue.Amount),0)
      setTotal(sum);
      setVparts(onchangevalues)
   }
   const handleDelete=(index)=>{
      const deletevalue=[...vparts]
      deletevalue.splice(index,1)
      const sum = deletevalue.reduce((accumulator, currentValue) => parseInt(accumulator ) + parseInt(currentValue.Amount),0)
      setTotal(sum);
      setVparts(deletevalue)
      
   }
   const handelSubmit=()=>{
      const data=vparts
      ondata(data)
   }
  return (
   <div className='mt-5'>
      <div className='NewSearch_header my-1'>
         <h1>VehicleParts</h1>
         <button className='Button add_btn' onClick={handleClick}>
                  <img src={require('../../Resources/plus_blue.png')} alt='Plus_White' className='icon white_icon'/>
                  add
         </button>
      </div>
         <div className='VehiclePart_form'>
            <table className="table">
               <thead>
                  <tr className='table_head'>
                     <th>PartName</th>
                     <th>Quantity</th>
                     <th>Rate</th>
                     <th>Amount</th>
                     <th></th>
                  </tr>
                </thead>
               <tbody>
                 {
                    vparts.map(
                       (val,index)=>
                             <tr key={index}>
                             <td>
                                <div className="mb-3">
                                   <input
                                      type="text" 
                                      className="form-control"
                                      id="InputVehiclePartName"
                                      placeholder='Enter Part Name' 
                                      name='PartName'
                                      value={val.PartName}
                                      onChange={(e)=>handleChange(e,index)}
                                   />
                                </div>
                             </td>
                             <td>
                                <div className="mb-3">
                                   <input 
                                      type="text"  
                                      className="form-control" 
                                      id="InputVehicleDetails"  
                                      placeholder='00' 
                                      name='Quantity'
                                      value={val.Quantity}
                                      onChange={(e)=>handleChange(e,index)}
                                   />
                                </div>
                             </td>
                             <td>
                                <div className="mb-3">
                                   <input
                                      type="text" 
                                      className="form-control"
                                      id="InputVehicleDetails" 
                                      placeholder='00' 
                                      name='Rate'
                                      value={val.Rate}
                                      onChange={(e)=>handleChange(e,index)}
                                   />
                                </div>
                             </td>
                             <td>
                                <div className="mb-3">
                                   <input
                                      type='text' 
                                      className="form-control"
                                      id="InputVehicleDetails" 
                                      placeholder='&#x20B9;00.00'
                                      style={{"textAlign":"right"}}
                                      name='Amount'
                                      value={val.Amount}
                                      onChange={(e)=>handleChange(e,index)}
                                   />
                                </div>
                             </td>
                             <td>
                                <div className="mb-3 mt-1">
                                   <div className='Delete_btn' onClick={()=>handleDelete(index)}>
                                      <img src={require('../../Resources/delete.png')} alt="delete" className='Delete_icon' />
                                      <span>delete</span>
                                   </div>            
                                </div>
                             </td>
                          </tr>
                    )
                 }
               </tbody>
            </table>
         </div>
         <div className='total_Calculations'>
            <div className='Calculations_wrapper'>
                  <div className="mb-3 d-flex flex-row">
                     <label htmlFor="inputGst" className="col-form-label mx-2 PartsLabels">gst
                     </label>
                     <input type="text" className="form-control" id="inputGst" />
                  </div>
                  <div className="mb-3 d-flex flex-row">
                     <label htmlFor="inputGst" className="col-form-label mx-2 PartsLabels">total
                     </label>
                     <input type="text" disabled className="form-control"  value={total} id="inputGst" />
                  </div>
                  <div className="mb-3">
                        <button type="reset"className='Button add_btn'>Reset</button>
                        <button type="submit"className='Button submit' onClick={handelSubmit}>Submit</button>
                  </div>
             </div>
         </div>
   </div>
  )
}
