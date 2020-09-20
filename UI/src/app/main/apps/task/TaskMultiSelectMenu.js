import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { settaskUnstarred, settaskStarred, removetask } from './store/taskSlice';

function TaskMultiSelectMenu(props) {
	const dispatch = useDispatch();
	const { selectedTaskIds } = props;

	const [anchorEl, setAnchorEl] = useState(null);

	function openSelectedTaskMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function closeSelectedtaskMenu() {
		setAnchorEl(null);
	}

	return (
		<>
			<IconButton
				className="p-0"
				aria-owns={anchorEl ? 'selectedtaskMenu' : null}
				aria-haspopup="true"
				onClick={openSelectedTaskMenu}
			>
				<Icon>more_horiz</Icon>
			</IconButton>
			<Menu id="selectedtaskMenu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeSelectedtaskMenu}>
				<MenuList>
					<MenuItem
						onClick={() => {
							dispatch(removetask(selectedTaskIds));
							closeSelectedtaskMenu();
						}}
					>
						<ListItemIcon className="min-w-40">
							<Icon>delete</Icon>
						</ListItemIcon>
						<ListItemText primary="Remove" />
					</MenuItem>
					<MenuItem
						onClick={() => {
							dispatch(settaskStarred(selectedTaskIds));
							closeSelectedtaskMenu();
						}}
					>
						<ListItemIcon className="min-w-40">
							<Icon>star</Icon>
						</ListItemIcon>
						<ListItemText primary="Starred" />
					</MenuItem>
					<MenuItem
						onClick={() => {
							dispatch(settaskUnstarred(selectedTaskIds));
							closeSelectedtaskMenu();
						}}
					>
						<ListItemIcon className="min-w-40">
							<Icon>star_border</Icon>
						</ListItemIcon>
						<ListItemText primary="Unstarred" />
					</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
}

export default TaskMultiSelectMenu;
