import './Footer.css'
// Imported Images From Images/Footer
import location from '../../Images/Footer/location.png'
import web from '../../Images/Footer/website.png'
import mail from '../../Images/Footer/mail.png'
import facebook from '../../Images/Footer/facebook.png'
import google from '../../Images/Footer/g+.png'
import linkedin from '../../Images/Footer/linkdin.png'
import tiwtter from '../../Images/Footer/tiwtter.png'
import youtube from '../../Images/Footer/youtube.png'


export default function Footer() {
  return (
    <section className='technology_Footer d-flex flex-row justify-content-center align-items-center py-5'>
      <div className='Footer_warper d-flex flex-row  align-items-start px-3'>
            <div className='Logo'>
               <img src={require('../../Images/logo1.png')} alt='logo' />
               <p>Tutorials Point is a leading Ed Tech company striving to provide the best learning material on technical and non-technical subjects.</p>
            </div>
            <div className='Footer_menu d-flex flex-row justify-content-start align-items-start'>
                  <ul className='d-flex flex-column'>
                     <li className='ul_header'>About us</li>
                     <li>Company</li>
                     <li>Our Team</li>
                     <li>Careers</li>
                     <li>Privacy Policy</li>
                     <li>Cookies Policy</li>
                     <li>Investors</li>
                  </ul>
                  <ul className='d-flex flex-column'>
                     <li className='ul_header'>Extra Links</li>
                     <li>Articles</li>
                     <li>Dev Tools</li>
                     <li>Free Graphics</li>
                     <li>File Conversion</li>
                     <li>Shared Tutorials</li>
                     <li>NetMeeting</li>
                     <li>Whiteboard</li>
                  </ul>
                  <div className='Footer_Address d-flex flex-column'>
                     <ul className='d-flex flex-column Footer_Address' >
                        <li className='ul_header'>Contact Us</li>
                        <li className='listitem'>
                           <img className='li_logo mx-1 addres_logo' src={location} alt='logo' />
                           <p className='Heading my-0'><span >Address:</span>
                           4th Floor, Incor9 Building, Kavuri Telangana 500081</p>
                        </li>
                        <li className='listitem'>
                           <img className='li_logo mx-1' src={mail} alt='logo' />
                           <p className='Heading my-0'>
                              <span>Email:</span>
                              Click Here
                           </p>
                         </li>
                        <li className='listitem'>
                           <img className='li_logo mx-1' src={web} alt='logo' />
                           <p className='Heading my-0'>
                              <span>WebSite:</span>
                              www.tutorialspoint.com
                           </p>
                        </li>
                     </ul>
                     <ul className='d-flex flex-row Footer_icons'>
                        <li><img src={facebook} alt='facebook' /></li>
                        <li><img src={google} alt='facebook' /></li>
                        <li><img src={tiwtter} alt='facebook' /></li>
                        <li><img src={linkedin} alt='facebook' /></li>
                        <li><img src={youtube} alt='facebook' /></li>
                     </ul>
                  </div>
            </div>
      </div>
    </section>
  )
}
