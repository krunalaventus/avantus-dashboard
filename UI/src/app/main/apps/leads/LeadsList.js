import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeadsMultiSelectMenu from './LeadsMultiSelectMenu';
import LeadsTable from './LeadsTable';
import { openEditLeadsDialog, selectleads } from './store/leadsSlice';

function LeadsList(props) {
	const dispatch = useDispatch();
	const leads = useSelector(selectleads);
	const searchText = useSelector(({ leadsApp }) => leadsApp.leads.searchText);
	const user = useSelector(({ leadsApp }) => leadsApp.user);

	const [filteredData, setFilteredData] = useState(null);
	function CompletionFlag(prop) {
		return <Icon>star</Icon>;
	}

	function DecompletionFlag(prop) {
		return <Icon>star_border</Icon>;
	}
	function IsCompletionFlag(prop) {
		const isCompleted = prop.completion_flag;
		if (isCompleted === 'COMPLETED') {
			return <CompletionFlag />;
		}
		return <DecompletionFlag />;
	}
	const columns = React.useMemo(
		() => [
			{
				Header: ({ selectedFlatRows }) => {
					const selectedLeadIds = selectedFlatRows.map(row => row.original.id);

					return selectedFlatRows.length > 0 && <LeadsMultiSelectMenu selectedLeadIds={selectedLeadIds} />;
				},
				accessor: 'avatar',
				Cell: ({ row }) => {
					return <Avatar className="mx-8" alt={row.original.name} src={row.original.avatar} />;
				},
				className: 'justify-center',
				width: 64,
				sortable: false
			},
			{
				Header: 'Email',
				accessor: 'email',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Title',
				accessor: 'Title',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'First Name',
				accessor: 'firstName',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Last Name',
				accessor: 'lastName',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Campaign Name',
				accessor: 'campaignName',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Phone',
				accessor: 'phone',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'LinkedIn Url',
				accessor: 'linkedinUrl',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Company Name',
				accessor: 'companyName',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Icebreaker',
				accessor: 'icebreaker',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Job Title',
				accessor: 'jobTitle',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Website',
				accessor: 'Website',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Industry',
				accessor: 'Industry',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'LinkedIn',
				accessor: 'LinkedIn',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Full Name',
				accessor: 'fullName',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Location',
				accessor: 'Location',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Sent Step',
				accessor: 'sentStep',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Sent At',
				accessor: 'sentAt',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Replied At',
				accessor: 'repliedAt',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Opened At',
				accessor: 'openedAt',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Boounced At',
				accessor: 'bouncedAt',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Unsubscribed At',
				accessor: 'unsubscribedAt',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Clicked At',
				accessor: 'clickedAt',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Gmail Label',
				accessor: 'flag',
				className: 'font-bold',
				sortable: true
			}
		],
		[dispatch, user.starred]
	);

	useEffect(() => {
		function getFilteredArray(entities, _searchText) {
			if (_searchText.length === 0) {
				return leads;
			}
			return FuseUtils.filterArrayByString(leads, _searchText);
		}

		if (leads) {
			setFilteredData(getFilteredArray(leads, searchText));
		}
	}, [leads, searchText]);

	if (!filteredData) {
		return null;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					There are no Leads!
				</Typography>
			</div>
		);
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<LeadsTable columns={columns} data={filteredData} />
		</FuseAnimate>
	);
}

export default LeadsList;
