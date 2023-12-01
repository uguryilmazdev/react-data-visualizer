import ExcelJS from 'exceljs';

// This function provides import data from Excel using ExcelJs
export default async function importFromExcel(file) {
  try {
    const workbook = new ExcelJS.Workbook();
    const data = [];

    // Load file
    await workbook.xlsx.load(file);

    // Get first page.
    const sheet = workbook.worksheets[0];

    // return for each column
    sheet.columns.forEach((column) => {
      // get values
      const columnData = column.values
        .map((value) => parseFloat(value))
        .filter((value) => !isNaN(value));

      // if column is empty ignore it.
      if (columnData.length > 0) {
        data.push(columnData);
      }
    });

    return data;
  } catch (error) {
    console.error('Value type error:', error.message);
    throw error;
  }
}

