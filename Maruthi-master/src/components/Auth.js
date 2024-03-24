import { React,useRef } from "react";
import { Navigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify'
const token=localStorage.getItem('token');
console.log(token);
export default function Login() {
   const usernameRef = useRef(null);//kminchelle
   const passwordRef = useRef(null);//0lelplR
   const checkboxRef = useRef(null);
   const handleSubmit = async (e) => {
      e.preventDefault();
  
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
      const check=checkboxRef.current.checked
  
      if (username.trim() === '' || password.trim() === '') {
        toast.warning('Please fill in all fields');
        return;
      }
  
      const loginData = {
        username: username,
        password: password,
        remember: check
      };
      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           username: loginData.username,
            password:loginData.password
          })
        });
  
        if (response.ok) {
          // Login success
          const data = await response.json();
          console.log('Login success:', data);
          localStorage.setItem("token", data.token);
          <Navigate replace to={'/login'} />
          toast.success(`welcome ${data.username} to the app`);
        } else {
          // Login failed
          const errorData = await response.json();
          toast.error('Login failed:', errorData);
        }
        // Reset the form
        usernameRef.current.value = '';
        passwordRef.current.value = '';
        checkboxRef.current.checked = false;
      } catch (error) {
        console.error('Error occurred:', error);
      }
   }
  return (
    <div className='Login_section'>
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
         <div className='Login_Box'>
               <div className='Login_wrapper'>
                  <h1>Login</h1>
                  <form className='bg-white' onSubmit={(e)=>handleSubmit(e)}>
                     <div className="mb-3 bg-white">
                        <label htmlFor="InputEmail1" className="form-label Input_labels">Username</label>
                        <input 
                        type="text" 
                        name="username" 
                        className="form-control shadow-none" 
                        id="InputEmail1" 
                        aria-describedby="emailHelp"
                        ref={usernameRef}
                         />
                     </div>
                     <div className="position-relative mb-3 bg-white">
                        <label htmlFor="InputPassword1" className="form-label Input_labels">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        className="form-control shadow-none"
                        autoComplete="off"
                        id="InputPassword1" 
                        ref={passwordRef}
                         />
                         <label htmlFor="InputPassword1" className="form-label Input_labels showPassword">Show</label>
                     </div>
                     <div className="mb-3 form-check bg-white">
                        <input type="checkbox" value='true' ref={checkboxRef}  className="form-check-input shadow-none" id="RememberCheck" />
                        <label className="form-check-label bg-white" htmlFor="exampleCheck1">Keep me logged in</label>
                     </div>
                     <button type="submit" className="Button">Login</button>
                  </form>
                  <p className='Forgot_links'>
                     <a href='/'>Forgot Username?</a>
                     <a href='/' className='px-4'>Forgot Password?</a>
                  </p>
               </div>
         </div>
    </div>
  )
}
