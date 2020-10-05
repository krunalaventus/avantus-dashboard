import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { submitCustomerLogin } from 'app/auth/store/loginSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactsMultiSelectMenu from './ContactsMultiSelectMenu';
import ContactsTable from './ContactsTable';
import { openEditContactDialog, deleteThis, toggleStarredContact, selectContacts, login } from './store/contactsSlice';

function ContactsList(props) {
	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts);
	const searchText = useSelector(({ contactsApp }) => contactsApp.contacts.searchText);
	const user = useSelector(({ contactsApp }) => contactsApp.user);

	const [filteredData, setFilteredData] = useState(null);
	function StatusChecker(prop) {
		const isCompleted = prop.status;
		if (isCompleted === 1) {
			return 'Active';
		}
		return 'InActive';
	}
	const columns = React.useMemo(
		() => [
			{
				Header: 'First Name',
				accessor: 'first_name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Last Name',
				accessor: 'last_name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Email Address',
				accessor: 'email',
				sortable: true
			},
			{
				Header: 'Username',
				accessor: 'user_name',
				sortable: true
			},
			{
				Header: 'Api Key',
				accessor: 'api_link',
				sortable: true
			},
			{
				Header: 'Status',
				accessor: 'status',
				sortable: true,
				Cell: ({ row }) => <StatusChecker status={row.original.status} />
			},
			{
				id: 'action',
				width: 128,
				Header: 'Delete',
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
			},
			{
				id: 'login',
				Header: 'Login as Customer',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(submitCustomerLogin({ id: row.original.id }));
								// dispatch(login(row.original.id));
							}}
						>
							<Icon>exit_to_app</Icon>
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
				return contacts;
			}
			return FuseUtils.filterArrayByString(contacts, _searchText);
		}

		if (contacts) {
			setFilteredData(getFilteredArray(contacts, searchText));
		}
	}, [contacts, searchText]);

	if (!filteredData) {
		return null;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					There are no contacts!
				</Typography>
			</div>
		);
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<ContactsTable
				columns={columns}
				data={filteredData}
				onRowClick={(ev, row) => {
					if (row) {
						dispatch(openEditContactDialog(row.original));
					}
				}}
			/>
		</FuseAnimate>
	);
}

export default ContactsList;
