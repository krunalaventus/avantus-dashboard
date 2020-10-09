import Loader from 'react-loader-spinner';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseUtils from '@fuse/utils';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import { getMails, selectMails } from '../store/mailsSlice';
import MailListItem from './MailListItem';

function MailList(props) {
	const dispatch = useDispatch();
	const mails = useSelector(selectMails);
	const searchText = useSelector(({ mailApp }) => mailApp.mails.searchText);

	const postStatus = useSelector(state => state.mailApp.mails.status);
	const routeParams = useParams();
	const [filteredData, setFilteredData] = useState(null);
	const { t } = useTranslation('mailApp');
	const [state, setState] = React.useState({ loading: true });

	useDeepCompareEffect(() => {
		dispatch(getMails(routeParams));
		setState({ loading: false });
	}, [dispatch, routeParams]);

	useEffect(() => {
		function getFilteredArray() {
			if (searchText.length === 0) {
				return mails;
			}

			return FuseUtils.filterArrayByString(mails, searchText);
		}

		if (mails) {
			setFilteredData(getFilteredArray());
		}
	}, [mails, searchText]);

	if (!filteredData) {
		return null;
	}

	if (filteredData.length === 0) {
		return postStatus === 'loading' ? (
			<Loader type="Puff" color="#00BFFF" height={100} width={100} />
		) : (
			<FuseAnimate delay={100}>
				<div className="flex flex-1 items-center justify-center h-full">
					<Typography color="textSecondary" variant="h5">
						{t('NO_MESSAGES')}
					</Typography>
				</div>
			</FuseAnimate>
		);
	}

	return postStatus === 'loading' ? (
		<Loader type="Puff" color="#00BFFF" height={100} width={100} />
	) : (
		<List className="p-0">
			<FuseAnimateGroup
				enter={{
					animation: 'transition.slideUpBigIn'
				}}
			>
				{filteredData.map(mail => (
					<MailListItem mail={mail} key={mail.id} />
				))}
			</FuseAnimateGroup>
		</List>
	);
}

export default withRouter(MailList);
