import './Copyright.css'
import logo from '../../Images/Footer/logo-footer.png.png'
import arrow from '../../Images/Arrow1.png'

export default function Copyright (){
    return(
        <section className='technologies_Copyright d-flex'> 
            <div className='Copyright_Wrapper d-flex flex-row '>
                <img src={logo} alt='Logo' className='Icon_logo' />
                <ul className='copyright_menu d-flex flex-row mx-0 px-0 my-0'>
                    <li>Privacy Policy</li>
                    <li>Cookies Policy</li>
                    <li>Contact</li>
                </ul>
                <p className='copyright_text my-0'>© Copyright 2021. All Rights Reserved.</p>
                <div className='sending_input px-1'>
                    <input type='text' placeholder='Enter email for newsletter' />
                    <img src={arrow} alt='send' className='send_icon' />
                </div>
            </div>
        </section>
    )
}