import React, { useState } from 'react';
import Button from '../button/button';
import Popup from '../popup/popup';
import './app.css';

const App = () => {
  const [activePopup, setActivePopup] = useState(false)
  const handleOpenPopup = () => {
    setActivePopup(true)
    document.querySelector(`body`).classList.add(`popup-active`);
  }
  const handleClosePopup = () => {
    setActivePopup(false)
    document.querySelector(`body`).classList.remove(`popup-active`);
  }
  return (
    <div className="outside-project">
      <Button name={`Налоговый вычет`} onClick={handleOpenPopup} classes={`button-calc`} disabled={activePopup}/>
      {activePopup ? <Popup onCloseClick={handleClosePopup}/> : ``}
    </div>
  )
}

export default App;
