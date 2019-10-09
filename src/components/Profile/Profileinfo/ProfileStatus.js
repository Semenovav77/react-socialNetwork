import React from 'react';
import s from './Profileinfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editSwitch: false
    };
    changeStatus = () => {
/*        debugger;
        console.log(this.state.editSwitch);*/
        this.setState({
            editSwitch: true
        });
/*        console.log(this.state.editSwitch);*/
    };
    saveStatus = () => {
        this.setState({
            editSwitch: false
        });
    };
    render() {
        return (
            <div>
                {!this.state.editSwitch &&
                    <div>
                        <span onDoubleClick={this.changeStatus}>{this.props.status}</span>
                    </div>
                }
                {this.state.editSwitch &&
                    <div>
                        <input autoFocus={true} onBlur={this.saveStatus} value={this.props.status}></input>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;