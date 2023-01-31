import React, { useEffect, useState } from 'react';
import ExcelRow from './ExcelRow';

const ExcelSheet = ({ keys, workbook, sheetData, sheetName, sheetOptions }) => {
  const [worksheet, setWorksheet] = useState(null)

  useEffect(() => {

    setWorksheet(workbook.addWorksheet(sheetName));

    return () => {
      workbook.removeWorksheet(worksheet?.id)
    }
  }, [worksheet?.id])

  return <div>
    {sheetData.map((row, rowIndex) => (
      <ExcelRow key={rowIndex} keys={keys} rowIndex={rowIndex} workbook={workbook} rowData={row} worksheet={worksheet} sheetOptions={sheetOptions} />
    ))}
  </div>
}

export default ExcelSheet