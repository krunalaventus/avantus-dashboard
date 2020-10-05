import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import UnsubscribeListHeader from './UnsubscribeListHeader';
import UnsubscribeListList from './UnsubscribeListList';
import UnsubscribeListSidebarContent from './UnsubscribeListSidebarContent';
import reducer from './store';
import { getunsubscribeList } from './store/unsubscribeListSlice';
import { getUserData } from './store/userSlice';

function UnsubscribeListApp(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);
	const routeParams = useParams();

	useDeepCompareEffect(() => {
		dispatch(getunsubscribeList(routeParams));
		dispatch(getUserData());
	}, [dispatch, routeParams]);

	return (
		<>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-24 h-full',
					content: 'flex flex-col h-full',
					leftSidebar: 'w-256 border-0',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
					wrapper: 'min-h-0'
				}}
				header={<UnsubscribeListHeader pageLayout={pageLayout} />}
				// content={<UnsubscribeListList />}
				// leftSidebarContent={<unsubscribeListSidebarContent />}
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>
		</>
	);
}

export default withReducer('unsubscribeListApp', reducer)(UnsubscribeListApp);
