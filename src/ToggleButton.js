import React from 'react';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggled: false };
    }

    handleClick = () => {
        this.setState(state => ({
            isToggled: !state.isToggled
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggled ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default ToggleButton;
