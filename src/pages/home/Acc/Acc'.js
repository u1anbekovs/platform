import React from 'react';
import boock from '../../../img/boock.png'
import {BiChevronDown} from "react-icons/bi";

const Acc = () => {
    return (
        <div id="acc">
            <div className="container">
                <h1 className="text">Появились вопросы?</h1>
                <div className="acc">
                    <div className="acc--block">
                        <img src={boock} alt=""/>
                    </div>
                    <div className="acc--center">
                        <div className="acc--center__card">
                            <div className="acc--center__card--provide">
                                <h1>Сколько всего насчитывается материала всего?</h1>
                                <input type="checkbox" id="plus"/>
                                <label htmlFor="plus"><BiChevronDown className="plus"/></label>
                                <div className="acc--center__card--provide__lorem">
                                    <p className="acc--center__card--provide__lorem--paragraph">
                                        What is an accordion in web design?
                                        In web design, an accordion is a type of menu
                                        that displays a list of headers stacked on top of one another.
                                        When clicked on, these headers will either reveal.</p>
                                </div>
                            </div>
                            <div className="acc--center__card--provide">
                                <h1>Потеряю ли я оставшесея время если перейду на другой до окончания этого?</h1>
                                <input type="checkbox" id="plus2"/>
                                <label htmlFor="plus2"><BiChevronDown className="plus"/></label>
                                <div className="acc--center__card--provide__lorem">
                                    <p className="acc--center__card--provide__lorem--paragraph">
                                        Accordion. An accordion is used to show HTML content.
                                        Use the w3-hide class to hide the accordion content.</p>
                                </div>
                            </div>
                            <div className="acc--center__card--provide">
                                <h1>Могу ли я отказаться от автопродления подписки?</h1>
                                <input type="checkbox" id="plus3"/>
                                <label htmlFor="plus3"><BiChevronDown className="plus"/></label>
                                <div className="acc--center__card--provide__lorem">
                                    <p className="acc--center__card--provide__lorem--paragraph">
                                        To create an accordion in HTML the user can use the HTML5 details element.
                                        We can create a good Accordion using a detail element and minimum CSS..</p>
                                </div>
                            </div>
                            <div className="acc--center__card--prov">
                                <h1>Откуда мне узнавать про новые статьи и курсы?</h1>
                                <input type="checkbox" id="plus4"/>
                                <label htmlFor="plus4"><BiChevronDown className="plus"/></label>
                                <div className="acc--center__card--prov__lorem">
                                    <p className="acc--center__card--prov__lorem--paragraph">
                                        Accordions are also web structures that often require
                                        JavaScript to show/hide things based on a user click or focus event.
                                        The key to making accordions accessible is to toggle some ARIA
                                        properties and states on user click or focus events</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Acc;