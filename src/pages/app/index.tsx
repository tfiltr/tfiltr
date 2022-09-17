import type { NextPageWithLayout } from '../_app';
import { withAppLayout } from 'src/layouts/app.layout';
import {trpc} from 'src/utils/trpc';

const AppHome: NextPageWithLayout = () => {
    return <>app</>;
};

AppHome.getLayout = withAppLayout;
export default AppHome;