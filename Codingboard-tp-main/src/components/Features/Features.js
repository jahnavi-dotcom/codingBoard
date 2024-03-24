import './Feature.css'
import Data from './Data'

export default function Features() {
  const features =Data
  const featuresdisplay=(featuresdata)=>{
     return(
        featuresdata.map((item,index)=>{
          return(
            <div className={`single_card feature_card${index+1} d-flex flex-column align-items-start  py-5`} key={index}>
              <img src={item.icon} alt='logo' />
              <p className='my-0 title'>{item.name}</p>
              <p className='my-0 disc'>{item.disc}</p>
            </div>
          )
        })
     )
  }
  return (
    <section className='Technologies_Features py-2'>
      <div className='features_container d-flex flex-column py-5'>
        <p className='Header_name'>Features you’ll love</p>
        <div className='Features_warper  py-5 d-flex flex-row justify-content-center align-items-center'>
          {featuresdisplay(features)}
        </div>
      </div>
    </section>
  )
}
