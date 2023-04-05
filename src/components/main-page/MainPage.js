import React from 'react';
import Hero from "../hero/Hero";
import Books from "../books/Books";
import More from "../more/More";
import Footer from "../footer/Footer";

const MainPage = () => {
    return (
        <div>
            <Hero/>
            <Books/>
            <More/>
            <Footer/>
        </div>
    );
};

export default MainPage;