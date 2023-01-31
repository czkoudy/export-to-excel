import ExcelJS from "exceljs";
import React from 'react';
import ExcelSheet from "./ExcelSheet";

const ExcelExport = ({ options }) => {

  const workbook = new ExcelJS.Workbook();
  workbook.created = new Date();

  const handleDownload = () => {
    workbook.xlsx.writeBuffer({
      base64: true
    })
      .then(function (xls64) {
        var a = document.createElement("a");
        var data = new Blob([xls64], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

        var url = URL.createObjectURL(data);
        a.href = url;
        a.download = `${options.filename}.xlsx`;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        },
          0);
      })
      .catch(function (error) {
        console.log(error.message);
      });

  }

  return (
    <div>
      {options.sheets.map((sheet, sheetIndex) => (
        <ExcelSheet
          key={sheetIndex}
          keys={options.sheets[sheetIndex].keys}
          workbook={workbook}
          sheetName={options.sheets[sheetIndex].name}
          sheetData={options.sheets[sheetIndex].data}
          sheetOptions={options.sheets[sheetIndex].options}
        />
      ))}
      {options?.button ? React.createElement(options?.button?.component, { ...options?.button?.props, onClick: handleDownload }, options?.button?.label || "Export and Download") : <button onClick={handleDownload}>Export and download</button>}
    </div>
  )
}

export default ExcelExport