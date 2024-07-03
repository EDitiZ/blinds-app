import React, { useState } from 'react';
import WindowForm from './WindowForm';
import ExportButton from './ExportButton';
import './App.css';

function App() {
  const [numWindows, setNumWindows] = useState(0);
  const [windowDetails, setWindowDetails] = useState([]);

  const handleNumWindowsChange = (e) => {
    const numberOfWindows = Number(e.target.value);
    setNumWindows(numberOfWindows);
    setWindowDetails(Array.from({ length: numberOfWindows }, () => ({ length: '', height: '', material: '', color: '' })));
  };

  const handleDetailChange = (index, field, value) => {
    const newDetails = [...windowDetails];
    newDetails[index] = { ...newDetails[index], [field]: value };
    setWindowDetails(newDetails);
  };

  return (
    <div className="App">
      <h1>Enkeled 005</h1>
      <label>
        Numri i Dritareve:
        <input type="number" value={numWindows} onChange={handleNumWindowsChange} />
      </label>
      <div className="window-forms">
        {windowDetails.map((detail, index) => (
          <WindowForm
            key={index}
            index={index}
            detail={detail}
            handleDetailChange={handleDetailChange}
          />
        ))}
      </div>
      <ExportButton windowDetails={windowDetails} />
    </div>
  );
}

export default App;
