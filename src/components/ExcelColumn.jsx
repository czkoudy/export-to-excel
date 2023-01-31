import get from 'lodash.get';
import { useEffect, useState } from 'react';

const ExcelColumn = ({ colIndex, rowIndex, colData, worksheet, entry }) => {
  const [row, setRow] = useState(null)

  useEffect(() => {

    setRow(worksheet?.getRow(rowIndex + 3));

    let _value = ""

    const hasFormat = Object.hasOwn(entry, "formatValue")

    if (hasFormat) {
      const isFormat = entry["formatValue"]

      if (typeof isFormat === "function") {

        _value = isFormat(colData[entry.label])
      }

    } else {
      _value = get(colData, entry.label)
    }

    if (row) {
      row.getCell(colIndex + 1).value = _value
    }


    return () => { }
  }, [colIndex, row, rowIndex, worksheet])



  return null
}

export default ExcelColumn