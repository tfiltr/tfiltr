import { UnstyledButton, Group, Avatar, Text, Button, useMantineTheme } from '@mantine/core';
import styled from '@emotion/styled';
import { openModal } from '@mantine/modals';
import { NextLink } from '@mantine/next';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import supabase from 'src/utils/supabaseClient';
import { useAuth } from 'src/context/auth';

const ProfileInfoButton = () => {
    const {colorScheme} = useMantineTheme();
    const {user} = useAuth();

    const onLoginClick = () => {
        openModal({
            title: 'Login / Sign up',
            children: (
                <Auth
                magicLink
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={['discord', 'twitter']}
                theme={colorScheme}
                />
            )
        });
    };

    if (!user) return (
        <Button variant='default' onClick={()=> onLoginClick()}>
            Login / Sign Up
        </Button>
    );

    return (
        <UnstyledButton component={NextLink} href='/api/auth/logout?returnTo=/app'>
          <StyledGroup>
            <Avatar size={40} color="blue">BH</Avatar>
            <div>
              <Text>Bob Handsome</Text>
              <Text size="xs" color="dimmed">{user.email}</Text>
            </div>
          </StyledGroup>
        </UnstyledButton>
      );
};

const StyledGroup = styled(Group)`

`;

export default ProfileInfoButton;