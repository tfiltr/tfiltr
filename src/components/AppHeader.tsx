import { Center, Group, Header, Title } from '@mantine/core';
import styled from '@emotion/styled';
import ToggleColorModeButton from './ToggleColorModeButton';
import ProfileInfoButton from './ProfileInfoButton';

const AppHeader = () => {
    return (
        <StyledHeader height={60}>
            <Group position="apart" align="center" px={20}>
                <Title order={2}>
                    Tfiltr
                </Title>
                <Group position='right' align='center' >
                    <ToggleColorModeButton />
                    <ProfileInfoButton />
                </Group>
            </Group>
        </StyledHeader>
    );
};

const StyledHeader = styled(Header)`
    margin: 20px 20px 0px;
    border-radius: 8px;
    & > div {
        height: 100%;
    }
`;



export default AppHeader;