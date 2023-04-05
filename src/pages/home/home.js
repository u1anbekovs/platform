import React from 'react';
import Books from "./Books/Books";
import Hero from "./Hero/Hero";
import Acc from "./Acc/Acc'";


const Home = () => {
    return (
        <div>
            <Hero/>
            <Books/>
            <Acc/>
        </div>
    );
};

export default Home;