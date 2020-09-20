import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setemailUnstarred, setemailStarred, removeemail } from './store/emailSlice';

function EmailMultiSelectMenu(props) {
	const dispatch = useDispatch();
	const { selectedEmailIds } = props;

	const [anchorEl, setAnchorEl] = useState(null);

	function openSelectedEmailMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function closeSelectedemailMenu() {
		setAnchorEl(null);
	}

	return (
		<>
			<IconButton
				className="p-0"
				aria-owns={anchorEl ? 'selectedemailMenu' : null}
				aria-haspopup="true"
				onClick={openSelectedEmailMenu}
			>
				<Icon>more_horiz</Icon>
			</IconButton>
			<Menu id="selectedemailMenu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeSelectedemailMenu}>
				<MenuList>
					<MenuItem
						onClick={() => {
							dispatch(removeemail(selectedEmailIds));
							closeSelectedemailMenu();
						}}
					>
						<ListItemIcon className="min-w-40">
							<Icon>delete</Icon>
						</ListItemIcon>
						<ListItemText primary="Remove" />
					</MenuItem>
					<MenuItem
						onClick={() => {
							dispatch(setemailStarred(selectedEmailIds));
							closeSelectedemailMenu();
						}}
					>
						<ListItemIcon className="min-w-40">
							<Icon>star</Icon>
						</ListItemIcon>
						<ListItemText primary="Starred" />
					</MenuItem>
					<MenuItem
						onClick={() => {
							dispatch(setemailUnstarred(selectedEmailIds));
							closeSelectedemailMenu();
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

export default EmailMultiSelectMenu;
