import "./_hero.scss"
import Svg from '../../assets/img/svg/herrob.svg'
import Scroll from '../../assets/img/svg/scroll.svg'
function Hero ()
{
    return (
        <div className='hero'>

       <div className="hero__back">
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
        </div>
    )
}


export default Hero