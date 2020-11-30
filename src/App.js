import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import { createContext } from 'react';
import { useState } from 'react';


export const userContext = createContext();


function App() {
  const [uploadedImage, setUploadedImage] = useState([]);

  const handleShowImage = () => {
    fetch('http://localhost:5000/uploadImage')
      .then(res => res.json())
      .then(data => setUploadedImage(data))
  }
  return (
    <userContext.Provider value={ {value1: [uploadedImage, setUploadedImage], value2: [handleShowImage]} }>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
