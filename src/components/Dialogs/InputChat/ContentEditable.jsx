import reactStringReplace from "react-string-replace";
import {Emoji} from "emoji-mart";
import React from "react";

class ContentEditable extends React.Component {
   /* shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props.refS.textContent /!*|| nextState != this.state ;;*!/
    }*/

    render() {
        return (
            <div className="chat__current-dialog-input-add"
                 currentDialog={this.props.currentDialog}
                 contentEditable={this.props.contentEditable} suppressContentEditableWarning
                 ref={this.props.refS} onInput={(e) => this.props.onInput(e)} onClick={this.props.onCl}
                 onKeyPress={(e) => {this.props.sendMessageOnKey(e,this.props.currentDialog, this.props.value)}} value={this.props.value && reactStringReplace(this.props.value, /:(.+?):/g, (match) => (
                <Emoji emoji={match} set='apple' size={16} />
            ))}>
                {/*{this.props.value && reactStringReplace(this.props.value.replace(/&nbsp;|\u202F|\u00A0/g, ' '), /:(.+?):/g, (match) => (
                    <Emoji emoji={match} set='apple' size={16} />
                ))}*/}
            </div>
        )
    }
}


export default ContentEditable;