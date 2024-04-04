import React from 'react';

class InputField extends React.Component {
    handleChange(event) {
        console.log('Input berubah:', event.target.value);
    }

    render() {
        return <input type="text" onChange={this.handleChange} />;
    }
}

export default InputField;
