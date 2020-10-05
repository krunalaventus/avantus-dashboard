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
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MenuItem } from '@material-ui/core';
import { removeTask, updateTask, addTask, closeNewTaskDialog, closeEditTaskDialog, getUsers } from './store/taskSlice';

const defaultFormState = {
	id: '',
	task_title: '',
	task_description: '',
	completion_flag: '',
	customer_id: 0,
	user: {
		first_name: ''
	}
};

function TaskDialog(props) {
	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}

	const dispatch = useDispatch();
	const taskDialog = useSelector(({ taskApp }) => taskApp.task.taskDialog);

	const { form, handleChange, setForm } = useForm(defaultFormState);

	const [open, setOpen] = React.useState(false);
	const [options, setOptions] = React.useState([]);
	const [customerValue, setValue] = React.useState(options[0]);
	let inputValue = '';

	const initDialog = useCallback(() => {
		/**
		 * Dialog type: 'edit'
		 */
		if (taskDialog.type === 'edit' && taskDialog.data) {
			setForm({ ...taskDialog.data });
			inputValue = taskDialog.data.user?.first_name;
		}

		/**
		 * Dialog type: 'new'
		 */
		if (taskDialog.type === 'new') {
			setForm({
				...defaultFormState,
				...taskDialog.data,
				id: FuseUtils.generateGUID()
			});
		}
	}, [taskDialog.data, taskDialog.type, setForm]);

	useEffect(() => {
		/**
		 * After Dialog Open
		 */
		if (taskDialog.props.open) {
			initDialog();
		}
	}, [taskDialog.props.open, initDialog]);

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
			})();
		}
	}, [open]);

	function sleep(delay = 0) {
		return new Promise(resolve => {
			setTimeout(resolve, delay);
		});
	}

	function closeComposeDialog() {
		return taskDialog.type === 'edit' ? dispatch(closeEditTaskDialog()) : dispatch(closeNewTaskDialog());
	}

	function handleSubmit(event) {
		if (taskDialog.type === 'new') {
			dispatch(addTask(event));
		} else {
			dispatch(updateTask(event));
		}
		closeComposeDialog();
	}

	function handleRemove() {
		dispatch(removeTask(form.id));
		closeComposeDialog();
	}
	return (
		<Dialog
			classes={{
				paper: 'm-24 rounded-8'
			}}
			{...taskDialog.props}
			onClose={closeComposeDialog}
			fullWidth
			maxWidth="sm"
		>
			<AppBar position="static" elevation={1}>
				<Toolbar className="flex w-full">
					<Typography variant="subtitle1" color="inherit">
						{taskDialog.type === 'new' ? 'New Task' : 'Edit Task'}
					</Typography>
				</Toolbar>
				{/* <div className="flex flex-col items-center justify-center pb-24">
					<Avatar className="w-96 h-96" alt="task avatar" src={form.avatar} />
					{taskDialog.type === 'edit' && (
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
							label="Title"
							autoFocus
							id="task_title"
							name="task_title"
							value={form.task_title}
							variant="outlined"
							fullWidth
							required
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-20" />
						<TextFieldFormsy
							className="mb-24"
							label="Description"
							id="task_description"
							name="task_description"
							value={form.task_description}
							variant="outlined"
							fullWidth
							required
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-20" />
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

				{taskDialog.type === 'new' ? (
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

export default TaskDialog;
