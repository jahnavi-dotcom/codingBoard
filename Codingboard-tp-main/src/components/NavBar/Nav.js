import './Nav.css'
import logo from '../../Images/logo1.png'
export default function Nav() {
  return (
         <nav className="top_nav d-flex my-3 justify-content-center">
            <div className="nav-wrapper d-flex flex-row justify-content-between align-items-center px-5 py-3">
               <a href='/' className='logo'>
                  <img src={logo} alt={"log"} />
               </a>
               <div className='Nav-menu d-flex align-self-center'>
                  <ul className='d-flex flex-row justify-items-center align-self-center my-0 px-0'>
                     <li>Q/A</li>
                     <li>Library</li>
                     <li>e-Books</li>
                     <li>Courses</li>
                  </ul>
               </div>
               <div className='Nav_buttons d-flex flex-row justify-content-center align-item-start'>
                  <button className='Login-btn'>Login</button>
                  <button id='Sign-btn'>SignUp</button>
               </div>
            </div>
         </nav>
  )
}
