import React from 'react'
import './button.css'

const Button  = () => {
    const handleButtonClick = () => {
        console.log(`click`);
    }

    return (
        <button type="button" className="button button-calc" disabled={false} onClick={handleButtonClick}>Налоговый вычет</button>
    )
}

export default Button;