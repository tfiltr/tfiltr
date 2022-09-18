import { Center, Group, Aside, Title, Container } from '@mantine/core';
import styled from '@emotion/styled';
import ToggleColorModeButton from './ToggleColorModeButton';

const AppAside= () => {
    return (
        <StyledContainer width={{base: 300}}>

        </StyledContainer>
    );
};

const StyledContainer = styled(Aside)`
    top: 100px;
    right: 20px;
    bottom: 20px;
    height: unset;
    border-radius: 8px;
`;




export default AppAside;