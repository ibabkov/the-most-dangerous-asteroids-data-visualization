import * as React from 'react';

import type { NextPage } from 'next';

import { ApplicationContainer } from '../containers/Application';
import { Fallback } from '../components/Fallback';

const MainPage: NextPage = () => {
	return (
		<React.Suspense fallback={<Fallback />}>
			<ApplicationContainer />
		</React.Suspense>
	);
};

export default MainPage;
