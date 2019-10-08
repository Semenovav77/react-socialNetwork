import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        };
        this.props.getProfileThunkCreator(userId);
    }

    render() {
        {if (!this.props.match.params.userId) this.props.getProfileThunkCreator('2');}
        return (
           <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setUserProfile,getProfileThunkCreator}) (WithUrlDataContainerComponent);