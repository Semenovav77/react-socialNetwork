import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
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
import RegisterContainer from "./components/Register/RegisterContainer";

/*import DialogsContainer from "./components/Dialogs/DialogsContainer";*/
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', function(e) {
            console.log(e);
            //alert(e.reason);
        });
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', function (e) {
            console.log(e);
            //alert(e.reason);
        });
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
                    <Switch>
                        <Route exact path='/'>
                            <Redirect from='/' to='profile' />
                        </Route>
                        <Route path='/dialogs' render={withReactSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer pageTitle={''}/>}/>
                        <Route path='/login/vk' render={() => <div>VK</div>}/>
                        <Route exact path='/login' render={() => <Login/>}/>
                        <Route exact path='/register' render={() => <RegisterContainer/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
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
        <AppContainer/>
        </Provider>
        </BrowserRouter>
        )
    };

    export default MainApp;
