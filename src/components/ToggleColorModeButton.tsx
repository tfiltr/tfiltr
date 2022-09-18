import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

const ToggleColorModeButton = ({...rest}) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
        variant="outline"
        color={dark ? 'pink' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
        {...rest}
      >
        {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
      </ActionIcon>
    );
};

export default ToggleColorModeButton;