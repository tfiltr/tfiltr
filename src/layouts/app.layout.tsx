import { AppShell, Navbar } from '@mantine/core';
import AppAside from 'src/components/AppAside';
import AppHeader from 'src/components/AppHeader';

interface AppLayoutProps {
    children: React.ReactElement,
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
    <AppShell
     header={<AppHeader />}
     aside={<AppAside/>}
     styles={{
        main: {
            padding: '0',
            backgroundColor: 'pink'
        }
     }}
     >
        {children}
    </AppShell>);
};

export const withAppLayout = (page: React.ReactElement) => <AppLayout>{page}</AppLayout>;
export default AppLayout;