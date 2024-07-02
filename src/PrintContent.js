import React from 'react';
import './PrintContent.css';

class PrintContent extends React.Component {
  render() {
    const { windowDetails } = this.props;
    return (
      <div className="print-content">
        <h2>Window Details</h2>
        {windowDetails.map((detail, index) => (
          <div key={index} className="window-detail">
            <h3>Window {index + 1}</h3>
            <p><strong>Length:</strong> {detail.length}</p>
            <p><strong>Height:</strong> {detail.height}</p>
            <p><strong>Material:</strong> {detail.material}</p>
            <p><strong>Color:</strong> {detail.color}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PrintContent;
