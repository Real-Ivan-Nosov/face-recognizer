import React from 'react';

const Rank = ({name, entires}) => {
    return (
        <div>
            <div className='white f3'>
                {`${name}, твой текущий ранг...`}
            </div>
            <div className='white f1'>
                {`${entires}`}
            </div>
        </div>
    )
}

export default Rank;
