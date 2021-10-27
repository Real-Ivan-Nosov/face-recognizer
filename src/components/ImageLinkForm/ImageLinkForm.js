import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onClick}) => {
    return (
        <div>
            <p className='f5'>
                {'Эта штука находит лица на фотографиях. Чекай.'}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center block' type='text' onInput={onInputChange}/>
                    <button className='center w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onClick}>Найти</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;

