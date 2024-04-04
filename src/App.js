import React from 'react';
import Button from './Button';
import InputField from './InputField';
import HoverText from './HoverText';
import ToggleButton from './ToggleButton';
import './styles.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="section">
                    <h1>Contoh Penggunaan Tombol</h1>
                    <Button />
                </div>
                <div className="section">
                    <h1>Contoh Penggunaan Input Field</h1>
                    <InputField />
                </div>
                <div className="section">
                    <h1>Contoh Penggunaan Hover Text</h1>
                    <HoverText />
                </div>
                <div className="section">
                    <h1>Contoh Penggunaan Toggle Button</h1>
                    <ToggleButton />
                </div>
            </div>
        );
    }
}

export default App;
