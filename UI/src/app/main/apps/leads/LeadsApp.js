import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import LeadsHeader from './LeadsHeader';
import LeadsList from './LeadsList';
import LeadsSidebarContent from './LeadsSidebarContent';
import reducer from './store';
import { getleads } from './store/leadsSlice';
import { getUserData } from './store/userSlice';
import WidgetDropdown from '../dashboards/analytics/widgets/WidgetDropdown';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

function LeadsApp(props) {
	const user = useSelector(({ auth }) => auth.user);
	const dispatch = useDispatch();
	const classes = useStyles();
	const [campaign, setCampaign] = React.useState('');
	const [selectedValue, setSelectedValue] = React.useState([]);
	// const [campaign, setCampaign] = React.useState('');
	const pageLayout = useRef(null);
	const routeParams = useParams();
	const history = useHistory();
	const handleChange = event => {
		setSelectedValue(event.target.value);
		history.push(`/apps/leads/${event.target.value}`);
		// window.location.reload();
	};

	useEffect(() => {
		(async () => {
			const token = localStorage.getItem('token');
			const responseC = await fetch(`${process.env.REACT_APP_API_URL}leads/allCampaigns`, {
				headers: {
					Authorization: token
				}
			});
			const res = await responseC.json();
			const responseData = res.data;
			setCampaign(responseData);
		})();
	}, []);

	useDeepCompareEffect(() => {
		dispatch(getleads(routeParams));
		dispatch(getUserData());
	}, [dispatch, routeParams]);
	console.log('==========================================');

	console.log(user);
	return (
		<>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-24 h-full',
					content: 'flex flex-col h-full',
					leftSidebar: 'w-256 border-0',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
					wrapper: 'min-h-0'
				}}
				header={<LeadsHeader pageLayout={pageLayout} />}
				content={
					campaign.length <= 0 ? (
						''
					) : (
						<>
							<FormControl className={classes.formControl}>
								<Select
									value={routeParams.id}
									onChange={handleChange}
									displayEmpty
									className="campaigndropdown"
									inputProps={{ 'aria-label': '' }}
								>
									<MenuItem value="" disabled>
										Select Campaign
									</MenuItem>
									{campaign &&
										campaign.map((item, key) => (
											<MenuItem key={key} value={item._id}>
												{item.name}
											</MenuItem>
										))}
								</Select>
							</FormControl>
							{/* <WidgetDropdown fetchSelected={value => setSelectedValue(value)} items={campaign} /> */}
							<LeadsList />
						</>
					)
				}
				// leftSidebarContent={<leadsSidebarContent />}
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>
		</>
	);
}

export default withReducer('leadsApp', reducer)(LeadsApp);
