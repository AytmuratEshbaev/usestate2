import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-US'));

    (
        () => setInterval(() => { setTime(new Date().toLocaleTimeString('en-US')) }, 1000)
    )();

    return (
        <div className='wrapper'>
            <h1>The time is</h1>
            <p className='time'>{time}</p>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Clock />
    </React.StrictMode>
);


