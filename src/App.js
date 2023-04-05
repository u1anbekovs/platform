import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import Subscription from "./components/more/page/subscription/Subscription";
import Self from "./components/more/page/subscription/self/Self";
import ToLearn from "./components/more/page/toLearn/ToLearn";
import Control from "./components/more/page/subscription/self/Control";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/subscription'} element={<Subscription/>}/>
        <Route path={'/learn'} element={<ToLearn/>}/>
        <Route path={'/self'} element={<Self/>}/>
        <Route path={'/control'} element={<Control/>}/>
      </Routes>
    </div>
  );
}

export default App;
