import './Trending.css'

export default function Trending() {
  return (
    <section className='Technologies_trending py-5'>
      <div className='trending_wrapper d-flex flex-column justify-content-center align-items-center py-5'>
         <p className='header_trending'>Trending Courses</p>
         <div className='Courses_list d-flex flex-row py-5'>
            <div className='Courses_card'>
               <div className='card_wrapper'>
                  <div className='card_top py-3'>
                     <img src={require('../../Images/TreandingCourses/html5-css3.png')} alt='logo'/>
                  </div>
                  <div className='card_bottom px-4 py-4'>
                     <p className='Courses_title mx-0'>HTML5 and CSS3 Fundamentals</p>
                     <p className='Instructor mx-0'>Stone River Elearning</p>
                     <div className='Cost_container py-3'>
                        <p className='cost'>$399</p>
                        <button className='buy-btn p-2'>Buy Now</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className='Courses_card'>
               <div className='card_wrapper'>
                  <div className='card_top bg-blue py-5'>
                     <img src={require('../../Images/TreandingCourses/Tableau1.png')} alt='logo'/>
                  </div>
                  <div className='card_bottom px-4 py-3'>
                     <p className='Courses_title mx-0'>HTML5 and CSS3 Fundamentals</p>
                     <p className='Instructor inst_name mx-0 align-self-start'>Stone River Elearning</p>
                     <div className='Cost_container2'>
                        <p className='cost1'>$399</p>
                        <button className='buy-btn1 p-2'>Buy Now</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className='Courses_card'>
               <div className='card_wrapper'>
                  <div className='card_top py-0 cyrber'>
                     <img src={require('../../Images/TreandingCourses/Cyber-Security.png')} style={{width:"100%"}} alt='logo'/>
                  </div>
                  <div className='card_bottom px-4 py-4 card_bottom3'>
                     <p className='Courses_title mx-0'>HTML5 and CSS3 Fundamentals</p>
                     <p className='Instructor mx-0'>Stone River Elearning</p>
                     <div className='Cost_container2'>
                        <p className='cost1'>$399</p>
                        <button className='buy-btn1 p-2'>Buy Now</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className='Courses_card'>
               <div className='card_wrapper'>
                  <div className='card_top py-3'>
                     <img src={require('../../Images/TreandingCourses/html5-css3.png')} alt='logo'/>
                  </div>
                  <div className='card_bottom px-4 py-4'>
                     <p className='Courses_title mx-0'>HTML5 and CSS3 Fundamentals</p>
                     <p className='Instructor mx-0'>Stone River Elearning</p>
                     <div className='Cost_container2'>
                        <p className='cost1'>$399</p>
                        <button className='buy-btn1 p-2'>Buy Now</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}
