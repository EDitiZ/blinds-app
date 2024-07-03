import React from 'react';
// import { useReactToPrint } from 'react-to-print';
import { exportToExcel } from './exportToExcel';
import './PrintButton.css';

const ExportButton = ({ windowDetails }) => {
  // const componentRef = React.useRef();

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  const handleExport = () => {
    exportToExcel(windowDetails);
  };

  return (
    <div>
      {/* <button className="print-button" onClick={handlePrint}>Print</button> */}
      <button className="export-button" onClick={handleExport}>Export to Excel</button>
    </div>
  );
};

export default ExportButton;
