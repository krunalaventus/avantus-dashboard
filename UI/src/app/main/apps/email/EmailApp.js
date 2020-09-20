import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import EmailDialog from './EmailDialog';
import EmailHeader from './EmailHeader';
import EmailList from './EmailList';
import EmailSidebarContent from './EmailSidebarContent';
import reducer from './store';
import { getemail } from './store/emailSlice';
import { getUserData } from './store/userSlice';

function EmailApp(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);
	const routeParams = useParams();

	useDeepCompareEffect(() => {
		dispatch(getemail(routeParams));
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
				header={<EmailHeader pageLayout={pageLayout} />}
				content={<EmailList />}
				// leftSidebarContent={<emailSidebarContent />}
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>
			<EmailDialog />
		</>
	);
}

export default withReducer('emailApp', reducer)(EmailApp);
