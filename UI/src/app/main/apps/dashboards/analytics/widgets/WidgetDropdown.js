import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export default function SelectCampaign({ items = [], fetchSelected }) {
	console.log('Data', fetchSelected);
	const classes = useStyles();
	const [campaign, setCampaign] = React.useState('');
	const history = useHistory();

	const handleChange = event => {
		console.log(event);
		history.push(`/apps/dashboards/analytics/${event.target.value}`, true);
		window.location.reload(false);
		// setCampaign(event.target.value);
	};

	return items.length <= 0 ? (
		''
	) : (
		<div>
			<FormControl className={classes.formControl}>
				<Select
					value={fetchSelected ?? 'all'}
					onChange={handleChange}
					className="campaigndropdown"
					inputProps={{ 'aria-label': '' }}
				>
					<MenuItem value="all">Select Campaign</MenuItem>
					{items &&
						items.map((item, key) => (
							<MenuItem key={key} value={item._id}>
								{item.name}
							</MenuItem>
						))}

					{/* <MenuItem value={10}>C1</MenuItem>
          <MenuItem value={20}>C2</MenuItem>
          <MenuItem value={30}>C3</MenuItem>
          <MenuItem value={30}>C4</MenuItem>
          <MenuItem value={30}>C5</MenuItem> */}
				</Select>
			</FormControl>
		</div>
	);
}
