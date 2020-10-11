import Loader from 'react-loader-spinner';
import FuseAnimate from '@fuse/core/FuseAnimate';
import _ from '@lodash';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import MailChip from '../MailChip';
import { selectLabelsEntities } from '../store/labelsSlice';
import { getMail } from '../store/mailSlice';

function MailDetails(props) {
	const dispatch = useDispatch();
	const mail = useSelector(({ mailApp }) => mailApp);
	const labels = useSelector(selectLabelsEntities);

	const routeParams = useParams();
	const [showDetails, setShowDetails] = useState(false);
	const [emails, setEmails] = React.useState('');
	const [state, setState] = React.useState({ loading: true });
	// useDeepCompareEffect(() => {
	// 	dispatch(getMail(routeParams));
	// }, [dispatch, routeParams]);

	// if (!mail) {
	// 	return null;
	// }
	useEffect(() => {
		(async () => {
			const token = localStorage.getItem('token');
			const responseC = await fetch(`${process.env.REACT_APP_API_URL}imapEmails/${routeParams.mailId}`, {
				headers: {
					Authorization: token
				}
			});
			const res = await responseC.json();
			const responseData = res.data;
			setEmails(responseData);
			setState({ loading: false });
		})();
	}, []);
	console.log(state.loading);
	return state.loading ? (
		<Loader type="Puff" color="#00BFFF" height={100} width={100} />
	) : (
		emails.map(email => (
			<div className="p-16 sm:p-24">
				<div className="flex items-center justify-between overflow-hidden">
					<div className="flex flex-col">
						<FuseAnimate delay={100}>
							<Typography variant="subtitle1" className="flex">
								{email.data.email_subject}
							</Typography>
						</FuseAnimate>
						<MailChip
							className="mx-2 mt-4"
							title={email.data.x_gm_label}
							color="#D3D3D3"
							key={email.data.x_gm_label}
						/>
					</div>
				</div>

				<Divider className="my-16" />

				<FuseAnimate animation="transition.slideUpIn" delay={200}>
					<div>
						<div className="flex items-start justify-between">
							<div className="flex items-center justify-start">
								<Avatar>{email.data.email_from}</Avatar>
								<div className="flex flex-col mx-8">
									<span>{email.data.email_from}</span>
									<Typography
										component="div"
										color="textSecondary"
										variant="body1"
										className="flex items-center justify-start"
									>
										<div>to</div>
										<div className="mx-4">{email.data.email_to}</div>
									</Typography>
								</div>
							</div>
							<IconButton>
								<Icon>more_vert</Icon>
							</IconButton>
						</div>

						<div className="my-16">
							<Typography
								color="primary"
								className="cursor-pointer underline mb-8"
								onClick={() => {
									setShowDetails(!showDetails);
								}}
							>
								{showDetails ? <span>Hide Details</span> : <span>Show Details</span>}
							</Typography>

							{showDetails && (
								<div className="flex">
									<Typography variant="body2" className="flex flex-col">
										<span>From:</span>
										<span>To:</span>
										<span>Date:</span>
									</Typography>

									<Typography variant="body2" color="textSecondary" className="px-4 flex flex-col">
										<span>{email.data.email_from}</span>
										<span>{email.data.email_to}</span>
										<span>{email.data.email_date}</span>
									</Typography>
								</div>
							)}
						</div>

						<Typography variant="body2" dangerouslySetInnerHTML={{ __html: email.body }} />

						<Divider className="my-16" />

						{/* {mail.attachments && (
						<div>
							<Typography variant="subtitle1" className="mb-16">
								<span className="mx-4">Attachments</span>
								<span>({mail.attachments.length})</span>
							</Typography>

							<div className="flex flex-wrap -mx-8">
								{mail.attachments.map(attachment => (
									<div className="w-192 px-8 pb-16" key={attachment.fileName}>
										<img
											className="w-full rounded-4"
											src={attachment.preview}
											alt={attachment.fileName}
										/>
										<div className="flex flex-col">
											<Typography
												color="primary"
												className="underline cursor-pointer"
												onClick={event => event.preventDefault()}
											>
												View
											</Typography>
											<Typography
												color="primary"
												className="underline cursor-pointer"
												onClick={event => event.preventDefault()}
											>
												Download
											</Typography>
											<Typography>({attachment.size})</Typography>
										</div>
									</div>
								))}
							</div>
						</div>
					)} */}
					</div>
				</FuseAnimate>
			</div>
		))
	);
}

export default withRouter(MailDetails);
