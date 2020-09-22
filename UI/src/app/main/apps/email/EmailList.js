import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmailMultiSelectMenu from './EmailMultiSelectMenu';
import EmailTable from './EmailTable';
import { openEditEmailDialog, deleteThis, toggleStarredEmail, selectemail } from './store/emailSlice';

function EmailList(props) {
	const dispatch = useDispatch();
	const email = useSelector(selectemail);
	const searchText = useSelector(({ emailApp }) => emailApp.email.searchText);
	const user = useSelector(({ emailApp }) => emailApp.user);

	const [filteredData, setFilteredData] = useState(null);

	const columns = React.useMemo(
		() => [
			{
				Header: 'Username',
				accessor: 'username',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Password',
				accessor: 'password',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Server Address',
				accessor: 'server_address',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Port',
				accessor: 'port',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'SSL Port',
				accessor: 'port_a',
				className: 'font-bold',
				sortable: true
			},
			{
				id: 'action',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(deleteThis(row.original.id));
							}}
						>
							<Icon>delete</Icon>
						</IconButton>
					</div>
				)
			}
		],
		[dispatch, user.starred]
	);

	useEffect(() => {
		function getFilteredArray(entities, _searchText) {
			if (_searchText.length === 0) {
				return email;
			}
			return FuseUtils.filterArrayByString(email, _searchText);
		}

		if (email) {
			setFilteredData(getFilteredArray(email, searchText));
		}
	}, [email, searchText]);

	if (!filteredData) {
		return null;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					There are no email!
				</Typography>
			</div>
		);
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<EmailTable
				columns={columns}
				data={filteredData}
				onRowClick={(ev, row) => {
					if (row) {
						dispatch(openEditEmailDialog(row.original));
					}
				}}
			/>
		</FuseAnimate>
	);
}

export default EmailList;
