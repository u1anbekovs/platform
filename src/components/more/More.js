import React from 'react';
import "./More.scss"
import imgHero from "../../img/Kaif 4 (1).svg"
import imgHero1 from "../../img/Kaif 3 (1).svg"
import {useNavigate} from "react-router-dom";

const More = () => {

    const navigate = useNavigate();


    return (
        <section id="more">
            <div className="container">
                <div className="more">

                    <img className="more__image1" src={imgHero} alt=""/>
                    <div className="more--text">
                        <h1>Подпишитесь сейчас за 250,00 $ / год</h1>
                        <p>И получи доступ ко всем нашим материалам и начинай развиватся сейчас вместе со всеми</p>
                    </div>

                    <img className="more__image" src={imgHero1} alt=""/>
                    <div className="more__btn">
                        <button onClick={() => navigate('/subscription')} className="more__btn--add">Подписаться
                        </button>
                        <button onClick={() => navigate(`/learn`)} className="more__btn--remove">Узнать больше</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default More;