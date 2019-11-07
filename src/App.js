import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";
import {withReactSuspense} from "./HOC/withReactSuspense";

/*import DialogsContainer from "./components/Dialogs/DialogsContainer";*/
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavBar/>
                    <div className="app-wrapper-content">
                        {/*             <Route path='/dialogs' component={Dialogs} />
                        <Route path='/profile' component={Profile} />*/}

                       {/* <Route path='/dialogs' render={() => {
                            return (
                                <React.Suspense fallback={<Preloader />}>
                                    <DialogsContainer />
                                </React.Suspense>
                            )
                        }}/>*/}
                        <Route path='/dialogs' render={withReactSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                        <Route path='/users' render={() => <UsersContainer />}/>
                        <Route path='/login' render={() => <Login />}/>
                    </div>
                </div>

        );
    }

}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
};

export default MainApp;
