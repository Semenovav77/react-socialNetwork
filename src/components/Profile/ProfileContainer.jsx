import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        //debugger;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login')
            }
        };
        this.props.getProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId);

    }

    render() {
        /*{if (!this.props.match.params.userId) this.props.getProfileThunkCreator('2');}*/
        return (
           <Profile {...this.props} profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator}/>
        )
    }
}

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);*/

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id,
    isAuth: state.auth.isAuth
});
/*
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getProfileThunkCreator}) (WithUrlDataContainerComponent);*/

export default compose(
    connect(mapStateToProps, {getProfileThunkCreator,getUserStatusThunkCreator, updateUserStatusThunkCreator}),
    withRouter,
/*    withAuthRedirect*/
)(ProfileContainer);
