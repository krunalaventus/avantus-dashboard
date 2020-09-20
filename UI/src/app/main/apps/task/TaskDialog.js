import { TextFieldFormsy } from '@fuse/core/formsy';
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
import { removeTask, updateTask, addTask, closeNewTaskDialog, closeEditTaskDialog } from './store/taskSlice';

const defaultFormState = {
	id: '',
	task_title: '',
	task_description: '',
	completion_flag: '',
	customer_id: 0
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

	const initDialog = useCallback(() => {
		/**
		 * Dialog type: 'edit'
		 */
		if (taskDialog.type === 'edit' && taskDialog.data) {
			setForm({ ...taskDialog.data });
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

	function closeComposeDialog() {
		return taskDialog.type === 'edit' ? dispatch(closeEditTaskDialog()) : dispatch(closeNewTaskDialog());
	}

	function canBeSubmitted() {
		return form.task_title.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(taskDialog.type);
		if (taskDialog.type === 'new') {
			dispatch(addTask(form));
		} else {
			dispatch(updateTask(form));
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

						<TextFieldFormsy
							className="mb-24"
							label="Title"
							autoFocus
							id="task_title"
							name="task_title"
							value={form.task_title}
							variant="outlined"
							fullWidth
							validations={{
								minLength: 4
							}}
							validationErrors={{
								minLength: 'Min character length is 4'
							}}
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
							validations={{
								minLength: 4
							}}
							validationErrors={{
								minLength: 'Min character length is 4'
							}}
							required
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-20" />
						<TextFieldFormsy
							className="mb-24"
							label="Customer"
							id="customer_id"
							name="customer_id"
							value={form.customer_id}
							variant="outlined"
							fullWidth
							validations={{
								minLength: 4
							}}
							validationErrors={{
								minLength: 'Min character length is 4'
							}}
							required
						/>
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
						<IconButton onClick={handleRemove}>
							<Icon>delete</Icon>
						</IconButton>
					</DialogActions>
				)}
			</Formsy>
		</Dialog>
	);
}

export default TaskDialog;
