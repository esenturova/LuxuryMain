import './room.scss'
import {RoomPage} from './const.js'

import Next from '../../assets/img/svg/next.svg'
import Prev from '../../assets/img/svg/prev.svg'
function Room (){
    return(
        <>
        <div className="room">
            <div className="container">
                <h2 className="room__title">All our room types are including complementary breakfast</h2>
                <div className="row">
                {RoomPage.map(item => {
                    return (
                        <div div className="room__main-row">
                        <div className="col-5 room__row">
                        <h4 className="room__suptitle">{item.title}</h4>
                        <p className="room__text">{item.desciption}</p>
                             <button className="room__button">Explore</button>
                    </div>
                    <div className="col-7 room__img">
                        <img className="room__img" src={item.img} alt="" />
                    </div>
                        </div>
                    )
                })}
                </div>
                <div className="room__row2">
                <h4 className="room__subtopic">Testimonials</h4>
                <span className="room__words">"Calm, Serene, Retro – What a way to relax and enjoy"</span>
                <span className="room__address"> Mr. and Mrs. Baxter, UK</span>
                <div className="row room__scroll-row">
                    <img className="room__scroll" src={Prev} alt="" />
                    <img className='room__scroll' src={Next} alt="" />
                </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Room