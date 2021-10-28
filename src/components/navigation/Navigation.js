import React from 'react';

const Navigation = ({ onRouteChange, isSingnedIn }) => {
    if (isSingnedIn) {
        return (
           <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p onClick={() => onRouteChange('signOut')} className='f3 link dim black underline pa3 pointer'>Выйти</p>
        </nav> 
        ) 
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('singIn')} className='f3 link dim black underline pa3 pointer'>Войти</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Регистрация</p>
            </nav>
        )    
    }
}

export default Navigation;
