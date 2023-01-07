import LoginPage from './Pages/LoginPage/login-page.component';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import MapPage from './Pages/MapPage/map.page.component';

const App = () => {
  return (
    <div class = "w-screen h-screen">
      <Routes>
        <Route path = "/" element = {<LoginPage/>} />
        <Route path = "/map" element = {<MapPage/>} />
      </Routes>
    </div>
  );
}

export default App;
