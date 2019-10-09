import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        };
        this.props.getProfileThunkCreator(userId);
    }

    render() {
        debugger;
        {if (!this.props.match.params.userId) this.props.getProfileThunkCreator('2');}
        return (
           <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);*/

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});
/*
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getProfileThunkCreator}) (WithUrlDataContainerComponent);*/

export default compose(
    connect(mapStateToProps, {getProfileThunkCreator}),
    withRouter,
    /*withAuthRedirect*/
)(ProfileContainer);
