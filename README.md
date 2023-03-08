# @czkoudy/export-to-excel

> React component for exporting data to Excel

[![NPM](https://img.shields.io/npm/v/@czkoudy/export-to-excel.svg)](https://www.npmjs.com/package/@czkoudy/export-to-excel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Downloads](https://img.shields.io/npm/dm/@czkoudy/export-to-excel?style=for-the-badge)

## Install

```bash
npm install --save @czkoudy/export-to-excel
```

## Usage

```jsx
import PaginationTable from '@czkoudy/pagination-table';

const allUsers = [
  {
    firstName: 'Jakub',
    age: 36,
    nationality: 'Czech',
  },
];

const workbookOptions = {
  filename: 'Export of users',
  sheets: [
    {
      name: 'Users',
      options: {
        columns: [{ header: 'First Name' }, { header: 'Age' }, { header: 'Nationality' }],
      },
      data: allUsers,
      keys: [
        {
          label: 'firstName',
          formatValue: (val) => val.toLowerCase(),
        },
        {
          label: 'age',
        },
        {
          label: 'nationality',
        },
      ],
    },
  ],
};

return <ExcelExport options={workbookOptions} />;
```

# API

## ExcelExport props

| Name    | Type   | Required | Default |
| ------- | ------ | -------- | ------- |
| options | Object | Yes      | -       |

### options props

| Name     | Type   | Required | Default | Description                                     |
| -------- | ------ | -------- | ------- | ----------------------------------------------- |
| fileName | String | Yes      | -       | Name of excel file                              |
| sheets   | Array  | Yes      | -       | Array of objects representing sheet in workbook |

## options.sheets props

| Name    | Type   | Required | Default | Description |
| ------- | ------ | -------- | ------- | ----------- |
| name    | String | Yes      | -       |
| options | Object | Yes      | -       |
| data    | Array  | Yes      | -       |
| keys    | Array  | Yes      | -       |

## options.sheets.options props

```js
columns: [{ header: 'First Name' }, { header: 'Age' }, { header: 'Nationality' }],
```

## License

MIT © [czkoudy](https://github.com/czkoudy)
