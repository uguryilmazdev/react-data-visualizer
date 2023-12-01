import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

export default async function exportToExcel(channels) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Channels Data');

  // Header row
  sheet.addRow([...Array.from({ length: channels.length }, (_, i) => `Channel ${i + 1}`)]);

  // Add values
  channels[0].forEach((_, rowIndex) => {
    const rowData = [];
    channels.forEach((channel) => {
      rowData.push(channel[rowIndex]);
    });
    sheet.addRow(rowData);
  });

  // Download file
  await workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, 'channels_data.xlsx');
  });
}
