import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import _ from '@lodash';

function Widget2(props) {
	const theme = useTheme();
	const data = _.merge({}, props.data);
	return (
		<Card className="w-full rounded-8 shadow-1">
			<div className="p-16 pb-0 flex flex-row flex-wrap items-end">
				<div className="">
					<Typography className="h3" color="textSecondary">
						Total Contacts
					</Typography>
					<Typography className="text-40 font-300 leading-none mt-8">{data.totalCount}</Typography>
					<br />
					<br />
				</div>
			</div>
		</Card>
	);
}

export default React.memo(Widget2);
