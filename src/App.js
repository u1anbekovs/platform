import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import {Subscription} from "react-redux";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/subscription'} element={<Subscription/>}/>
      </Routes>
    </div>
  );
}

export default App;
