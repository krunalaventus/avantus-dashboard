import _ from '@lodash';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Loader from 'react-loader-spinner';

function Widget5(selected, props) {
	console.log('New Props', selected);
	const [data1, setgraphData] = React.useState();
	const [state, setState] = React.useState({ loading: true });
	useEffect(() => {
		(async () => {
			const token = localStorage.getItem('token');
			const response = await fetch(`${process.env.REACT_APP_API_URL}leads/getGraphData/${selected.data ?? 0}`, {
				headers: {
					Authorization: token
				}
			});
			const res = await response.json();
			const ddata = res.data;
			setgraphData(ddata);
			setState({ loading: false });
		})();
	}, []);
	function sleep(delay = 0) {
		return new Promise(resolve => {
			setTimeout(resolve, delay);
		});
	}
	const theme = useTheme();
	const [dataset, setDataset] = useState('today');
	if (data1 !== undefined && data1 !== null) {
		_.setWith(data1, 'options.scales.xAxes[0].ticks.fontColor', theme.palette.text.secondary);
		_.setWith(data1, 'options.scales.yAxes[0].ticks.fontColor', theme.palette.text.secondary);
		_.setWith(data1, 'options.scales.yAxes[0].gridLines.color', fade(theme.palette.text.secondary, 0.1));

		return state.loading ? (
			<Loader type="Puff" color="#00BFFF" height={100} width={100} />
		) : (
			<Card className="w-full rounded-8 shadow-1">
				<div className="relative p-24 flex flex-row items-center justify-between">
					<div className="flex flex-col">
						<Typography className="h3 sm:h2">Count of Sent At/Count of Replied At</Typography>
					</div>

					<div className="flex flex-row items-center">
						{Object.keys(data1.datasets).map(key => (
							<Button
								key={key}
								className="py-8 px-12"
								size="small"
								onClick={() => setDataset(key)}
								disabled={key === dataset}
							>
								{key}
							</Button>
						))}
					</div>
				</div>

				<Typography className="relative h-200 sm:h-320 sm:pb-16">
					<Line
						data={{
							labels: data1.labels,
							datasets: data1.datasets[dataset].map((obj, index) => {
								const palette = theme.palette[index === 0 ? 'primary' : 'secondary'];
								return {
									...obj,
									borderColor: palette.main,
									backgroundColor: palette.main,
									pointBackgroundColor: palette.dark,
									pointHoverBackgroundColor: palette.main,
									pointBorderColor: palette.contrastText,
									pointHoverBorderColor: palette.contrastText
								};
							})
						}}
						options={data1.options}
					/>
				</Typography>
			</Card>
		);
	}
	return '';
}

export default React.memo(Widget5);
