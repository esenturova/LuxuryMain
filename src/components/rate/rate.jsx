import './rate.scss'
import {RoomType} from './rate.js'
import { Button } from '../buttons/btn'
import Svg from '../../assets/img/svg/herrob.svg'
import Scroll from '../../assets/img/svg/scroll.svg'
import plus from '../../assets/img/svg/plus.svg'
function Rates (){
    return(
        
        <div className='rate'>

<div className="rate__back">
<div className="container">
     <div className="hero__row">
     <span className="hero__suptitle1">WELCOME TO</span>
        <h1 className="hero__title">LUXURY</h1>
        <span className="hero__suptitle2">HOTELS</span>
        <span className="hero__text">Book your stay and enjoy Luxury
                                     redefined at the most affordable rates.</span>
       <button className="hero__button">
           <div className="hero__button-row"> <img className="hero__buttonsvg" src={Svg} alt="" /> BOOK NOW</div></button>    
     <span className="hero__scroll">Scroll</span>  
    <img className="hero__scrollsvg" src={Scroll} alt="" /> 
     </div>
 </div>
</div>
<div className="container">
    <div className="rate__column">
    <h2 className="rate__title">ROOMS AND RATES</h2>
    <p className="rate__text">Each of our bright, light-flooded rooms come with everything you could possibly need for 
                             a comfortable stay. And yes, comfort isn’t our only objective, 
                             we also value good design, sleek contemporary furnishing complemented 
                             by the rich tones of nature’s palette as visible from 
                             our rooms’ sea-view windows and terraces. </p>
    </div>
    {RoomType.map(item => {
                    return (
                        <div className="rate__row">
                <img className="rate__img" src={item.img} alt="" />
                        <h4 className="rate__suptitle">{item.suptitle}</h4>
                       <div className="rate__second-row">
                       <div className="rate__view"><img src={plus} alt="" />
                       <span className="rate__words">{item.text}</span></div>
                        <Button className="rate__btn" name="$147  Avg/night"/>
             </div>
                   </div>
                    )
                })}
</div>
 </div>
        
    )
}
export default Rates