import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import Главная from "./components/more/page/Главная";
import НашиКурсы from "./components/more/page/Наши курсы";
import Онас from "./components/more/page/Онас";
import Войти from "./components/more/page/Войти";
import Header from "./components/header/Header";


function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/НашиКурсы'} element={<НашиКурсы/>}/>
        <Route path={'/Главная'} element={<Главная/>}/>
        <Route path={'/О нас'} element={<Онас/>}/>
        <Route path={'/Войти/:id'} element={<Войти/>}/>
      </Routes>
    </div>
  );
}

export default App;
