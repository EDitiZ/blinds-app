import React from 'react';
import { useReactToPrint } from 'react-to-print';
import PrintContent from './PrintContent';
import './PrintButton.css';

const PrintButton = ({ windowDetails }) => {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div style={{ display: 'none' }}>
        <PrintContent ref={componentRef} windowDetails={windowDetails} />
      </div>
      <button className="print-button" onClick={handlePrint}>Print</button>
    </div>
  );
};

export default PrintButton;
