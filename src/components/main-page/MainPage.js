import React from 'react';
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Books from "../books/Books";
import More from "../more/More";
import Acc from "../acc/Acc'";
import Footer from "../footer/Footer";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Books/>
            <More/>
            <Acc/>
            <Footer/>
        </div>
    );
};

export default MainPage;