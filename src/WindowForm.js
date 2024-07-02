import React from 'react';
import './WindowForm.css';

function WindowForm({ index, detail, handleDetailChange }) {
  return (
    <div className="window-form">
      <h3>Window {index + 1}</h3>
      <label>
        Length:
        <input
          type="text"
          value={detail.length}
          onChange={(e) => handleDetailChange(index, 'length', e.target.value)}
        />
      </label>
      <label>
        Height:
        <input
          type="text"
          value={detail.height}
          onChange={(e) => handleDetailChange(index, 'height', e.target.value)}
        />
      </label>
      <label>
        Material:
        <select
          value={detail.material}
          onChange={(e) => handleDetailChange(index, 'material', e.target.value)}
        >
          <option value="">Select Material</option>
          <option value="Wood">Wood</option>
          <option value="Aluminum">Aluminum</option>
          <option value="Vinyl">Vinyl</option>
          <option value="Fabric">Fabric</option>
          <option value="Bamboo">Bamboo</option>
        </select>
      </label>
      <label>
        Color:
        <input
          type="text"
          value={detail.color}
          onChange={(e) => handleDetailChange(index, 'color', e.target.value)}
        />
      </label>
    </div>
  );
}

export default WindowForm;
