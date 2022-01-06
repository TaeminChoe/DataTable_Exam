import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";

export default function Table() {
	const [loading, setLoading] = useState(true);
	const [coinList, setCoinList] = useState([]);

	const columns = [
		{
			name: "name",
			selector: row => row.name,
		},
		{
			name: "price",
			selector: row => row.price,
		},
	];

	function getCoinList() {
		fetch("https://api.coinpaprika.com/v1/ticker")
			.then(res => res.json())
			.then(coinList => {
				const data = coinList.map((value, index) => {
					return {
						id: index,
						name: `${value.name} (${value.symbol})`,
						price: `${value.price_usd} USD`,
					};
				});

				setCoinList(data);
			});
	}

	useEffect(() => {
		getCoinList();
	}, []);

	useEffect(() => {
		if (coinList.length > 0) {
			console.log(coinList);
			setLoading(false);
		}
	}, [coinList]);

	return (
		<div className="Table">
			<DataTable
				title="Coin List"
				columns={columns}
				data={coinList}
				pagination
				progressPending={loading}
				progressComponent={<h1>LOADING...</h1>}
				selectableRows
			/>
		</div>
	);
}
