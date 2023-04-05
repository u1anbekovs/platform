import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import Subscription from "./components/more/page/subscription/Subscription";
import Self from "./components/more/page/subscription/self/Self";
import ToLearn from "./components/more/page/toLearn/ToLearn";
import Control from "./components/more/page/subscription/self/Control";
import Главная from "./components/more/page/Главная";
import НашиКурсы from "./components/more/page/Наши курсы";
import Онас from "./components/more/page/Онас";
import Войти from "./components/more/page/Войти";
import Header from "./components/header/Header";
import Acc from "./components/acc/Acc'";
import React from "react";


function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/subscription'} element={<Subscription/>}/>
        <Route path={'/learn'} element={<ToLearn/>}/>
        <Route path={'/self'} element={<Self/>}/>
        <Route path={'/control'} element={<Control/>}/>
        <Route path={'/НашиКурсы'} element={<НашиКурсы/>}/>
        <Route path={'/Главная'} element={<Главная/>}/>
        <Route path={'/О нас'} element={<Онас/>}/>
        <Route path={'/Войти/:id'} element={<Войти/>}/>
      </Routes>
        <Acc/>
    </div>
  );
}

export default App;
