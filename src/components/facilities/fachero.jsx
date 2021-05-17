import './fachero.scss'
import Svg from '../../assets/img/svg/herrob.svg'
import Gym from '../../assets/img/png/gym.png'
import Bar from '../../assets/img/png/bar.png'
import Spa from '../../assets/img/png/spa.png'
import Pool from '../../assets/img/png/pool.png'
import Restaurant from '../../assets/img/png/restaurant.png'
import Laundry from '../../assets/img/png/laundry.png'
function Facility (){
    return (
      <>  <div className="facility">
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
      <svg className="hero__scrollsvg" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.5 61C23.4649 60.9939 16.6481 58.5566 11.204 54.1008C5.75985 49.6451 2.02294 43.4447 0.626053 36.5497C-0.770833 
29.6547 0.258157 22.4888 3.53878 16.2655C6.8194 10.0421 12.15 5.14381 18.628 2.40002C26.056 -0.616 34.3727 -0.58696 41.7795 
2.48086C49.1863 5.54868 55.0879 11.4087 58.208 18.7936C61.328 26.1786 61.4158 34.4949 58.4524 41.944C55.4889 49.3932 49.7124 
55.3765 42.372 58.6C38.6165 60.1907 34.5785 61.007 30.5 61ZM18.277 20.755L13.26 25.655L30.1 42.1L46.941 25.65L41.924 20.75L30.1 
32.3L18.277 20.755Z" fill="white"/>
</svg>         
      </div>
  
          

      </div>

  
  </div>
  <div className="container">
      <h2 className="facility__title">FACILITIES</h2>
      <p className="facility__text">We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so 
that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
and our modern luxury resort facilities will help you enjoy the best of all. </p>
<div className="faility__item">
<img className="facility__img1 facility__photo1" src={Gym} alt=""  />
<span className="facility__suptitle">THE GYM</span>
</div>
<div className="facility__item">
    <img className="facility__img1 facility__photo2" src={Bar} alt="" />
    <span className="facility__suptitle">POOLSIDE BAR</span>
    </div>
<div className="facility__item">
<img className="facility__img1 facility__photo3" src={Spa} alt="" />
<span className="facility__suptitle">THE SPA</span>
</div>
<div className="facility__item">
<img className="facility__img1 facility__photo4" src={Pool} alt="" />
<span className="facility__suptitle">SWIMMING POOL</span>
</div>
<div className="facility__item">
<img className="facility__img1 facility__photo5" src={Restaurant} alt="" />
<span className="facility__suptitle">RESTAURANT</span>
</div>
<div className="facility__item">
<img className="facility__img1 facility__photo16" src={Laundry} alt="" />
<span className="facility__suptitle">LAUNDRY</span>
</div>



  </div>
  
      </>
        
    )
}
 export default Facility