import type { NextPageWithLayout } from '../_app';
import { withAppLayout } from 'src/layouts/app.layout';
import {trpc} from 'src/utils/trpc';
import ToggleColorSchemeButton from 'src/components/ToggleColorModeButton';

const AppHome: NextPageWithLayout = () => {
    return <>
        <ToggleColorSchemeButton />
    </>;
};

AppHome.getLayout = withAppLayout;
export default AppHome;