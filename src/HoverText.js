import React from 'react';

class HoverText extends React.Component {
    handleMouseOver() {
        console.log('Pointer mouse diarahkan ke teks.');
    }

    render() {
        return <p onMouseOver={this.handleMouseOver}>Hover di atas teks ini.</p>;
    }
}

export default HoverText;
