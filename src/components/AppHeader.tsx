import { Center, Group, Header, Title } from '@mantine/core';
import styled from '@emotion/styled';
import ToggleColorModeButton from './ToggleColorModeButton';

const AppHeader = () => {
    return (
        <StyledHeader height={60}>
            <Group position="apart" align="center" px={20}>
                <Title order={2}>
                    Tfiltr
                </Title>
                <ToggleColorModeButton />
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