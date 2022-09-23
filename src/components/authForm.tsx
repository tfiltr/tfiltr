import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { Button, Stack, TextInput, Center } from '@mantine/core';

const authFromSchema = z.object({
    email: z.string().email('Invalid email'),
});

const AuthForm = () => {
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


export default AuthForm;