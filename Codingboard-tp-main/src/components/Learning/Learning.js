import { useState } from 'react'
import Icondisplay from './Icondisplay'
import './Learning.css'
const menulink=[
	'All',
	'Top programming Language',
	'Data science',
	'Data science',
	'online terminal',
	'web development',
	'Document editor',
	'Online Compilers & Interpeters'
]
export default function Learning() {
   const [collapsebtn,setCollapsebtn]=useState(false)
   const [active,setActive]=useState('2')
   const handleClick = (event) => {
    setActive(event.target.id);
  }
  const tablinksdisplay=(links)=>{
		return(
			links.map((item,index)=>{
				return(
					<li 
					key={index+1} 
					className={active === `${index+1}` ? "active" : undefined} 
					id={`${index+1}`} onClick={handleClick}>
						{item}
					</li>
				)
			})
		)
  }
  return (
    <section className="Tech_Learning d-flex flex-column  align-items-center py-5">
      <div className='Learning_warper d-flex flex-column align-items-center py-5'>
         <h1>Start Learning</h1>
            <ul className='Learning_list d-flex flex-row my-5 mx-5'>
				{tablinksdisplay(menulink)}
            </ul>
         <div className='Learning_Technologies'>
			<div className='d-flex flex-column flex-wrap' style={{gap:"2rem"}}>
				<div className='icon_container d-flex flex-row'>
            	   <Icondisplay />
            	</div>
				<span className={`icon_container2 d-flex flex-row ${collapsebtn ? 'expand' : ''}`}><Icondisplay /></span>
			</div>
         </div>
         <button className='Collapse_btn' onClick={()=>setCollapsebtn((prv)=>!prv)}>{collapsebtn ? 'Show Less' : "See All"}</button>
      </div>
    </section>
  )
}
