import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import _ from '@lodash';

function Widget4(props) {
	const theme = useTheme();
	const data = _.merge({}, props.data);
	let per = Math.round((data.repliedCount ?? 0 * 100) / data.totalCount ?? 0);
	if (isNaN(per)) {
		per = 0;
	}
	return (
		<Card className="w-full rounded-8 shadow-1">
			<div className="p-16 pb-0 flex flex-row flex-wrap items-end">
				<div className="">
					<Typography className="h3" color="textSecondary">
						Replied
					</Typography>
					<Typography className="text-40 font-300 leading-none mt-8">
						{data.repliedCount} / {per}%
					</Typography>
				</div>
			</div>
		</Card>
	);
}

export default React.memo(Widget4);
