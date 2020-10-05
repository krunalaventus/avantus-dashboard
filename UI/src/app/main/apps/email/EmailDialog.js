import { SelectFormsy, TextFieldFormsy } from '@fuse/core/formsy';
import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/utils/FuseUtils';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Formsy from 'formsy-react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem } from '@material-ui/core';
import { removeEmail, updateEmail, addEmail, closeNewEmailDialog, closeEditEmailDialog } from './store/emailSlice';

const defaultFormState = {
	id: '',
	username: '',
	password: '',
	server_address: '',
	port: '',
	port_a: '',
	customer_id: 0,
	user: {
		first_name: ''
	}
};

function EmailDialog(props) {
	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}

	const dispatch = useDispatch();
	const emailDialog = useSelector(({ emailApp }) => emailApp.email.emailDialog);

	const { form, handleChange, setForm } = useForm(defaultFormState);

	const initDialog = useCallback(() => {
		/**
		 * Dialog type: 'edit'
		 */
		if (emailDialog.type === 'edit' && emailDialog.data) {
			setForm({ ...emailDialog.data });
		}

		/**
		 * Dialog type: 'new'
		 */
		if (emailDialog.type === 'new') {
			setForm({
				...defaultFormState,
				...emailDialog.data,
				id: FuseUtils.generateGUID()
			});
		}
	}, [emailDialog.data, emailDialog.type, setForm]);

	useEffect(() => {
		/**
		 * After Dialog Open
		 */
		if (emailDialog.props.open) {
			initDialog();
		}
	}, [emailDialog.props.open, initDialog]);

	function closeComposeDialog() {
		return emailDialog.type === 'edit' ? dispatch(closeEditEmailDialog()) : dispatch(closeNewEmailDialog());
	}

	function canBeSubmitted() {
		return form.username.length > 0;
	}
	const [open, setOpen] = React.useState(false);
	const [options, setOptions] = React.useState([]);
	const [customerValue, setValue] = React.useState(options[0]);
	const [inputValue, setInputValue] = React.useState();
	const loading = open && options.length === 0;
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
				setInputValue(form.user.first_name);
				setValue(form.customer_id);
			})();
		}
	}, [open]);

	function sleep(delay = 0) {
		return new Promise(resolve => {
			setTimeout(resolve, delay);
		});
	}

	function handleSubmit(event) {
		if (emailDialog.type === 'new') {
			dispatch(addEmail(event));
		} else {
			dispatch(updateEmail(event));
		}
		closeComposeDialog();
	}

	function handleRemove() {
		dispatch(removeEmail(form.id));
		closeComposeDialog();
	}
	return (
		<Dialog
			classes={{
				paper: 'm-24 rounded-8'
			}}
			{...emailDialog.props}
			onClose={closeComposeDialog}
			fullWidth
			maxWidth="sm"
		>
			<AppBar position="static" elevation={1}>
				<Toolbar className="flex w-full">
					<Typography variant="subtitle1" color="inherit">
						{emailDialog.type === 'new' ? 'New Email' : 'Edit Email'}
					</Typography>
				</Toolbar>
				{/* <div className="flex flex-col items-center justify-center pb-24">
					<Avatar className="w-96 h-96" alt="email avatar" src={form.avatar} />
					{emailDialog.type === 'edit' && (
						<Typography variant="h6" color="inherit" className="pt-8">
							{form.firstName}
						</Typography>
					)}
				</div> */}
			</AppBar>
			<Formsy
				onValidSubmit={handleSubmit}
				onValid={enableButton}
				onInvalid={disableButton}
				ref={formRef}
				className="flex flex-col md:overflow-hidden"
			>
				<DialogContent classes={{ root: 'p-24' }}>
					<div className="flex">
						<div className="min-w-48 pt-20">{/* <Icon color="action">account_circle</Icon> */}</div>

						<TextFieldFormsy name="id" value={form.id} type="hidden" />
						<TextFieldFormsy
							className="mb-24"
							label="Username"
							autoFocus
							id="username"
							name="username"
							value={form.username}
							variant="outlined"
							fullWidth
							required
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-20" />
						<TextFieldFormsy
							className="mb-24"
							label="Password"
							id="password"
							name="password"
							value={form.password}
							variant="outlined"
							fullWidth
							required
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-20" />
						<TextFieldFormsy
							className="mb-24"
							label="Server Address"
							id="server_address"
							name="server_address"
							value={form.server_address}
							variant="outlined"
							fullWidth
							required
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-20" />
						<TextFieldFormsy
							className="mb-24"
							label="Port"
							id="port"
							name="port"
							value={form.port}
							variant="outlined"
							fullWidth
							required
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-20" />
						<TextFieldFormsy
							className="mb-24"
							label="SSL Port"
							id="port_a"
							name="port_a"
							value={form.port_a}
							variant="outlined"
							fullWidth
							required
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-20" />
						<TextFieldFormsy name="customer_id" value={customerValue} type="hidden" />
						<SelectFormsy
							className="mb-24 MuiFormControl-fullWidth"
							label="Customer"
							id="Customer"
							name="customer_id"
							value={form.customer_id === 0 ? '' : form.customer_id}
							variant="outlined"
							required
						>
							<MenuItem value="">Select</MenuItem>
							{options.map((e, key) => {
								return (
									<MenuItem value={e.id} key={key}>
										{e.name}
									</MenuItem>
								);
							})}
						</SelectFormsy>
					</div>
				</DialogContent>

				{emailDialog.type === 'new' ? (
					<DialogActions className="justify-between p-8">
						<div className="px-16">
							<Button
								type="submit"
								variant="contained"
								color="primary"
								className="mx-auto mt-32 mb-80"
								disabled={!isFormValid}
							>
								Save
							</Button>
						</div>
					</DialogActions>
				) : (
					<DialogActions className="justify-between p-8">
						<div className="px-16">
							<Button
								type="submit"
								variant="contained"
								color="primary"
								className="mx-auto mt-32 mb-80"
								disabled={!isFormValid}
							>
								Save
							</Button>
						</div>
					</DialogActions>
				)}
			</Formsy>
		</Dialog>
	);
}

export default EmailDialog;
