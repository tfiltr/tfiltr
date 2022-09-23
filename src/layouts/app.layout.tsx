interface AppLayoutProps {
    children: React.ReactElement,
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (<>
        {children}
    </>);
};

export const withAppLayout = (page: React.ReactElement) => <AppLayout>{page}</AppLayout>;
export default AppLayout;