import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { format } from 'date-fns';

export const exportToExcel = (windowDetails) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Detajet e Dritareve');

  // Header styles
  const headerStyle = {
    font: { bold: true, color: { argb: 'FFFFFFFF' } },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4CAF50' } },
    alignment: { horizontal: 'center', vertical: 'middle' },
    border: {
      top: { style: 'thin', color: { argb: 'FF000000' } },
      left: { style: 'thin', color: { argb: 'FF000000' } },
      bottom: { style: 'thin', color: { argb: 'FF000000' } },
      right: { style: 'thin', color: { argb: 'FF000000' } },
    },
  };

  const cellStyles = {
    'Gjatësia': { fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFADD8E6' } } }, 
    'Lartësia': { fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD3D3D3' } } }, 
    'Materiali': { fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF98FB98' } } }, 
    'Ngjyra': { fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFC0CB' } } }, 
  };

  const headers = ['Numri i Dritares', 'Gjatësia', 'Lartësia', 'Materiali', 'Ngjyra'];
  worksheet.columns = headers.map(header => ({ header, width: 20 }));

  worksheet.getRow(1).eachCell((cell, colNumber) => {
    cell.style = headerStyle;
  });

  windowDetails.forEach((detail, rowIndex) => {
    const row = worksheet.addRow([
      `Dritarja ${rowIndex + 1}`,
      `${detail.length} cm`,
      detail.height + ' cm',
      detail.material,
      detail.color,
    ]);

    row.eachCell((cell, colNumber) => {
      const header = headers[colNumber - 1];
      if (header && cellStyles[header]) {
        cell.style = { ...cell.style, ...cellStyles[header] };
      }
      cell.style.border = {
        top: { style: 'thin', color: { argb: 'FF000000' } },
        left: { style: 'thin', color: { argb: 'FF000000' } },
        bottom: { style: 'thin', color: { argb: 'FF000000' } },
        right: { style: 'thin', color: { argb: 'FF000000' } },
      };
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
    });
  });

  const formattedDate = format(new Date(), 'yyyy-MM-dd_HH-mm-ss');

  workbook.xlsx.writeBuffer().then(buffer => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `enkeled005-${formattedDate}.xlsx`);
  }).catch(err => {
    console.error('Error writing Excel file:', err);
  });
};
