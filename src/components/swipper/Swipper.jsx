import React from 'react'
import "./SwiperComponent.css"
import { FaArrowRight } from "react-icons/fa";
import  Swipper from '../../assets/banner.webp'

const Svipper = () => {
  return (
    <div className='swayper'>
      <div className="left_swipper">
              <h1>  Bitta  narx</h1>
              <h3>от 3 до 10 товаров при заказе</h3>
              <button>Buy <FaArrowRight /> </button>
      </div>
      <div className="right_swipper">
              <img src={Swipper} alt="" />
      </div>
    </div>
  )
}

export default Svipper
