import React from 'react';
import logo from '../../img/Kaif 1.png'
import {Link, NavLink} from "react-router-dom";
import {BiUser} from "react-icons/bi";



const Header = () => {
    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="header">
                        <div className="header--text">
                            <img src={logo} alt=""/>
                            <h4>SELF DEVELOPING SCHOOL</h4>
                        </div>
                        <div className="header--nav">
                            <NavLink to={'/'}>Главная</NavLink>
                            <NavLink to={'/our-curses'}>Наши курсы</NavLink>
                            <NavLink to={'/О нас'}>О нас</NavLink>
                        </div>
                        <div className="header--new">
                            <Link to={'/Wai/:id'}>
                                <button> <BiUser className="header--new__icon"/> Войти</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Header;