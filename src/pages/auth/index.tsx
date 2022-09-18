import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import styled from '@emotion/styled';
import { Button, Stack, TextInput, Container, Center } from '@mantine/core';

const authFromSchema = z.object({
    email: z.string().email('Invalid email'),
});

const AuthPage = () => {
    const form = useForm({
        validate: zodResolver(authFromSchema),
        initialValues: {
            email: ''
        }
    });

    return (
        <Center style={{ width: 400, height: 200}}>
                <Stack>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="example@mail.com"
                        {...form.getInputProps('email')}
                    />
                    <Button>
                        Login
                    </Button>
                </Stack>
        </Center>
    );
};


export default AuthPage;