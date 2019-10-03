import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
   {/*             <Route path='/dialogs' component={Dialogs} />
                <Route path='/profile' component={Profile} />*/}

                <Route path='/dialogs' render={ () => <DialogsContainer />} />
                <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
                <Route path='/users' render={ () => <UsersContainer />} />
            </div>
        </div>
        </BrowserRouter>
    );
}



export default App;
