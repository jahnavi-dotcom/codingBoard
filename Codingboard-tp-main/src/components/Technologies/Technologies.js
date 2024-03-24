import './Technologies.css'
import web from '../../Images/Web.png'
import DatascincesLogo from '../../Images/Datascinces.png'
import TopPrograming from '../../Images/TopPrograming.png'
import DocumnetEditor from '../../Images/Edito.png'
import Terminal from '../../Images/terminal.png'
import Arrow1 from '../../Images/GreenArrow.png'
import Arrow2 from '../../Images/BlackArrow.png'
export default function Technologies() {
  return (
   <section className='Technologies'>
      <div className='Tech_wrapper d-flex flex-column justify-content-center align-items-center'>
        <h1 className='Tech_welcome_text'>Our Technologies</h1>
        <p className='Tech_info_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <div className='All_Technologies'>
          <div className='Technologies1 d-flex flex-column'>
              <p>Data Science Technologies</p>
              <img src={DatascincesLogo} alt='Data Science'/>
              <button><img src={Arrow1} alt='Start'/></button>
          </div>
          <div className='Technologies2 d-flex flex-row'>
            <img src={TopPrograming} alt='Data Science'/>
            <p>Top Programming Languages</p>
            <button><img src={Arrow1} alt='Start'/></button>
          </div>
          <div className='Technologies3 d-flex flex-column'>
            <p>Web Development Technologies</p>
            <img src={web} alt='web development' />
            <button><img src={Arrow1} alt='Start'/></button>
          </div>
          <div className='Technologies4'>
            <p>Online Terminals</p>
            <img src={Terminal} alt='Data Science'/>
            <button><img src={Arrow2} alt='Start'/></button>
          </div>
          <div className='Technologies5'>
            <p>Document Editors</p>
            <img src={DocumnetEditor} alt="Document Editors" />
            <button><img src={Arrow2} alt='Start'/></button>
          </div>
          <div className='Technologies6'>
            <p>Online Compiler & interpreters</p>
            <button><img src={Arrow1} alt='Start'/></button>
          </div>
        </div>
      </div>
      
   </section>
  )
}
