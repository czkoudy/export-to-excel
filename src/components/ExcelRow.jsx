import React from "react";
import ExcelColumn from "./ExcelColumn";

const ExcelRow = ({ keys, rowIndex, worksheet, rowData, sheetOptions }) => {

  if (!worksheet) return null

  worksheet.columns = sheetOptions.columns.map(col => ({
    header: col?.header || "test",
    width: col?.width || 32,
  }))

  return <>
    {/* {Object.keys(rowData).map((key, colIndex) => {
      return <ExcelColumn key={colIndex} colIndex={colIndex} rowIndex={rowIndex} worksheet={worksheet} colData={rowData} formatValues={formatValues} label={key} />
    })} */}
    {keys?.map((key, colIndex) => {
      return <ExcelColumn key={colIndex} colIndex={colIndex} rowIndex={rowIndex} worksheet={worksheet} colData={rowData} entry={key} />
    })}
  </>
}

export default ExcelRow