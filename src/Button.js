import React from 'react';

class Button extends React.Component {
    handleClick() {
        alert('Tombol diklik!');
    }

    render() {
        return <button onClick={this.handleClick}>Klik Saya</button>;
    }
}

export default Button;
