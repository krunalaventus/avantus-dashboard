import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	}
}));

export default function LeadTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<TabContext value={value}>
				<AppBar position="static">
					<TabList onChange={handleChange} aria-label="simple tabs example">
						<Tab label="Positive Response" value="1" />
						<Tab label="Referral" value="2" />
						<Tab label="Deferred Interest" value="3" />
						<Tab label="Polite Decline" value="4" />
					</TabList>
				</AppBar>
				<TabPanel value="1">No Data Found</TabPanel>
				<TabPanel value="2">No Data Found</TabPanel>
				<TabPanel value="3">No Data Found</TabPanel>
				<TabPanel value="4">No Data Found</TabPanel>
			</TabContext>
		</div>
	);
}
