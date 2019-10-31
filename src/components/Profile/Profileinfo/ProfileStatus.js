import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editSwitch: false,
        status: this.props.status
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
        this.props.updateUserStatusThunkCreator(this.state.status);
    };
    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        window.st = this.state;
        return (
            <div>
                {!this.state.editSwitch &&
                <div>
                    <span onDoubleClick={this.changeStatus}>{this.props.status || '---'}</span>
                </div>
                }
                {this.state.editSwitch &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.saveStatus}
                           value={this.state.status}></input>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;