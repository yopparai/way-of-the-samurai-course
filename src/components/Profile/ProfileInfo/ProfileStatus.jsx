import {Component} from "react";

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    };

    activateEditMode = () => {
        this.setState({editMode: true})
    };

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    };

    render() {
        return <div>
            {!this.state.editMode && <div>
                <span onDoubleClick={this.activateEditMode}>
                    {this.props.status || "-----"}
                </span>
            </div>}
            {this.state.editMode && <div>
                <input
                    onChange={this.onStatusChange}
                    autoFocus
                    onBlur={this.deactivateEditMode}
                    value={this.state.status}
                />
            </div>}
        </div>;
    }
}

export default ProfileStatus
