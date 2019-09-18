import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
   {/*             <Route path='/dialogs' component={Dialogs} />
                <Route path='/profile' component={Profile} />*/}

                <Route path='/dialogs' render={ () => <Dialogs
                    state={props.state.dialogsPage}
                    dispatch={props.dispatch}/>} />
                <Route path='/profile' render={ () => <Profile
                    state={props.state.profilePage}
                    dispatch={props.dispatch}/>} />
            </div>
        </div>
        </BrowserRouter>
    );
}



export default App;
