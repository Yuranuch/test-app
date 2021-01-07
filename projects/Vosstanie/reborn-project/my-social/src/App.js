import React from 'react';
import './App.css';
import Tectnologies from "./Tecnologies/Tecnologies";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header postsData={props.postsData} messageMassive={props.messageMassive}/>
                <Tectnologies/>
                <Profile/>
                <div className='container'>
                    <Route path='/FirstPage' component={FirstPage}/>
                    <Route path='/SecondPage' component={SecondPage}/>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
