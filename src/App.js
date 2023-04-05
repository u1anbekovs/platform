import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/header/Header";
import React from "react";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Course from "./pages/Course/Course";
import Login from "./pages/Login/Login";





function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/our-curses'} element={<Course/>}/>
                <Route path={'/О нас'} element={<AboutUs/>}/>
                <Route path={'/Wai/:id'} element={<Login/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
