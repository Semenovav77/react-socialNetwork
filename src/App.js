import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
   {/*             <Route path='/dialogs' component={Dialogs} />
                <Route path='/profile' component={Profile} />*/}

                <Route path='/dialogs' render={ () => <DialogsContainer />} />
                <Route path='/profile' render={ () => <Profile />} />
            </div>
        </div>
        </BrowserRouter>
    );
}



export default App;
