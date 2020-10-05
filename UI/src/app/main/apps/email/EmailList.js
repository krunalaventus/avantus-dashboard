import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import { CircularProgress, TextField } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Autocomplete } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import EmailMultiSelectMenu from './EmailMultiSelectMenu';
import EmailTable from './EmailTable';
import { openEditEmailDialog, deleteThis, toggleStarredEmail, selectemail } from './store/emailSlice';

function EmailList(props) {
	const dispatch = useDispatch();
	const email = useSelector(selectemail);
	const searchText = useSelector(({ emailApp }) => emailApp.email.searchText);
	const user = useSelector(({ emailApp }) => emailApp.user);
	const [open, setOpen] = React.useState(false);
	const [options, setOptions] = React.useState([]);
	const [customerValue, setValue] = React.useState(options[0]);
	const [inputValue, setInputValue] = React.useState('');
	const loading = open && options.length === 0;
	const history = useHistory();

	useEffect(() => {
		let active = true;

		if (!loading) {
			return undefined;
		}

		(async () => {
			const token = localStorage.getItem('token');
			const response = await fetch(`${process.env.REACT_APP_API_URL}user/search`, {
				headers: {
					Authorization: token
				}
			});
			await sleep(1e3);
			const res = await response.json();
			const countries = res.data;

			if (active) {
				setOptions(countries);
			}
		})();

		return () => {
			active = false;
		};
	}, [loading]);
	useEffect(() => {
		if (!open) {
			(async () => {
				const token = localStorage.getItem('token');
				const response = await fetch(`${process.env.REACT_APP_API_URL}user/search`, {
					headers: {
						Authorization: token
					}
				});
				await sleep(1e3);
				const res = await response.json();
				const countries = res.data;
				setOptions(countries);
			})();
		}
	}, [open]);

	function sleep(delay = 0) {
		return new Promise(resolve => {
			setTimeout(resolve, delay);
		});
	}
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
				Header: 'Customer',
				accessor: 'user.first_name',
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

	function loadTask(id) {
		history.push(`/apps/email/${id}`);
	}
	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<div>
				<Autocomplete
					id="asynchronous-demo"
					style={{ width: 300 }}
					open={open}
					onOpen={() => {
						setOpen(true);
					}}
					onClose={() => {
						setOpen(false);
					}}
					onInputChange={(event, newInputValue) => {
						setInputValue(newInputValue);
					}}
					onChange={(event, newValue) => {
						loadTask(newValue?.id ?? 'all');
					}}
					getOptionSelected={(option, value) => option.name === value.name}
					getOptionLabel={option => option.name}
					options={options}
					loading={loading}
					renderInput={params => (
						<TextField
							{...params}
							label="Customer"
							variant="outlined"
							InputProps={{
								...params.InputProps,
								endAdornment: (
									<>
										{loading ? <CircularProgress color="inherit" size={20} /> : null}
										{params.InputProps.endAdornment}
									</>
								)
							}}
						/>
					)}
				/>
				<br />
				{filteredData.length !== 0 ? (
					<EmailTable
						columns={columns}
						data={filteredData}
						onRowClick={(ev, row) => {
							if (row) {
								dispatch(openEditEmailDialog(row.original));
							}
						}}
					/>
				) : (
					<div className="flex flex-1 items-center justify-center h-full">
						<Typography color="textSecondary" variant="h5">
							There are no emails!
						</Typography>
					</div>
				)}
			</div>
		</FuseAnimate>
	);
}

export default EmailList;
