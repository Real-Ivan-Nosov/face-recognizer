import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt>
                <div className='Tilt' style={{ height: '300px'}}>
                    <h1>React Parallax Tilt 👀</h1>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;

