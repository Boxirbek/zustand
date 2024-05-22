// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import useStore from '../../context/store';
import { FaBookOpen } from "react-icons/fa";
import { BsBox } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { PiSmileyMeltingLight } from "react-icons/pi";
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";

const Navbar = () => {
  const cart = useStore((state) => state.cart);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0.2;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (<>
    <header className={scrolled ? 'sticky' : ''}>
      <div  className="logo">AliExpress</div>
      <nav>
        <button className='btn_n'><FaBookOpen/> Katalog</button>
      </nav>
      <div className="search-container">
        <input className='searchInput' type="text" placeholder="Серги" />
        <button>Найти</button>
      </div>
      <div className="cart">
        <button><BsBox/> Zakaz</button>
        <button><FaCartArrowDown/> Korzinka</button>
        <button><PiSmileyMeltingLight/> Chiqish</button>
      </div>
    </header>
    <div className='bottom_nav'>
      <div className="left">
        <button>Goryachiy tovar <FaFireFlameCurved/> </button>
        <button>Bitaa narx $</button>
      </div>
      <div className="right">
        <button><MdOutlineLocationOn/>Joylashuv</button>
        <button>Ru</button>
        <button>UZS</button>
      </div>
    </div>
  </>
  );
};


export default Navbar;



