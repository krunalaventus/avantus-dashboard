import _ from '@lodash';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import MailChip from '../MailChip';
import { toggleInSelectedMails } from '../store/mailsSlice';
import { selectLabelsEntities } from '../store/labelsSlice';

const pathToRegexp = require('path-to-regexp');

const useStyles = makeStyles(theme => ({
	mailItem: {
		borderBottom: `1px solid  ${theme.palette.divider}`,

		'&.unread': {
			background: 'rgba(0,0,0,0.03)'
		},
		'&.selected': {
			'&::after': {
				content: '""',
				position: 'absolute',
				left: 0,
				display: 'block',
				height: '100%',
				width: 3,
				backgroundColor: theme.palette.primary.main
			}
		}
	},
	avatar: {
		backgroundColor: theme.palette.primary[500]
	}
}));

const MailListItem = props => {
	const dispatch = useDispatch();
	const selectedMailIds = useSelector(({ mailApp }) => mailApp.mails.selectedMailIds);
	const labels = useSelector(selectLabelsEntities);
	const routeParams = useParams();

	const classes = useStyles(props);
	const toPath = pathToRegexp.compile(props.match.path);
	const checked = selectedMailIds.length > 0 && selectedMailIds.find(id => id === props.mail.id) !== undefined;
	const maildates = new Date(props.mail.email_date);
	const maildate = `${maildates.getMonth()}/${maildates.getDate()}/${maildates.getFullYear()} ${maildates.getHours()}:${maildates.getMinutes()}:${maildates.getSeconds()}`;
	return (
		<ListItem
			dense
			button
			onClick={() =>
				props.history.push(
					toPath({
						...routeParams,
						mailId: props.mail.id
					})
				)
			}
			className={clsx(classes.mailItem, checked && 'selected', 'read', 'py-16 px-0 md:px-8')}
		>
			{/* <Checkbox
				tabIndex={-1}
				disableRipple
				checked={checked}
				onChange={() => dispatch(toggleInSelectedMails(props.mail.id))}
				onClick={ev => ev.stopPropagation()}
			/> */}

			<div className="flex flex-1 flex-col relative overflow-hidden">
				<div className="flex items-center justify-between px-16 pb-8">
					<div className="flex items-center">
						<Avatar className={classes.avatar} />
						<Typography variant="subtitle1" className="mx-8">
							{props.mail.email_from}
						</Typography>
						{/* <b>{props.mail.count} email</b> */}
					</div>
					<Typography variant="subtitle1">{maildate}</Typography>
				</div>

				<div className="flex flex-col px-16 py-0">
					<Typography className="truncate">{props.mail.email_subject}</Typography>
					{/* <Typography color="textSecondary" className="truncate">
						{_.truncate(props.mail.message.replace(/<(?:.|\n)*?>/gm, ''), { length: 180 })}
					</Typography> */}
				</div>

				<div className="flex justify-end px-12">
					<MailChip
						className="mx-2 mt-4"
						title={props.mail.x_gm_label}
						color="#D3D3D3"
						key={props.mail.x_gm_label}
					/>
				</div>
			</div>
		</ListItem>
	);
};

export default withRouter(MailListItem);
