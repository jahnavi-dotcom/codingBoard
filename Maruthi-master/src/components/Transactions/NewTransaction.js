import React ,{useState}from 'react'
import VehiclePart from './VehiclePart'
import {ToastContainer, toast} from 'react-toastify'
import Modal from '../../Model';

export default function NewTransaction() {
   const [isOpen, setIsOpen] = useState(false)
   const [customer, setCustomer] = useState({
      VehicleNumber:"",
      DateOfAdmit:"",
      CustomerName:"",
      DateOfDelivery:"",
      PhoneNumber:"",
      DatalistExample:"",
    });
    const [vichelparts,setVichelparts] = useState()
    const handleOnChange = event => {
      const { name, value } = event.target;
      setCustomer({ ...customer, [name]: value });
    };
    const handleDataFromChild=(data)=>{
      setVichelparts([...data])
    }
    const habelsubmit=(e)=>{
      e.preventDefault()
         if(validateobj(customer)===true){
            const allKeysHaveValue = vichelparts.every(obj => {
               return Object.values(obj).every(value => value !== null && value !== '');
             })
            if(allKeysHaveValue===true){
                  fetch('http://localhost:3000/Transactions',{
                     method:"POST",
                     headers: {
                     'Content-Type': 'application/json',
                     },
                     body: JSON.stringify({
                        VehicleNumber: customer.VehicleNumber,
                        CustomerName:customer.CustomerName ,
                        PhoneNumber: customer.PhoneNumber,
                        TransactionNumber: String(Math.random()).substring(2,12),
                        DateofAdmit: customer.DateofAdmit,
                        Dateofdelivery: customer.DateOfDelivery,
                        ModeofPayment: customer.DatalistExample,
                        Parts:vichelparts,
                     })
                  })
                  .then(response=>response.json())
                  .then(response=>console.log(response),setIsOpen(true))
                  .catch(err=>console.log(err))
            }else{
                  toast.warning("enter valid part details")
            }
         }else{
            toast.warning("enter valid customer details")
      }
   } 
   const  validateobj=(obj)=> {
      for (let key in obj) {
        if (!obj[key]) {
          return false;
      }
      return true;
      }
   }
  return (
   <div className='search_box' >
          <ToastContainer
         position="top-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="light"
         />
      <form onSubmit={habelsubmit}>
      <div className='newSearch_Wrapper mt-4'>
         <h1 className='my-3'>NewTransactions</h1>
         <div className='form'>
            <div className="mb-3 bg-white">
               <label htmlFor="InputVehicleNumber" className="form-label fw-bold Input_labels ">VehicleNumber</label>
               <input 
                  type="text" 
                  className="form-control" 
                  id="InputVehicleNumber"
                  placeholder='Enter vehicle number' 
                  name='VehicleNumber'
                  onChange={event=>handleOnChange(event)}
               />
            </div>
            <div className="mb-3 bg-white position-relative">
               <label htmlFor="InputVehicleNumber" className="form-label Input_labels fw-bold">Date of Admit</label>
                  <img src={require('../../Resources/calendar.png')} alt='Search_Transaction' className='calender_logo'/>
                  <input 
                     type="date" 
                     className="form-control"
                     id="InputVehicleNumber"
                     name='DateOfAdmit'
                     onChange={event=>handleOnChange(event)}
                  />
            </div>
            <div className="mb-3 bg-white">
               <label htmlFor="InputVehicleNumber" className="form-label fw-bold Input_labels ">Customer Name</label>
               <input 
                  type="text" 
                  className="form-control"
                  id="InputVehicleNumber" 
                  placeholder='Enter Customer name' 
                  name='CustomerName'
                  onChange={event=>handleOnChange(event)}
               />
            </div>
            <div className="mb-3 bg-white position-relative">
               <label htmlFor="InputVehicleNumber" className="form-label fw-bold Input_labels ">Date of Delivery</label>
               <img src={require('../../Resources/calendar.png')} alt='Search_Transaction' className='calender_logo'/>
               <input 
                  type="date" 
                  className="form-control" 
                  id="InputVehicleNumber" 
                  name='DateOfDelivery'
                  onChange={event=>handleOnChange(event)}
               />
            </div>
            <div className="mb-3 bg-white">
               <label htmlFor="InputVehicleNumber" className="form-label fw-bold Input_labels ">Phone Number</label>
               <input
                  type="text" 
                  className="form-control"
                  id="InputVehicleNumber" 
                  placeholder='Enter Phone Number' 
                  name='PhoneNumber'
                  onChange={event=>handleOnChange(event)}
                />
            </div>
            <div className="mb-3 bg-white">
               <label htmlFor="InputVehicleNumber" className="form-label fw-bold Input_labels">Datalist example</label>
               <select className="form-select" name='DatalistExample' aria-label="Default select example" id='InputVehicleNumber' onChange={event=>handleOnChange(event)}>
                  <option>Select</option>
                  <option value="UPI / RuPay">UPI / RuPay</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
               </select>
            </div>
         </div>
         <VehiclePart ondata={handleDataFromChild}/>
      </div>
      </form>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} > 
      </Modal>
    </div>
  )
}
