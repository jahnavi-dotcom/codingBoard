import './main.css'
import Search from '../../Images/Search.png'
import Arrow from '../../Images/Arrow1.png'

export default function Main() {
  return (
   <section id='main_section ' >
      <div className='container main d-flex justify-content-center flex-column align-items-center my-4 py-3'>
         <h1 className='py-0'>Coding Ground <span>For Developers</span></h1>
         <p className='d-flex justify-content-center align-items-center Welcome_text'>Hello ! What Do You Want To Learn?</p>
         <div className='Search_input d-flex align-items-center '>
            <input type='search' name="search" placeholder='Search here...' className='input_search' autoComplete='off'  />
            <img src={Search} alt='search' className='Search_icon' />
         </div>
         <p className='Actions_text d-flex justify-content-center align-self-center '>Code, Edit, Run and Share</p>
         <p className='info_text  d-flex  align-items-center my-0'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
         </p>
         <button className='Free_signup'>Signup for Free</button>
         <div className='Login-text d-flex justify-content-center my-2'>
            <p>Already have an account ?</p>
            <button>
               Log In <img src={Arrow} alt='search' className='Arrow_icon' />
            </button>
         </div>
      </div>
   </section>
  )
}
