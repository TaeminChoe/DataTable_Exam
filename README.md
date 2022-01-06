## 01. Install react-data-table-component

```
npm i react-data-table-component
```

## 02. Import react-data-table-component

```javascript
import DataTable from "react-data-table-component";
```

## 03. Usage

### define columns

```javascript
const columns = [
	{
		name: "column1",
		selector: row => row.column1,
	},
	{
		name: "column2",
		selector: row => row.column2,
	},
];
```

### define data

```javascript
const data = [
	{
		id: 0,
		column1: "row1",
		column2: "data",
	},
	{
		id: 1,
		column1: "row2",
		column2: "data",
	},
	{
		id: 2,
		column1: "row3",
		column2: "data",
	},
];
```

### call component

```javascript
return (
	<div className="Table">
		<DataTable title="Title" columns={columns} data={data} />
	</div>
);
```

### output

![image](https://user-images.githubusercontent.com/92558961/148312499-d2760905-3589-4164-8d41-c5c8201185d5.png)

referrence : https://github.com/jbetancur/react-data-table-component
