import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import LeadTable from './LeadTable';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	}
}));

export default function LeadTabs(selected, props) {
	const classes = useStyles();
	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	let pr = '';
	let Referral = '';
	let di = '';
	let pd = '';
	try {
		selected.data.data1.tableResp.forEach(element => {
			const per = ((element.count * 100) / selected.data.data1.totalCount).toFixed(2);
			if (element.flag === 'FB - Deferred Interest') {
				di = `Deferred Interest - ${element.count}/${per}%`;
			} else if (element.flag === 'FB - Polite Decline') {
				pd = `Polite Decline ${element.count}/${per}%`;
			} else if (element.flag === 'FB - Positive Response') {
				pr = `Positive Response - ${element.count}/${per}%`;
			} else if (element.flag === 'FB - Referral') {
				Referral = `Referral - ${element.count}/${per}%`;
			}
		});
	} catch (er) {
		console.log(er);
	}
	return (
		<div className={classes.root}>
			<TabContext value={value}>
				<AppBar position="static">
					<TabList onChange={handleChange} aria-label="simple tabs example">
						<Tab label={pr} value="1" />
						<Tab label={Referral} value="2" />
						<Tab label={di} value="3" />
						<Tab label={pd} value="4" />
					</TabList>
				</AppBar>
				<TabPanel value="1">
					<LeadTable Data={{ label: 'FB - Positive Response', campaignId: selected.data.campaignId }} />
				</TabPanel>
				<TabPanel value="2">
					<LeadTable Data={{ label: 'FB - Referral', campaignId: selected.data.campaignId }} />
				</TabPanel>
				<TabPanel value="3">
					<LeadTable Data={{ label: 'FB - Deferred Interest', campaignId: selected.data.campaignId }} />
				</TabPanel>
				<TabPanel value="4">
					<LeadTable Data={{ label: 'FB - Polite Decline', campaignId: selected.data.campaignId }} />
				</TabPanel>
			</TabContext>
		</div>
	);
}
