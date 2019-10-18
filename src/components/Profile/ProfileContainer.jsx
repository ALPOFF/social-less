import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profiles-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 1797;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </div>
    }
}

let mapStateToProps = (state) => ({ //main connect for profile data
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
 )(ProfileContainer)

