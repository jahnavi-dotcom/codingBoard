import React from 'react'
import data from './Data'

export default class Icondisplay extends React.Component {
   constructor(){
      super();
      this.state={
         Data:data
      } 
   }
   Display(iconsnsData){
      return(
         iconsnsData.map(
            (item,index)=>
            {return(
               <div className='Single_technologies d-flex flex-column' id={`card${index+1}`}>
                  <div className='icon_box' >
                    <img src={item.icon} alt='icon' />
                  </div>
                  <p>{item.name}</p>
               </div>
            )})
      )
   }
  render() {
    return (
      <>
            {this.Display(this.state.Data)}
      </>
    )
  }
}

