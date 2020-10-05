import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import LeadsHeader from './LeadsHeader';
import LeadsList from './LeadsList';
import LeadsSidebarContent from './LeadsSidebarContent';
import reducer from './store';
import { getleads } from './store/leadsSlice';
import { getUserData } from './store/userSlice';

function LeadsApp(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);
	const routeParams = useParams();

	useDeepCompareEffect(() => {
		dispatch(getleads(routeParams));
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
				header={<LeadsHeader pageLayout={pageLayout} />}
				content={<LeadsList />}
				// leftSidebarContent={<leadsSidebarContent />}
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>
		</>
	);
}

export default withReducer('leadsApp', reducer)(LeadsApp);
