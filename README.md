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


### other attribute

![image](https://user-images.githubusercontent.com/92558961/148314267-f9b8ad42-f372-47c8-ad0d-01b80951eb8a.png)
- title(string) : 테이블 위에 title을 표기
- selectableRows(boolean) : 테이블의 row옆에 Checkbox 추가 가능


![image](https://user-images.githubusercontent.com/92558961/148314277-be57a9b2-9272-4eec-8228-057ae7541d6a.png)
- pagination(boolean) : 테이블의 row를 갯수 단위로 쪼개어 페이지 뷰 제공
- fixedHeader(boolean) : columns를 고정시킨 후 scroll을 활용해 row를 보여줌
- fixedHeaderScrollHeight(string) : scroll창의 크기를 지정 ex) 200px


![image](https://user-images.githubusercontent.com/92558961/148314299-69135dac-4581-4f18-aab1-bc6890fd2555.png)
- progressPending(boolean) : 데이터를 불러올 때 시간이 걸리는 경우, state값을 주어 컨텐츠를 보여주기 전 loading 기능 제공
